import React from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {

    return (
        <>
            <ul>
                {
                    productos.map((nuevoArray) => {
                        return <Item  key={ nuevoArray.id } name={ nuevoArray.nombre }/> 
                    })

                }
            </ul>
        </>
    )
}

export default ItemList