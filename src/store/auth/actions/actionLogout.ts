import { auth } from "@fireBase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { signOut } from "firebase/auth";
const actionLogout = createAsyncThunk(
    "auth/actionLogout",
    async (_, { rejectWithValue }) => {
        try {
             signOut(auth);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to log in");
        }
    }
);

export default actionLogout;