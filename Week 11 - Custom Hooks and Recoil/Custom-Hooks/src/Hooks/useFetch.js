import { useEffect, useState } from "react";

// A custom Hook that hits the backend of the API to fetch the data
export function usePostTitle() {
    const [post, setPost] = useState({});

    async function getPosts() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const json = await response.json();
        setPost(json);
    }

    useEffect(() => {
        getPosts();
    }, []);

    return post.title;
}

// Creating a generic useFetch hook, that takes url as an argument and returns the data
// Hits the server and get response
// URL --> useFetch Hook --> returns response/data

export function useFetch() {
    const [finalData, setFinalData] = useState({});

    function getDetails() {
        
    }

    useEffect(() => {
        getDetails();
    }, [])
}