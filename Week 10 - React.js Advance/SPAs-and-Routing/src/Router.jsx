import React from "react";

// components from the react-router-dom library used for routing (navigation) in React apps.
import {BrowserRouter, RouteS, Route} from 'react-router-dom';

function ReactRouter() {
    return (
        <div>
            {/* making a BrowserRouter wrapper, we will wrap our application in BrowserRouter */}
            <BrowserRouter>
                {/* here i will define all my routes */}
                <Routes>

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default ReactRouter