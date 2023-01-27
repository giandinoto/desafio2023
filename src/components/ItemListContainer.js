import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = (props) => {

  function onAdd (){

    console.log("onAdd");
  
  }

  return (

    <>
      <div>Mensaje prop: {props.greeting}</div>
      <ItemCount stock = { 5 } initial = { 1 } onAdd = { onAdd } />
    </>
    
  )
}

export default ItemListContainer