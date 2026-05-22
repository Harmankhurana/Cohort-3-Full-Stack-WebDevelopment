// Creating a Light Bulb component -> which turns off/on when a button is clicked with added images
import React from "react";
import { useState } from "react";

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
            <handleBulbToggle setBulbOn = {setBulbOn} />
        </div>
    )
}

function LightBulbState({bulbOn}) {

}

function handleBulbToggle({setBulbOn}) {

}

export default LightBulbController