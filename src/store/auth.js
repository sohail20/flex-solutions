// import React from "react";
// import { createSlice } from "@reduxjs/toolkit";
// import { apiCallBegan } from "./api";
// import { Redirect } from "react-router-dom";
// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     token: "",
//     loading: false,
//   },
//   reducers: {
//     requestedAuth: (state, action) => {
//       state.loading = true;
//     },
//     recievedAuth: (state, action) => {
//       const token = action.payload;
//       if (token) {
//         localStorage.setItem("token", token);
//         window.location.href = "http://localhost:3001/index";
//       }
//       state.token = action.payload;
//       state.loading = false;
//     },
//     onAuthError: (state, action) => {
//       state.loading = false;
//     },
//   },
// });

// const { requestedAuth, recievedAuth, onAuthError } = authSlice.actions;
// export default authSlice.reducer;
// const url = "/auth";

// export const authenticateUser = (user) => {
//   return apiCallBegan({
//     url,
//     method: "POST",
//     data: user,
//     onSuccess: recievedAuth.type,
//   });
// };

