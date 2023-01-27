import React from 'react'
import { useState } from 'react'

const ItemCount = (props) => {

    console.log(props)

    let [estado, setEstado] = useState(props["initial"])

    const handleClickSumar = () => {

        if (estado < props["stock"]) {
            setEstado(estado + 1)
        }

    }

    const handleClickRestar = () => {
        setEstado(estado - 1)

        if (estado <= 1) {
            setEstado(1)
        }
    }

    const handleClickReset = () => {
        setEstado(1)
    }

    return (
        <>
            <p>Stock = {estado}</p>
            <button onClick={handleClickSumar}>Sumar</button>
            <button onClick={handleClickRestar}>Restar</button>
            <button onClick={handleClickReset}>Reset</button>
            <button onClick={props.onAdd}>Agregar Carrito</button>
        </>
    )
}

export default ItemCount