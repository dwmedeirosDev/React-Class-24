import React, { useState } from 'react'

export default function Calculadora (){
    const [input1, setInput1] = useState()
    const [input2, setInput2] = useState()
    const [result, setResult] = useState()

    const Clear = () => {
        setInput1 ('')
        setInput2 ('')
        setResult ('')
    }

    return (
        <>
         <input value={input1} type='number' onChange={ e =>{setInput1(Number(e.target.value))}}/>
         <input value={input2} type='number' onChange={ e => {setInput2(Number(e.target.value))}}/>
         <button onClick={() =>{setResult(input1 * input2)}}>*</button>
         <button onClick={() =>{setResult(input1 - input2)}}>-</button>
         <button onClick={() =>{setResult(input1 + input2)}}>+</button>
         <button onClick={() =>{Clear()}}>C</button>
         <h1>{result}</h1>
        </>
      );
    
}