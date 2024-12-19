import { createSlice } from "@reduxjs/toolkit";
import actionAddPosts from "./actions/actionAddPosts";
import { TLoading } from "@types";
import actionGetPosts from "./actions/actionGetPosts";
import actionDeletePosts from './actions/actionDeletePosts';

interface PostsState {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    posts: any[]
    loading: TLoading;
    error: string | null;
}

const initialState: PostsState = {
    posts: [],
    loading: "idle",
    error: null,
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        actionDeletePosts: (state, action) => {
            state.posts = state.posts.filter((post) => (
                post.id !== action.payload
            ))
        }
    },
    extraReducers: (builder) => {
        // add posts
        builder.addCase(actionAddPosts.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        })
        builder.addCase(actionAddPosts.fulfilled, (state) => {
            state.loading = "successeded";
        })
        builder.addCase(actionAddPosts.rejected, (state, action) => {
            state.loading = "failed";
            state.error = action.payload as string;
        });
        // get posts 
        builder.addCase(actionGetPosts.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        })
        builder.addCase(actionGetPosts.fulfilled, (state, action) => {
            state.loading = "successeded";
            state.posts = action.payload;
        })
        builder.addCase(actionGetPosts.rejected, (state, action) => {
            state.loading = "failed";
            state.error = action.payload as string;
        });
        // delete posts
        builder.addCase(actionDeletePosts.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        })
        builder.addCase(actionDeletePosts.fulfilled, (state, action) => {
            state.loading = "successeded";
            state.posts = state.posts.filter((post) => (
                post.id !== action.payload
            ))
        })
        builder.addCase(actionDeletePosts.rejected, (state, action) => {
            state.loading = "failed";
            state.error = action.payload as string;
        });
    },
});
export { actionAddPosts, actionGetPosts, actionDeletePosts };
export default postsSlice.reducer;
