import defaultContacts from "../components/ContactList/initialContacts.json";
import { createSlice } from "@reduxjs/toolkit";

const storageCntacts = JSON.parse(window.localStorage.getItem('contacts'));
const initialContacts = storageCntacts ?? defaultContacts;

export const contactsSlice = createSlice({
   name: "contacts",
   initialState: initialContacts,
   reducers: {
      addContact(state, action) {
         return [...state, action.payload];
      },
      deleteContact(state, action) {
         return state.filter((item) => item.id !== action.payload);
      },
   },
});

export const { addContact, deleteContact } = contactsSlice.actions;