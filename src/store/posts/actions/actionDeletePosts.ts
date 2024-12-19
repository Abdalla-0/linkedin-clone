import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "@fireBase";
import { deleteDoc, doc } from "firebase/firestore";

const actionDeletePosts = createAsyncThunk("posts/actionDeletePosts", async (postId: string, { rejectWithValue }) => {
    try {
        await deleteDoc(doc(db, "posts", postId));
        return postId;
    } catch (error) {
        return rejectWithValue((error as Error).message || "Failed to delete post");
    }
})

export default actionDeletePosts;