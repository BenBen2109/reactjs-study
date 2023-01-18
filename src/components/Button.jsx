import React from 'react'

export default function Button({ title, href, onClick, children }) {
  const Component = href ? 'a' : 'button'
  const props = {}
  if (onClick) {
    props.onClick = onClick
  }
  return (
    <Component {...props}>{title}</Component>
  )
}
