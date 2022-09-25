import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

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

export const GetFilter = () => useSelector(state => state.filter);

