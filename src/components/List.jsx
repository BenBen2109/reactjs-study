import React from 'react'

export default function List({ data, children }) {
    return (
        <ul>
            {/* {data.map((item) => children(item))} */}
            {data.map(children)}
        </ul>
    )
}
