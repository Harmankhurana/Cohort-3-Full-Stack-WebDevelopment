// Creating a clock with a start and stop functionality
import React from "react";
import { useState } from "react";

function Clock() {
    const [currentCount, setCurrentCount] = useState(0);
    return (
        <div>
            {currentCount}
        </div>
    )
}

export default Clock