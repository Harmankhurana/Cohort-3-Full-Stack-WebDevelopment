// A Custom Hook which fetches data - here the code is cluttered and difficult to read
import React, { useEffect, useState } from "react";

// defined an UseFetch component
function UseFetch() {
    // state variables
    const [post, setPost] = useState({});

    // an async function called getPosts(), which hits the backend to get the response from it
    async function getPosts() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        // converting response data into json data
        const json = await response.json();
        setPost(json);
    }

    // calling getPosts() function inside useEffect hook
    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            <div>Title : {post.title}</div>
            <div>Body : {post.body}</div>
            <div>UserId : {post.userId}</div>
        </div>
    )
}

export default UseFetch