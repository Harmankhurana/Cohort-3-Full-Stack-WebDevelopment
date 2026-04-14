// Making a easy useEffect setInterval component
import React from "react";
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(1);
    return(
        <dvi>{count}</dvi>
    )
}

export default Counter