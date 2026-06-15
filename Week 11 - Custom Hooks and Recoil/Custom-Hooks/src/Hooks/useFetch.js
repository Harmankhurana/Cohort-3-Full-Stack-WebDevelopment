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