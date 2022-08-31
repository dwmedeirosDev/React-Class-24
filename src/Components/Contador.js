import React, { useState } from 'react'

export default function Contador (){
    const [number, setNumber] = useState(0)

    const Add = () => {
        setNumber(prevState => prevState + 1)
    }

    const Remove = () => {
        setNumber(numero => numero - 1)
    }
    return(
        < >
            <h1>{number}</h1>
            <button onClick={() => {Add()}}>Somar</button>
            <button onClick={() => {Remove()}}>Subtrair</button>
        </>
    )
}