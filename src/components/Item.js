import React from 'react'

const Item = ({ name, key }) => {

    return (
        <li key={key}>
            <a href="#">{name}</a>
        </li>
    )
}

export default Item