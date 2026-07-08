import React from "react";
import { networkAtom, jobsAtom, messagesAtom, notificationAtom } from "./ReacoilNavbarAtom";
import { totalNotificationCount } from "./NavbarSelector";

function RecoilNavbarSelector() {
    return (
        <div>
            <Navbar />
        </div>
    )
}

function Navbar() {
    const networkAtomCount = useRecoilValue(networkAtom);
    const jobsAtomCount = useRecoilValue(jobsAtom);
    const messagesAtomCount = useRecoilValue(messagesAtom);
    const notificationAtomCount = useRecoilValue(notificationAtom);
    return (
        <div>
            <button>Home</button>
            <button>My Network ({networkAtomCount >= 100 ? "99+" : networkAtomCount})</button> {/*if networkAtomCount is greater than equal to 100 then show 99+ or show the actual value*/}
            <button>Jobs ({jobsAtomCount >= 100 ? "99+" : jobsAtomCount})</button> {/*if jobsAtomCount is greater than equal to 100 then show 99+ or show the actual value*/}
            <button>Messages ({messagesAtomCount >= 100 ? "99+" : messagesAtomCount})</button> {/*if messagesAtomCount is greater than equal to 100 then show 99+ or show the actual value*/}
            <button>Notification ({notificationAtomCount >= 100 ? "99+" : notificationAtomCount})</button> {/*if notificationAtomCount is greater than equal to 100 then show 99+ or show the actual value*/}
            <button>Me ({totalNotificationCount})</button>
        </div>
    )
}

export default RecoilNavbarSelector