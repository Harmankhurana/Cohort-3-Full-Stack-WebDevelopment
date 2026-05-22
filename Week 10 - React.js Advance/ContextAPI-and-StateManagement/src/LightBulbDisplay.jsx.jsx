// Creating a Light Bulb component -> which turns off/on when a button is clicked with added images
import React from "react";
import { useState } from "react";
import onBulb from './Images/onBulb.jpg';
import offBulb from './Images/offBulb.png';

function LightBulbController() {
    return (
        <div>
            <LightBulbWrapper />
        </div>
    )
}

function LightBulbWrapper() {
    const [bulbOn, setBulbOn] = useState(true);
    return (
        <div>
            <LightBulbState bulbOn = {bulbOn} />
            <HandleBulbToggle setBulbOn = {setBulbOn} />
        </div>
    )
}

function LightBulbState({bulbOn}) {
    return (
        <div>
            {bulbOn ? <img src = {onBulb} /> : <img src = {offBulb} height="350px"/>}
        </div>
    )
}

function HandleBulbToggle({setBulbOn}) {
    function Toggle() {
        setBulbOn(currentStatus => !currentStatus)
    }

    return (
        <div>
            <button onClick={Toggle}>Toggle Button</button>
        </div>
    )
}

export default LightBulbController