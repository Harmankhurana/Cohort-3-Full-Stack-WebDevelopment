// Creating a Light Bulb component -> which turns off/on when a button is clicked
// Understanding roll up state -> rolling up to the least common an ancestor
// Question - can you pass prop up the chain -> yes, in weird ways(using callbacks), but we should not use it in this way
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
            {bulbOn ? "Bulb On" : "Bulb Off"}
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