import React, { useState, useSyncExternalStore } from "react";

function LinkedinTab() {
    const [currentTab, setCurrentTab] = useState('messages');

    return(
        <div>
            <button style = {{color : currentTab == "feed" ? "red" : "black"}}>Feed</button>
            <button style = {{color : currentTab == "notifications" ? "red" : "black"}}>Notification</button>
            <button style = {{color : currentTab == "messages" ? "red" : "black"}}>Message</button>
            <button style = {{color : currentTab == "jobs" ? "red" : "black"}}>Jobs</button>
        </div>

    )
}

export default LinkedinTab