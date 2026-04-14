import React, { useState } from "react";

function LinkedinTab() {
    const [currentTab, setCurrentTab] = useState('feed');

    return(
        <div>
            <button onClick = {() => setCurrentTab("feed")} style = {{color : currentTab == "feed" ? "red" : "black"}}>Feed</button>
            <button onClick = {() => setCurrentTab("notifications")} style = {{color : currentTab == "notifications" ? "red" : "black"}}>Notification</button>
            <button onClick = {() => setCurrentTab("messages")} style = {{color : currentTab == "messages" ? "red" : "black"}}>Message</button>
            <button onClick = {() => setCurrentTab("jobs")} style = {{color : currentTab == "jobs" ? "red" : "black"}}>Jobs</button>
        </div>

    )
}

export default LinkedinTab