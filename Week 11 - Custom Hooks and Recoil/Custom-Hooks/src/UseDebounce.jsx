// Debounce Function
// This function ensures that a given function (e.g., search API call)
// is only executed after the user has stopped triggering it for a specified delay.
// Use case:
// - Prevents multiple unnecessary API calls while the user is typing
// - Improves performance and reduces backend load
//
// How it works:
// - Every time the function is called, the previous timer is cleared
// - A new timer starts
// - The actual function executes only after the delay has passed
//   without any new calls
//
// Example:
// User types "hello"
// -> h (wait)
// -> he (reset timer)
// -> hel (reset timer)
// -> hell (reset timer)
// -> hello (wait 500ms)
// => API call happens once with "hello"
// but here i will call a custom hook called "useBounce" to do the task

import React from "react";
import { useDebounce } from "./Hooks/useDebounce";

function UseDebounce() {
    function sendDataToBackend() {
        fetch("api.amazon.com/search/");
    }

    const debouncedFn = useDebounce(sendDataToBackend);

    return (
        <div>
            <input type="text" onChange={debouncedFn} ></input>
        </div>
    )
}

export default UseDebounce