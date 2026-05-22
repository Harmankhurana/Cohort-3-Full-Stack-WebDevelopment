// Creating a Light Bulb component -> which turns off/on when a button is clicked
import React from "react";
import { useState } from "react";

function Bulb() {
    return (
        <div>
            <LightBulb />
        </div>
    )
}

function LightBulb() {
    return (
        <div>
            <BulbState />
            <ToggleBulbState />
        </div>
    )
}

function BulbState() {
    const [bulbOn, setBulbOn] = useState(true);
    return (
        <div>
            {bulbOn ? "Bull On" : "Bulb Off"}
        </div>
    )
}

function ToggleBulbState() {
    return (
        <div>
            <button>Toggle the bulb</button>
        </div>
    )
}

export default Bulb