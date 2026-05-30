// Creating a Light Bulb component -> which turns off/on when a button is clicked with added images
// And using prop drilling
// I'm creating the props (bulbOn, setBulbOn) in app component and passing it down
// Light component is catching the props, not using it, and pass it to the children(LightBulb, LightSwitch)
// this makes the code ugly 
import React from "react";
import { useState } from "react";
import onBulb from './Images/onBulb.jpg';
import offBulb from './Images/offBulb.png';

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
function Light({bulbOn, setBulbOn}) {
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