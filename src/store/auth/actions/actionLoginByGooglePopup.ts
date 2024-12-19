import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, provider } from "@fireBase";
import { signInWithPopup } from "firebase/auth";
const actionLoginByGooglePopup = createAsyncThunk(
    "auth/actionLoginByGooglePopup",
    async (_, { rejectWithValue }) => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            const userData = {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
            };
            return { userData };
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to log in");
        }
    }
);

export default actionLoginByGooglePopup;