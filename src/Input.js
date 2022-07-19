import React, { useRef } from 'react'

function Input({setWords}) {

    const inputField = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        const words = inputField.current.value.split(" ").filter(x => x.length >= 4 || x=== "you");        
        console.log(words)
        setWords(words)
    }

  return (
    <form id='inputForm' onSubmit={handleSubmit}>
        <input id='inputField' type="search" ref={inputField}/>
        <input id='translateButton' type="submit" value="Translate"/>
    </form>
  )
}

export default Input