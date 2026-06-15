import React, { useState } from "react";
import { useFetch } from "./Hooks/useFetch";

function MoreAdvUseFetch() {
    const [currentPost, setCurrentPost] = useState(1);
    const { finalData } = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost);

    return (
        <div>
            <div><button onClick={() => setCurrentPost(1)}>Post 1</button></div>
            <div><button onClick={() => setCurrentPost(2)}>Post 2</button></div>
            <div><button onClick={() => setCurrentPost(3)}>Post 3</button></div>

            {JSON.stringify(finalData)}
        </div>
    )
}

export default MoreAdvUseFetch