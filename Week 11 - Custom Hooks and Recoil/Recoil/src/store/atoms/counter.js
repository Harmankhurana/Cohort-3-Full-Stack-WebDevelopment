// Defining a Recoil atom to manage counter state globally across components
// key: unique ID required by Recoil to identify this atom
// default: sets the initial value of the counter to 0
import { atom } from 'recoil';

export const counterAtom = atom({
    key: "counter", 
    default: 0
})