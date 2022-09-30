// import defaultContacts from "../components/ContactList/initialContacts.json";
import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

// const initialState = {
//    contacts: {
//       items: defaultContacts,
//       isLoading: false,
//       error: null,
//       filter: '',
//    },
// }

const handlePending = state => {
   state.isLoading = true;
};

const handleRejected = (state, action) => {
   state.isLoading = false;
   state.error = action.payload;
};

export const contactsSlice = createSlice({
   name: "contacts",

   initialState: {
      items: [],
      isLoading: false,
      error: null,
      filter: '',
   },
   reducers: {
      updateFilter(state, action) {
         state.filter = action.payload;
      },
   },
   extraReducers: {
      //------------------
      [fetchContacts.pending]: handlePending,
      [fetchContacts.fulfilled](state, action) {
         state.isLoading = false;
         state.error = null;
         state.items = action.payload;
      },
      [fetchContacts.rejected]: handleRejected,
      //------------------
      [addContact.pending]: handlePending,
      [addContact.fulfilled](state, action) {
         state.isLoading = false;
         state.error = null;
         state.items.push(action.payload);
      },
      [addContact.rejected]: handleRejected,
      //------------------
      [deleteContact.pending]: handlePending,
      [deleteContact.fulfilled](state, action) {
         state.isLoading = false;
         state.error = null;
         const index = state.items.findIndex(
            item => item.id === action.payload.id
         );
         console.log(index);
         state.items.splice(index, 1);
      },
      [deleteContact.rejected]: handleRejected,
      //------------------
   }
});

export const contactsReducer = contactsSlice.reducer;
export const { updateFilter } = contactsSlice.actions;
