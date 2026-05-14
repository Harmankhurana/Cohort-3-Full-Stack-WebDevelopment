// Here I'm using Link for navigation rather than anchor tag (the dumb way), I can't write Link navigator outside BrowserRouter
import React from "react";

// components from the react-router-dom library used for routing (navigation) in React apps.
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function ReactRouter() {
    return (
        <div>
            {/* making a BrowserRouter wrapper, we will wrap our application in BrowserRouter */}
            <BrowserRouter>

                {/* Better way of doing navigation rather than using anchor tag*/}
                <Link to="/" >Allen</Link> | 
                <Link to="/neet/online-coaching-class-11">Class 11</Link> | 
                <Link to="/neet/online-coaching-class-12">Class 12</Link>

                {/* here i will define all my routes, container for all routes */}
                <Routes>
                    {/* Route → defines path + component(element) and components are always capitalized */}
                    <Route path = "/" element = { <Landing /> } />
                    <Route path = "/neet/online-coaching-class-11" element = { <Class11program /> } />
                    <Route path = "/neet/online-coaching-class-12" element = { <Class12program /> } />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

// creating a function for landing page
function Landing() {
    return (
        <div>Welcome to Allen</div>
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

export default ReactRouter
