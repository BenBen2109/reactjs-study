import React from 'react'

export default function Button({ title, onClick }) {

  const props = {}
  if (onClick) {
    props.onClick = onClick
  }
  return (
    <button {...props}>{title}</button>
  )
}
