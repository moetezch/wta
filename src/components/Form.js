import React from 'react'

function Form() {
  return (
    <>
      <div className='field'>
        <label className='label'>RSS feed</label>
        <div className='control'>
          <input className='input' type='text' placeholder='Insert rss feed' />
        </div>
      </div>

      <div className='field'>
        <div className='control'>
          <button className='button is-link'>Submit</button>
        </div>
      </div>
    </>
  )
}

export default Form
