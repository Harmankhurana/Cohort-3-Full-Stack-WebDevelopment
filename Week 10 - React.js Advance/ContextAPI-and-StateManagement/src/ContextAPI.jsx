// The Context API is a powerful feature in React that enables you to manage state across your application more effectively, especially when dealing with deeply nested components.
// The Context API provides a way to share values (state, functions, etc.) between components without having to pass props down manually at every level.

import React from "react";
import { useState } from "react";
import onBulb from './Images/onBulb.jpg';
import offBulb from './Images/offBulb.png';
import { createContext } from "react";

// const bulbContext = React.createContext();
// or - here createContext is directly taken from react
// I will store my light bulb props here(outside the main functions)
const BulbContext = createContext();

function App() {
    return (
        <div>
            {/* wrapping light component with BulbContext provider */}
            <BulbContext.Provider>
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

function LightBulb({bulbOn}) {
    return (
        <div>
            {bulbOn ? <img src = {onBulb} /> : <img src = {offBulb} height="350px"/>}
        </div>
    )
}

function LightSwitch({setBulbOn}) {
    function Toggle() {
        setBulbOn(currentStatus => !currentStatus)
    }

    return (
        <div>
            <button onClick={Toggle}>Toggle Button</button>
        </div>
    )
}

export default App