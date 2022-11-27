import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const userSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    loading: false,
  },
  reducers: {
    userRequested: (state, action) => {
      state.loading = true;
    },
    userRegistered: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    userRequestFailed: (state, action) => {
      state.loading = false;
    },
  },
});


const {userRequested,userRegistered,userRequestFailed} = userSlice.actions
export default userSlice.reducer

const url = "/users"

export const registerUser = user=>{
    return apiCallBegan({
        url,
        method:"POST",
        data:user,
        onSuccess:userRegistered.type
    })
}