import React, { Children, createContext, useState } from "react";
const CountContext = createContext();

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
    return (
        <div>

        </div>
    )
}

function Decrease() {
    return (
        <div>

        </div>
    )
}

function Value() {
    return (
        <div>

        </div>
    )
}

export default Parent