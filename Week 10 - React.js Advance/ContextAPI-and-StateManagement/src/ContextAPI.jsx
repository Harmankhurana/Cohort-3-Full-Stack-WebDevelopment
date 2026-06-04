// The Context API is a powerful feature in React that enables you to manage state across your application more effectively, especially when dealing with deeply nested components.
// The Context API provides a way to share values (state, functions, etc.) between components without having to pass props down manually at every level.
import React, { useContext } from "react";
import { useState } from "react";
import onBulb from './Images/onBulb.jpg';
import offBulb from './Images/offBulb.png';
import { createContext } from "react";

// const bulbContext = React.createContext();
// or - here createContext is directly taken from react
// I will store my light bulb props here(outside the main functions)
const BulbContext = createContext();

function ContextAPI() {
    const [bulbOn, setBulbOn] = useState(true);
    return (
        <div>
            {/* wrapping light component with BulbContext provider */}
            <BulbContext.Provider value={{bulbOn : bulbOn, setBulbOn : setBulbOn}}>
                <Light />
            </BulbContext.Provider>
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

export default ContextAPI