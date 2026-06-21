import React, { useState } from "react";
import { usePrev } from "./Hooks/usePrev";

function UsePrev() {
    const [state, setState] = useState(0);
    const prev = usePrev(state);

    return (
        <div>
            <div>{state}</div>
            <button onClick={() => {setState((curr) => curr + 1)}}>Click Here</button>
            <h1>This is the Prev value {prev}</h1>
        </div>
    )
}

export default UsePrev