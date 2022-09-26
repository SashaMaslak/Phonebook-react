import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
   name: "filter",
   initialState: '',
   reducers: {
      filterContact(state, action) {
         return state = action.payload;
      },
   },
});

export const { filterContact } = filterSlice.actions;


