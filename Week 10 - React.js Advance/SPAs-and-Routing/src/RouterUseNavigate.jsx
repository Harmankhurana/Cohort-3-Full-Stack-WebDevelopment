// Here I'm using a hook called useNavigate, for navigation the routes
// The useNavigate hook is a function in React Router v6 (react-router-dom) that allows you to programmatically navigate between routes in your application.
import React from "react";

// components from the react-router-dom library used for routing (navigation) in React apps.
import {BrowserRouter, Routes, Route, Link, useNavigate} from 'react-router-dom';

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
    // using useNavigate hook and putting it in a variable called navigate
    const navigate = useNavigate();
    
    // a function which uses "navigate" variable to navigate back to home/landing page
    function redirectUser() {
        navigate("/");
    }
    
    return (
        <div>
            <div>NEET programs for 12th class</div>
            {/* a button which calls the redirectUser function */}
            <button onClick={redirectUser}>Back to Landing Page</button>       
        </div>
    )
}

export default ReactRouter
