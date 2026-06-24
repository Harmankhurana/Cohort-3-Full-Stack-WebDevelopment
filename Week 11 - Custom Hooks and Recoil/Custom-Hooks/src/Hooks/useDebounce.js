import React, { useRef } from "react";

export function useDebounce(originalFn) {
    const currentClock = useRef(); // using useRef() because i don't want to re-render my whole component
    // whenever currentClock variable changes

    const fn = () => {
        clearTimeout(currentClock.current);
        currentClock.current = setTimeout(originalFn, 200);
    }

    return fn;
}