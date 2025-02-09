import React from 'react'

const Button = ({Name}) => {
  return (
    <div>
        <button className='px-4 py-3 m-2 bg-gray-200 rounded-lg' type="button">{Name}</button>
    </div>
  )
}

export default Button