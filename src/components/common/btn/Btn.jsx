import './btn.css'

import React from 'react'

const Btn = ({text}) => {
  return (
    <div>
        <button id='btn'>{text}</button>
    </div>
  )
}

export default Btn