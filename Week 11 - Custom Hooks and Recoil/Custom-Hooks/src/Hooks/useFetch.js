// Creating a generic useFetch hook, that takes url as an argument and returns the data
// Hits the server and get response
// URL --> useFetch Hook --> returns response/data

import { useEffect, useState } from "react";

export function useFetch(url) {
    const [finalData, setFinalData] = useState({});

    async function getDetails() {
        const response = await fetch(url);
        const json = await response.json();
        setFinalData(json);
    }
    useEffect(() => {
        getDetails();
    }, [])

    return {
        finalData
    }
};