import React, { Children, createContext, useContext, useState } from "react";
const CountContext = createContext();

// a Provider component which is wrapping the children
function CountContextProvider({Children}) {
    const[count, setCount] = useState(0);
    return (
        <div>
            <CountContext.Provider value={{count, setCount}}>
                {Children}
            </CountContext.Provider>
        </div>
    )
}

// using the CountContextProvider here and wrapping all the childrens in it
function Parent() {
    return (
        <div>
            <CountContextProvider>
                <Increase />
                <Decrease />
                <Value />
            </CountContextProvider>
        </div>
    )
}

function Increase() {
    const {count, setCount} = useContext(CountContext);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    )
}

function Decrease() {
    const {count, setCount} = useState(CountContext);
    return (
        <div>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    )
}

function Value() {
    const {count} = useState(CountContext);
    return (
        <div>
            count : {count}
        </div>
    )
}

const Provider = () => {
    return (
        <div>
            <Parent />
        </div>
    )
}


export default Provider