import { atom } from "recoil";

export const notifications = atom({
    key: "networkAtom",
    default: {
        network: 4, 
        jobs: 6, 
        messaging: 3, 
        notifications: 3
    }
});