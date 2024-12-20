import { auth } from "@fireBase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";

type TUserData = {
    email: string;
    password: string;
};


const actionRegister = createAsyncThunk(
    "auth/actionRegister",
    async (user: TUserData, { rejectWithValue }) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);
            return {
                uid: userCredential.user.uid,
                email: userCredential.user.email,
                displayName: userCredential.user.displayName,
                photoURL: userCredential.user.photoURL,
            };
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to log in");
        }
    }
);

export default actionRegister;