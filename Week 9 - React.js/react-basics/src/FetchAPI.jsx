// Making a To-Do application and fetching data
import React, { useEffect, useState } from "react";

function TodoApplication() {
    const [currentTab, setCurrentTab] = useState(1);
    const [tabData, setTabData] = useState({});

    useEffect(function() {
        fetch('https://jsonplaceholder.typicode.com/todos/' + currentTab);
    }, [currentTab])

    return(
        <div>
            <Button onClick = {() => setCurrentTab(1)} style = {{color : currentTab === 1 ? "red" : "black"}}>Todo #1</Button>
            <Button onClick = {() => setCurrentTab(2)} style = {{color : currentTab === 2 ? "red" : "black"}}>Todo #2</Button>
            <Button onClick = {() => setCurrentTab(3)} style = {{color : currentTab === 3 ? "red" : "black"}}>Todo #3</Button>
            <Button onClick = {() => setCurrentTab(4)} style = {{color : currentTab === 4 ? "red" : "black"}}>Todo #4</Button>
        </div>
    )
}

export default TodoApplication