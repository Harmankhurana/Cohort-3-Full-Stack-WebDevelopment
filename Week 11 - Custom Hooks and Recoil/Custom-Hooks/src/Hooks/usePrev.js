import { useEffect, useRef, useState } from 'react';

export function usePrev (value) {
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    },[value]);

    return ref.current
}

// this hooks returns first then effects get called later