import { atom } from "recoil";

export const isSignedInState = atom({
    key: 'isSignedInState',
    default: false
});

export const isSignedUpState = atom({
    key: 'isSignedUpState',
    default: false,
})