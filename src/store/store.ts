import { configureStore } from '@reduxjs/toolkit'
import auth from "./auth/authSlice"
import posts from "./posts/postsSlice"

const store = configureStore({
    reducer: {
        auth,
        posts,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store