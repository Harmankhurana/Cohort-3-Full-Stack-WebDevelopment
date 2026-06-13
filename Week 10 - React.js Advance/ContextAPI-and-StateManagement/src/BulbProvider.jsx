// Here i'm creating a bulb Provider wrapper and taking <Light /> as a child in it
import React, { useContext, useState, createContext } from "react";
import onBulb from './Images/onBulb.jpg';
import offBulb from './Images/offBulb.png';

// const bulbContext = React.createContext();
// or - here createContext is directly taken from react
// I will store my light bulb props here(outside the main functions)
const BulbContext = createContext();

// Creating the Provider wrapper and passing light as children in it
function BulbProvider({children}) {
    const [bulbOn, setBulbOn] = useState(true);
    return (
        <div>
            {/* wrapping children component with BulbContext provider */}
            <BulbContext.Provider value={{bulbOn, setBulbOn}}>
                {children}
            </BulbContext.Provider>

        </div>
    )
}

// the main component (ContextAPI) which is wrapped by BulbProvider
function BulbContextProvider() {
    return (
        <div>
            <BulbProvider>
                <Light />
            </BulbProvider>
        </div>
    )
}

function Light() {
    return (
        <div>
            <LightBulb />
            <LightSwitch />
        </div>
    )
}

// passing props directly from context rather than doing prop drilling
function LightBulb() {
    const {bulbOn} = useContext(BulbContext);
    return (
        <div>
            {bulbOn ? <img src = {onBulb} /> : <img src = {offBulb} height="350px"/>}
        </div>
    )
}

// passing props directly from context rather than doing prop drilling
function LightSwitch() {
    const {setBulbOn} = useContext(BulbContext);
    function Toggle() {
        setBulbOn(currentStatus => !currentStatus)
    }

    return (
        <div>
            <button onClick={Toggle}>Toggle Button</button>
        </div>
    )
}

export default BulbContextProvider