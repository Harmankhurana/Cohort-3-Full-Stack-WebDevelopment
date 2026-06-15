// Creating a generic useFetch hook, that takes url as an argument and returns the data
// Hits the server and get response
// URL --> useFetch Hook --> returns response/data

import { useEffect, useState } from "react";

export function useFetch(url) {
    const [finalData, setFinalData] = useState({});
    const [loading, setLoading] = useState(true);

    async function getDetails() {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setFinalData(json);
        setLoading(false);
    }
    useEffect(() => {
        getDetails();
    }, [url]) // this says that whenever the url changes get the details back from the server

    return {
        finalData,
        loading
    }
};