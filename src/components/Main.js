import React from 'react'
import ItemListContainer from './ItemListContainer'

const Main = (props) => {

  console.log(props)

  return (
     <>
      <main>
        <ItemListContainer greeting= { "Bienvenido" } /> 
      </main>
      
     </> 
    
  )
}

export default Main