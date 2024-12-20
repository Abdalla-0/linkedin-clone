import { createSlice } from "@reduxjs/toolkit";
import { TLoading, TUser } from "@types";
import actionRegister from "./actions/actionRegister";
import actionLogin from "./actions/actionLogin";
import actionLoginByGooglePopup from "./actions/actionLoginByGooglePopup";
import monitorAuthState from "./actions/actionMonitorAuthState";
import actionLogout from "./actions/actionLogout";


interface AuthState {
  user: TUser
  loading: TLoading;
  error: string | null;
}

const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem("user") || "null"),
  loading: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    // register 
    builder.addCase(actionRegister.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    })
    builder.addCase(actionRegister.fulfilled, (state, action) => {
      state.loading = "successeded";
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(state.user))
    })
    builder.addCase(actionRegister.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string || "Registration failed";
    })

    // login 
    builder.addCase(actionLogin.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    })
    builder.addCase(actionLogin.fulfilled, (state, action) => {
      state.loading = "successeded";
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(state.user))
    })
    builder.addCase(actionLogin.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });

    // login by google 
    builder.addCase(actionLoginByGooglePopup.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    })
    builder.addCase(actionLoginByGooglePopup.fulfilled, (state, action) => {
      state.loading = "successeded";
      state.user = action.payload.userData;
      localStorage.setItem('user', JSON.stringify(state.user))
    })
    builder.addCase(actionLoginByGooglePopup.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;

    });

    // logout 
    builder.addCase(actionLogout.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    })
    builder.addCase(actionLogout.fulfilled, (state) => {
      state.loading = "successeded";
      state.user = null;
      localStorage.removeItem("user");
    })
    builder.addCase(actionLogout.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;

    });

  },
});
export { actionRegister, actionLogin, actionLoginByGooglePopup, monitorAuthState, actionLogout }
export const { setUser } = authSlice.actions;
export default authSlice.reducer;
