// Creating the same focus on input when the button is clicked, but by using useRef hook
import React from "react";
import { useRef } from "react";

function RouterUseRef() {
    const use = useRef();
    return (
        <div>
            <input id = "name" type="text" />
            <input type="text" />
            <button>Submit</button>
        </div>
    )
}

export default RouterUseRef