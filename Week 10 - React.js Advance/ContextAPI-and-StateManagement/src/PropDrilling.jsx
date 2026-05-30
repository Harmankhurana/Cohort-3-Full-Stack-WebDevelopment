// Creating a Light Bulb component -> which turns off/on when a button is clicked with added images
// And using prop drilling
import React from "react";
import { useState } from "react";
import onBulb from './Images/onBulb.jpg';
import offBulb from './Images/offBulb.png';

function App() {
    return (
        <div>
            <Light />
        </div>
    )
}

function Light() {
    const [bulbOn, setBulbOn] = useState(true);
    return (
        <div>
            <LightBulb bulbOn = {bulbOn} />
            <LightSwitch setBulbOn = {setBulbOn} />
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