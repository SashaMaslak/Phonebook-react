import defaultContacts from "../components/ContactList/initialContacts.json";
import { createSlice } from "@reduxjs/toolkit";

const storageContacts = {
   items: defaultContacts,
   filter: '',
}

// const initialContacts = storageCntacts ?? defaultContacts;

export const contactsSlice = createSlice({
   name: "contacts",
   initialState: storageContacts,
   reducers: {
      addContact(state, action) {
         state.items = [...state.items, action.payload];
      },
      deleteContact(state, action) {
         state.items = state.items.filter(
            contact => contact.id !== action.payload
         );
         // state.items.filter((item) => item.id !== action.payload);
      },
      updateFilter(state, action) {
         state.filter = action.payload;
      },
   },
});

export const { addContact, deleteContact, updateFilter } = contactsSlice.actions;
