// Creating the same focus on input when the button is clicked, but by using useRef hook
import React from "react";
import { useRef } from "react";

// reference to a value, such that when u change the value, the component re-renders
function RouterUseRef() {
    // calling useRef hook and putting it in a variable called inputRef
    const inputRef = useRef();

    // function that uses inputRef variable
    function FocusOnInput() {
        // same works as - document.getElementById("name").focus();
        inputRef.current.focus();
    }
    return (
        <div>
            Sign Up
            {/* using inputRef here */}
            <input ref={inputRef} id = "name" type="text" />
            <input type="text" />
            <button onClick={FocusOnInput}>Submit</button>
        </div>
    )
}

export default RouterUseRef
