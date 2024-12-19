import { auth } from "@fireBase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";

type TUserData = {
    email: string;
    password: string;
};


const actionRegister = createAsyncThunk(
    "auth/actionRegister",
    async (user: TUserData, {rejectWithValue}) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password);
            return {
                email: userCredential.user.email,
                uid: userCredential.user.uid,
            };
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to log in");
        }
    }
);

export default actionRegister;