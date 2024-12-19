import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@fireBase";
export const actionGetPosts = createAsyncThunk(
    "posts/actionGetPosts",
    async (_, { rejectWithValue }) => {
        const dbRef = collection(db, "posts");
        try {
            const q = query(dbRef, orderBy("timestamp", "desc"));
            const response = await getDocs(q);
            const posts = response.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
                timestamp: doc.data().timestamp?.toDate().toISOString(),
            }));
            return posts;
        } catch (error) {
            return rejectWithValue((error as Error).message || "Failed to fetch posts");
        }
    }
);

export default actionGetPosts;