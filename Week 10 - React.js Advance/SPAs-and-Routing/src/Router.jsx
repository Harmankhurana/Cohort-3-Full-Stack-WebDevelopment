import React from "react";

// components from the react-router-dom library used for routing (navigation) in React apps.
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function ReactRouter() {
    return (
        <div>
            {/* making a BrowserRouter wrapper, we will wrap our application in BrowserRouter */}
            <BrowserRouter>
                {/* here i will define all my routes, container for all routes */}
                <Routes>
                    {/* Route → defines path + component(element) and components are always capitalized */}
                    <Route path = "/neet/online-coaching-class-11" element = { <Class11program /> } />
                    <Route path = "/neet/online-coaching-class-12" element = { <Class12program /> } />
                    <Route path = "/" element = { <Landing /> } />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

// creating a function for class-11-program, calling it in ReactRouter (element)
function Class11program() {
    return (
        <div>NEET programs for 11th class</div>
    )
}

// creating a function for class-12-program, calling it in ReactRouter (element)
function Class12program() {
    return (
        <div>NEET programs for 12th class</div>
    )
}

// creating a function for landing page
function Landing() {
    return (
        <div>Welcome to Allen</div>
    )
}

export default ReactRouter