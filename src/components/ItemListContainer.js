import React, { useEffect, useState } from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

let productosIniciales = [
  {
    id: 1,
    nombre: "Producto 1",
    precio: 100
  },
  {
    id: 2,
    nombre: "Producto 2",
    precio: 200
  },
  {
    id: 3,
    nombre: "Producto 3",
    precio: 300
  }
]

const ItemListContainer = (props) => {

  function onAdd() {

    console.log("onAdd");

  }


  const [loading, setLoading] = useState(true)
  const [productos, setproductos] = useState([])

  useEffect(() => {

    console.log("Ejecuntando Useffect")

    const pedido = new Promise((resolve, reject) => {

      setTimeout(() => {

        resolve(productosIniciales)

      }, 3000);
    })


    pedido
      .then((resultado) => {
        console.log("Pedido ok")
        setproductos(resultado)

      })
      .catch((error) => {
        console.log("Pedido mal")
        console.log(error)
      })


  }, [])

  //console.log(productos)

  return (

    <>
      <div>Mensaje prop: {props.greeting}</div>

      {/* <ItemCount stock={5} initial={1} onAdd={onAdd} /> */}

      <button onClick={() => setLoading(!loading)}>Efecto</button>

      <ItemList productos={productos} />
      
    </>

  )
}

export default ItemListContainer