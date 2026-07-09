import { selector } from "recoil";
import { jobsAtom, messagesAtom, networkAtom, notificationAtom } from "./ReacoilNavbarAtom";

export const totalNotificationCount = selector({
    key: "totalNotificationCount",
    get: ({get}) => {
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const messagesAtomCount = get(messagesAtom);
        const notificationAtomCount = get(notificationAtom);

        return networkAtomCount + jobsAtomCount + messagesAtomCount + notificationAtomCount; 
    }
});