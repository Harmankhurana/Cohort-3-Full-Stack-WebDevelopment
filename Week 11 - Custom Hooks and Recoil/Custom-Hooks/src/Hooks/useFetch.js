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
    }, [url]) // this says that whenever the url changes get the details back from the server(dynamic url)

    // this hook will reassure that afte every 10 sec a request should be sent to the backend server
    useEffect(() => {
        const interval = setInterval(() => {
            getDetails();
        }, 10000);

        return () => clearInterval(interval);
    }, [url]); // url here matters as a dependency cause if i don't write it
    // interval runs with the initial url only
    // If url changes → interval still uses old one

    return {
        finalData,
        loading
    }
};