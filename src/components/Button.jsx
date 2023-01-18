import React from 'react'

export default function Button({ title, href, onClick, children }) {
    const Component = href ? 'a' : 'button'
    const props = {}
    if(href) {
        props.href = href
    }
    if(onClick) {
        props.onClick = onClick
    }
  return (
    <Component {...props}>{children}</Component>
  )
}
