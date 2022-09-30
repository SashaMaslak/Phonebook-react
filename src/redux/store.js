import { configureStore, } from "@reduxjs/toolkit";
import { contactsSlice } from "./contactsSlice";
import { persistReducer } from "redux-persist";
import {
   persistStore,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from 'redux-persist';
import storage from "redux-persist/lib/storage";

const persistConfig = {
   key: 'contactsPersistor',
   storage,
   blacklist: ['filter'],
};

export const contactsReducer = persistReducer(
   persistConfig,
   contactsSlice.reducer
);

export const store = configureStore({
   reducer: { contacts: contactsReducer },
   middleware(getDefaultMiddleware) {
      return getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      });
   },
});

export const persistor = persistStore(store);

