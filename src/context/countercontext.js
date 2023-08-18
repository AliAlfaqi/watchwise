import { createContext, useState } from "react";

export let counterContext = createContext(0) //0 is the initial value

function counterContextPorvider() {
    const [counter, setCounter] = useState(0)  //0 is the normal initial value of any state
    const increment = () => {
        setCounter(counter++)
    }

    const decrement = () => {
        setCounter(counter--)
    }

    return <counterContext.Provider value={{ counter, increment, decrement }}>
        {props.children}
    </counterContext.Provider>
}

export default counterContextPorvider;


//then to use the context 

import { useContext } from "react";

const randomComponent = () => {
    const { count, increment, decrement } = useContext(counterContext)

    return <>
        {count}
    </>
}

