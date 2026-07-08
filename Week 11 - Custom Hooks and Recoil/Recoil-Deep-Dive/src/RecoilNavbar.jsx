import React from "react";
import { networkAtom, jobsAtom, messagesAtom, notificationAtom } from "./ReacoilNavbarAtom.js";
import { RecoilRoot, useRecoilValue } from "recoil";

function RecoilNavbar() {
    return (
        <RecoilRoot>
            <div>
                <Navbar />
            </div>            
        </RecoilRoot>

    )
}

function Navbar() {
    const networkNotificationCount = useRecoilValue(networkAtom);
    const jobsAtomCount = useRecoilValue(jobsAtom);
    const messagesAtomCount = useRecoilValue(messagesAtom);
    const notificationAtomCount = useRecoilValue(notificationAtom);
    return (
        <div>
            <button>Home</button>
            <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button> {/*if networkNotificationCount is greater than equal to 100 then show 99+ or show the actual value*/}
            <button>Jobs ({jobsAtomCount >= 100 ? "99+" : jobsAtomCount})</button>
            <button>Messages ({messagesAtomCount >= 100 ? "99+" : messagesAtomCount})</button>
            <button>Notification ({notificationAtomCount >= 100 ? "99+" : notificationAtomCount})</button>
            <button>Me</button>
        </div>
    )
}

export default RecoilNavbar