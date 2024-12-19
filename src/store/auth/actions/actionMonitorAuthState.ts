import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "@fireBase";
import { setUser } from "../authSlice";

const monitorAuthState = createAsyncThunk(
    "auth/monitorAuthState",
    async (_, { dispatch }) => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                const userData = {
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                };
                dispatch(setUser(userData));
            } else {
                dispatch(setUser(null));
            }
        });
    }
);

export default monitorAuthState;