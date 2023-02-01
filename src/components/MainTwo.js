import React from 'react'
import { useEffect } from 'react'

let i = 0

const MainTwo = () => {

    useEffect(() => {

        console.log("Paso 4")
        console.log("Dentro del Effect")

        i++
        
    })
        /*  */
  return (
            < div > mainTwo { i }</div >
  )
} 

export default MainTwo