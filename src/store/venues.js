import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import axios from "axios";
import { apiCallBegan } from "./api";
import moment from "moment";

const slice = createSlice({
  name: "venues",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null
  },
  reducers: {
    venuesRequested: (state, action) => {
      state.loading = true;
    },

    venuesReceived: (state, action) => {
      state.list = action.payload;
      state.loading = false;
      state.lastFetch = Date.now();
    },

    venuesRequestFailed: (state, action) => {
      state.loading = false;
    },

    // venueAssignedToUser: (venues, action) => {
    //   const { id: venueId, userId } = action.payload;
    //   const index = venues.list.findIndex(venue => venue.id === venueId);
    //   venues.list[index].userId = userId;
    // },

    // command - event
    // addvenue - venueAdded
    venueAdded: (venues, action) => {
      venues.list.push(action.payload);
    },

    // // resolvevenue (command) - venueResolved (event)
    // venueResolved: (venues, action) => {
    //   const index = venues.list.findIndex(venue => venue.id === action.payload.id);
    //   venues.list[index].resolved = true;
    // }
  }
});

export const {
  venueAdded,
  venueResolved,
  venueAssignedToUser,
  venuesReceived,
  venuesRequested,
  venuesRequestFailed
} = slice.actions;
export default slice.reducer;

// Action Creators
const url = "/halls";

export const loadvenues = () => (dispatch, getState) => {
  console.log("getState()",getState())
  const { lastFetch } = getState().entities.venues;

  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < 10) return;

  return dispatch(
    apiCallBegan({
      url,
      onStart: venuesRequested.type,
      onSuccess: venuesReceived.type,
      onError: venuesRequestFailed.type
    })
  );
};

export const addvenue = venue =>
  apiCallBegan({
    url,
    method: "post",
    data: venue,
    onSuccess: venueAdded.type
  });

// export const resolvevenue = id =>
//   apiCallBegan({
//     // /venues
//     // PATCH /venues/1
//     url: url + "/" + id,
//     method: "patch",
//     data: { resolved: true },
//     onSuccess: venueResolved.type
//   });

// export const assignvenueToUser = (venueId, userId) =>
//   apiCallBegan({
//     url: url + "/" + venueId,
//     method: "patch",
//     data: { userId },
//     onSuccess: venueAssignedToUser.type
//   });

// Selector

// Memoization
// venues => get unresolved venues from the cache

// export const getvenuesByUser = userId =>
//   createSelector(
//     state => state.entities.venues,
//     venues => venues.filter(venue => venue.userId === userId)
//   );

export const getVenues = createSelector(
  state => state.entities.venues,
  state => state.entities.projects,
  (venues, projects) => venues.list
);
