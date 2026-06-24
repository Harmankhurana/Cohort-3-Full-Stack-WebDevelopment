import React, { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);
    return debouncedValue;
};

function MoreAdvUseDebounce() {
    const [inputVal, setInputVal] = useState("");
    const debouncedValue = useDebounce(inputVal, 200);

    function change(e) {
        setInputVal(e.target.value);
    }

    useEffect(() => {
        // fetch
        console.log("Expensive Operation")
    }, [debouncedValue]);

    return (
        <div>
            <input type="text" onChange={change}></input>
        </div>
    )
}

export default MoreAdvUseDebounce