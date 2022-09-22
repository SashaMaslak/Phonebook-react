import initialContacts from "../components/ContactList/initialContacts.json";
import { configureStore, createSlice} from "@reduxjs/toolkit";

const contactsSlice = createSlice({
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

const filterSlice = createSlice({
   name: "filter",
   initialState: '',
   reducers: {
      filterContact(state, action) {
         return state = action.payload;
      },
   },
});

export const { filterContact } = filterSlice.actions;

// export const addContact = createAction('contacts/addContact');
// export const deleteContact = createAction('contacts/deleteContact');

// const contactsReducer = createReducer(initialContacts, {
//    // [addContact]: (state, action) => state.push(action.payload),
//    [addContact]: (state, action) => [...state, action.payload],
//    [deleteContact]: (state, action) =>
//       state.filter(item => item.id !== action.payload),
// });

export const store = configureStore({
    reducer: {
      contacts: contactsSlice.reducer,
      filter: filterSlice.reducer,
    },
});


