import { useState } from "react"

function Notification() {
    return(
        <div>
            <div><NotificationCount /></div>
            <div><NotificationCount /></div>
            <div><NotificationCount /></div>
        </div>
        
    )
}

function NotificationCount() {
    const [notification, setNotification] = useState(0);

    function notificationIncrement() {
        setNotification(notification + 1);
    }

    return(
        <button onClick = {notificationIncrement}>Notification Increment: {notification}</button>
    )
}

export default Notification