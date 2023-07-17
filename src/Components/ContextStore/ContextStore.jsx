import React, { createContext, useState } from 'react'
export let CounterContext = createContext(0)

const  ConuterContextProvider = (props) => {

    const [counter, setCounter] = useState(0)
  return (
    <CounterContext.Provider value={{counter, setCounter}} >
        {props.children}
    </CounterContext.Provider>
  )
}

export default ConuterContextProvider