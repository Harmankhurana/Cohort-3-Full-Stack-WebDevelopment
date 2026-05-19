// Creating a Light Bulb component -> which turns off/on when a button is clicked
import React from "react";

function Bulb() {
    return(
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

export default Bulb