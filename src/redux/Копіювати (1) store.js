import { configureStore, createSlice } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import initialContacts from "../components/ContactList/initialContacts.json";
// import { contactsSlice } from "./contactsSlice";
// import { filterSlice } from "./filterSlice";

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

const persistConfig = {
   key: 'contacts',
   storage,
};

const persistedContactsReducer = persistReducer(
   persistConfig,
   contactsSlice.reducer
);

export const store = configureStore({
    reducer: {
      contacts: persistedContactsReducer,
      filter: filterSlice.reducer,
   },
   middleware(getDefaultMiddleware) {
      return getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      });
   },
});

export const persistor = persistStore(store);






