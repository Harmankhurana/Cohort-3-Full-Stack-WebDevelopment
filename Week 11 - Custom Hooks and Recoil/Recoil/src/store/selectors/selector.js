import { selector } from "recoil";
import { counterAtom } from "../atoms/counter";

export const evenSelector = selector({
    key: isEvenSelector,
    get: function ({ get }){
        const currentCount = get(counterAtom);
        const isEven = (currentCount % 2 == 0); // 0, 2, 4, 6, 8

        return isEven;
    }
});

export const oddSelector = selector({
    key: isOddSelector,
    get: function ({ get }){
        const currentCount = get(counterAtom);
        const isOdd = (currentCount % 2 == 1); // 1, 3, 5, 7, 9

        return isOdd;
    }
});