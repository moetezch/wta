import React, { useState } from 'react'
import Parser from 'rss-parser'
import Item from './Item'

function Form() {
  const [inputValue, setInputValue] = useState('')
  const [parseError, setParseError] = useState('')
  const [buttonClasses, setButtonClasses] = useState('button is-link')
  const [itemsList, setItemsList] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)
  function rssParser(url) {
    let parser = new Parser()
    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'

    ;(async () => {
      try {
        let feed = await parser.parseURL(CORS_PROXY + url)
        setItemsList(feed.items)
        setButtonClasses('button is-link')
        setSelectedItem(feed.items[0])
      } catch (error) {
        setParseError(
          'Problem parsing the rss feed, please check the url or try again'
        )
        setButtonClasses('button is-link')
        console.error(error)
      }
    })()
  }

  return (
    <>
      <div className='field'>
        <label className='label'>RSS feed</label>
        <div className='control'>
          <input
            className='input'
            type='text'
            placeholder='Insert rss feed'
            onChange={(e) => {
              setInputValue(e.target.value)
              setParseError('')
            }}
          />
        </div>
      </div>
      {parseError && <p className='help is-danger'>{parseError}</p>}
      <div className='field'>
        <div className='control'>
          <button
            className={buttonClasses}
            onClick={() => {
              rssParser(inputValue)
              setButtonClasses('button is-link is-loading')
            }}
            disabled={!inputValue}
          >
            Submit
          </button>
        </div>
      </div>
      {selectedItem && (
        <>
          <Item item={selectedItem}></Item>
          <nav
            className='pagination is-right'
            role='navigation'
            aria-label='pagination'
          >
            <ul className='pagination-list'>
              {itemsList.map((list, index) => {
                const classes =
                  'pagination-link' +
                  (list === selectedItem ? ' is-current' : '')
                return (
                  <li
                    onClick={() => setSelectedItem(itemsList[index])}
                    key={Object.values(list)[0] + Object.values(list)[1]}
                  >
                    {' '}
                    <a className={classes}>{index + 1}</a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </>
      )}
    </>
  )
}

export default Form
