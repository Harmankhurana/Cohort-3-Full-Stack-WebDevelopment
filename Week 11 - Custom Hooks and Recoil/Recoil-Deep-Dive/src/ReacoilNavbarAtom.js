import { atom } from 'recoil';

// exporting atom for my network count
export const networkAtom = atom({
    key: networkAtom,
    default: 0,
});

// exporting atom for my jobs count
export const jobsAtom = atom({
    key: jobsAtom,
    default: 0,
});

// exporting atom for my messages count
export const messagesAtom = atom({
    key: messagesAtom,
    default: 0,
});

// exporting atom for my notification count
export const notificationAtom = atom({
    key: notificationAtom,
    default: 0,
});