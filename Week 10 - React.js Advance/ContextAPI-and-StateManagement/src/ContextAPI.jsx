// The Context API is a powerful feature in React that enables you to manage state across your application more effectively, especially when dealing with deeply nested components.
// The Context API provides a way to share values (state, functions, etc.) between components without having to pass props down manually at every level.

import React, { createContext } from "react";
import { useState } from "react";
import onBulb from './Images/onBulb.jpg';
import offBulb from './Images/offBulb.png';

// const bulbContext = React.createContext();
// or - here createContext is directly taken from react
const bulbContext = createContext();

function App() {
    // putting the state variable in the main app component
    const [bulbOn, setBulbOn] = useState(true);
    return (
        <div>
            {/* passing the props in light component */}
            <Light bulbOn = {bulbOn} setBulbOn = {setBulbOn} />
        </div>
    )
}

// catching the props here and passing it to the children
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