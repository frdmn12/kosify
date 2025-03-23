import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "@/constant";

interface AuthState {
  loading: boolean;
  // userInfo: object | null;
  accessToken: string | null;
  error: string | null;
  status: "idle" | "loading" | "success" | "failed";
}

const initialState: AuthState = {
  loading: false,
  // userInfo: null,
  accessToken: null,
  error: null,
  status: "idle",
};

// async thunk
export const userLogin = createAsyncThunk(
  "auth/login",
  async (data: { email: string; password: string }) => {
    try {
      // console.log(API_URL);
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      return result;
    } catch (err: any) {
      console.error(err.response.data.message);
      // const errMessage = err.response.data.message.toString();
      throw err;
    }
  }
);

// slice
const authSlice = createSlice({
  name: "auths",
  initialState,
  reducers: {
    logout: (state) => {
      // state.userInfo = null;
      state.accessToken = null;
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.status = "loading";
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = "success";
        state.loading = false;
        state.accessToken = action.payload.accessToken;
        // state.userInfo = action.payload.userData;
        state.error = null;
        // console.log("User logged in:", action.payload);
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.status = "failed";
        state.loading = false;
        state.error = action.payload as string;
        // console.log("Login error:", action.payload);
      });
  },
});

export default authSlice.reducer;
