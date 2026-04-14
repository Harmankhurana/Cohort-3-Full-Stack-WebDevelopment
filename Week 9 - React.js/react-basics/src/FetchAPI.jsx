// Making a To-Do application and fetching data
import React, { useState } from "react";

function TodoApplication() {
    const [currentTab, setCurrentTab] = useState();

    return(
        <div>
            <Button style = {{color : currentTab === 1 ? "red" : "black"}}>Todo #1</Button>
            <Button style = {{color : currentTab === 2 ? "red" : "black"}}>Todo #2</Button>
            <Button style = {{color : currentTab === 3 ? "red" : "black"}}>Todo #3</Button>
            <Button style = {{color : currentTab === 4 ? "red" : "black"}}>Todo #4</Button>
        </div>
    )
}

export default TodoApplication