import React from 'react'

function Item(props) {
  return Object.keys(props.item).map((key) => {
    return (
      <div key={key}>
        <p><span className='has-text-weight-bold'>{key}</span>: {JSON.stringify(props.item[key])}</p>
      </div>
    )
  })
}

export default Item