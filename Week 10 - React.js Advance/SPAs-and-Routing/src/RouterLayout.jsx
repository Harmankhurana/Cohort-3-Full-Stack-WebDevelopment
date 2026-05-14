// A Layout is a wrapper component used to share common UI across multiple pages
// It typically contains things like Navbar, Footer, Sidebar, etc.
// The changing part of the page is rendered using <Outlet />
// [ Navbar ]
// [ Page Content ] -> changes depending on the route
// [ Footer ]
import React from "react";

// components from the react-router-dom library used for routing (navigation) in React apps.
import {BrowserRouter, Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';

function ReactRouter() {
    return (
        <div>
            {/* making a BrowserRouter wrapper, we will wrap our application in BrowserRouter */}
            <BrowserRouter>
                {/* here i will define all my routes, container for all routes */}
                <Routes>
                    {/* Parent Route using Layout */}
                    {/* All child routes will be rendered inside Layout's <Outlet /> */}
                    <Route path="/" element = { <Layout /> }>
                        {/* Route → defines path + component(element) and components are always capitalized */}
                        <Route path = "/" element = { <Landing /> } />
                        <Route path = "/neet/online-coaching-class-11" element = { <Class11program /> } />
                        <Route path = "/neet/online-coaching-class-12" element = { <Class12program /> } />
                        <Route path = "*" element = { <ErrorPage /> } />                        
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

function Layout() {
    return <div style={{height: '100vh'}}>

        <Header />

        {/* This is the dynamic section of the page */}
        <div style={{height: '90vh'}}>
            <Outlet />
        </div>

        footer
    </div>
}

// Header component → contains navigation links
// Link is used instead of <a> to avoid full page reload
function Header() {
    return <div>
        {/* Better way of doing navigation rather than using anchor tag */}
        <Link to="/" >Allen</Link> | 
        <Link to="/neet/online-coaching-class-11">Class 11</Link> | 
        <Link to="/neet/online-coaching-class-12">Class 12</Link> 
    </div>
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

// Creating a function for navigating to error page/ 404 page
function ErrorPage() {
    return (
        <div>Sorry page not found</div>
    )
}

export default ReactRouter
