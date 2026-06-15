// A better way is to create a custom hook(useFetch.js) and use it here
// This way the code is not cluttered as the fetching logic is in a seperate file and here I just have to import it
import React, { use } from "react";
// importing useFetch custom hook
import { useFetch } from "./Hooks/useFetch";

function AdvUseFetch() {
    const finalData = useFetch("https://jsonplaceholder.typicode.com/posts/1");
    return (
        <div>
            {JSON.stringify(finalData)}
        </div>
    )
}

export default AdvUseFetch
