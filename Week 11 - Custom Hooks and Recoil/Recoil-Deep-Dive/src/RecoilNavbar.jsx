import React from "react";
import { networkAtom, jobsAtom, messagesAtom, notificationAtom } from "./ReacoilNavbarAtom";

function Navbar() {
    return (
        <div>
            <button>Home</button>
            <button>My Network</button>
            <button>Jobs</button>
            <button>Messages</button>
            <button>Notification</button>
            <button>Me</button>
        </div>
    )
}

export default Navbar