import React from 'react'

function Item({description, href}) {
  return (
    <li>
      <a href={href}>{description}</a>
    </li>
  )
}

export default Item