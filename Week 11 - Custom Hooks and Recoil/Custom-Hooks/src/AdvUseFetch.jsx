// A better way is to create a custom hook(useFetch.js) and use it here
// This way the code is not cluttered as the fetching logic is in a seperate file and here I just have to import it
import React from "react";
// importing usePostTitle custom hook
import { usePostTitle } from "./Hooks/useFetch";

function AdvUseFetch() {
    const postTitle = usePostTitle();
    return (
        <div>
            {postTitle}
        </div>
    )
}

export default AdvUseFetch
