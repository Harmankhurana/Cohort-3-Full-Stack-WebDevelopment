// Creating a component which focuses on input box, when it is empty and still the submit button is clicked
import React from "react";

function RouterFocusOnInput(){

    // Ugly way: Directly accessing the DOM using getElementById
    // This bypasses React's Virtual DOM and directly manipulates the real DOM
    // Why this is considered bad practice in React:
    // 1. Breaks React's declarative approach (React should control the UI, not us manually)
    // 2. Not reusable (relies on hardcoded ID "name")
    // 3. Can cause bugs in larger apps (especially with multiple components or same IDs)
    // 4. Makes testing and scaling harder
    // 5. Goes against React patterns (should use useRef instead)
    function focusOnInput() {
        document.getElementById("name").focus();
    }
    return (
        <div>
            Sign up
            <input id = "name" type = {"text"}></input>
            <input type= {"text"}></input>
            <button onClick={focusOnInput}>Submit</button>
        </div>
    )
}

export default RouterFocusOnInput