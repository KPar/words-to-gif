import React, { useRef } from 'react'

function Input({setWords}) {

    const inputField = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        const words = inputField.current.value.split(" ").filter(x => x.length >= 4);        
        console.log(words)
        setWords(words)
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="search" ref={inputField}/>
        <input type="submit" value="Translate"/>
    </form>
  )
}

export default Input