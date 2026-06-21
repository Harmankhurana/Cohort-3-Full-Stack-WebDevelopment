import { useEffect, useRef, useState } from 'react';

export function usePrev (value) {
    const ref = useRef();
    console.log(`Re-render happend with a new value ${value}`);

    useEffect(() => {
        console.log(`Update the ref to be ${value}`);
        ref.current = value;
    },[value]);

    console.log(`returned ${ref.current}`);
    return ref.current; // return will print the prev value first then the useEffect will trigger
}

// this hooks returns first then effects get called later