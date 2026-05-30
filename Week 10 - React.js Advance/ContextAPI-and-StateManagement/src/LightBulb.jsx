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
    // defining the state variable in the parent component, and then passing props to children(BulbState, ToggleBulbState)
    const [bulbOn, setBulbOn] = useState(true);

    // bulbOn is a prop to the bulb state component
    // setBulbOn is a prop to the toggle bulb state component
    return (
        <div>

            {/* Passing buldOn here */}
            <BulbState bulbOn = {bulbOn} />

            {/* Passing setBublOn here */}
            <ToggleBulbState setBulbOn = {setBulbOn} />
        </div>
    )
}

// function for bulbState and catching the bulbOn in it
function BulbState({bulbOn}) {
    return (
        <div>
            {bulbOn ? "Bulb On" : "Bulb Off"}
        </div>
    )
}

// function for toggleBulbState and catching the setBulbOn in it
function ToggleBulbState({setBulbOn}) {
    // function for toggling the button from false to true and vice versa
    function Toggle() {
        // method 1 -> to toggle the state
        setBulbOn(currentState => !currentState)
        // method 2 -> to toggle the state
        // setBulbOn(function(currentState) {
        //     if (currentState == true) {
        //         return false;
        //     } else {
        //         return true;
        //     }
        // });
    }
    return (
        <div>
            <button onClick={Toggle}>Toggle the bulb</button>
        </div>
    )
}

export default Bulb