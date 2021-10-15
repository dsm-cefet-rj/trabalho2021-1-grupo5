import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { httpGet, httpPost } from "../utils";
import { baseUrl } from "../baseUrl";

const userAdapter = createEntityAdapter({
  selectId: (user)=>user.id,
}
);

const initialState = userAdapter.getInitialState({
  status: "not_loggedIn",
  error: null,
  token: null
});

export const fetchLogin = createAsyncThunk("database/fetchLogin", async (login) => {
  const response = await httpPost(`${baseUrl}/users/login`,login);
  return response;
});

export const addUserServer = createAsyncThunk(
  "database/addUserServer",
  async (login) => {
    return await httpPost(`${baseUrl}/users/signup`, login);
  }
);
export const logout = createAsyncThunk("database/logout", async ()=>{
    return await httpGet(`${baseUrl}/users/logout`,)
})
export const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  extraReducers: {
    [fetchLogin.pending]: (state, action) => {
      state.status = "logging_in";
    },
    [fetchLogin.fulfilled]: (state, action) => {
      state.status = "logged_in";
      userAdapter.addOne(state, action.payload);
      state.token = action.payload.token;
    },
    [fetchLogin.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [addUserServer.pending]: (state, action) => {
      state.status = "loading";
    },
    [logout.fulfilled]:(state)=>{
      userAdapter.removeAll(state);
      state.token = null;
    },
    [addUserServer.fulfilled]: (state, action) => {
      state.status = "saved";
    },
  },
});

export default usersSlice.reducer;

export const { selectAll: selectAllUsers } = userAdapter.getSelectors(
  (state) => state.logins
);
