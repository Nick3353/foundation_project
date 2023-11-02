import "./header.css"

import React from 'react'

const Header = ({text,sub}) => {
  return (
    <div className="header">
        <p>{text}</p>
        <p>{sub}</p>
    </div>
  )
}

export default Header