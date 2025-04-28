import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import rootReducer from '@/redux/reducers'; // Ensure this includes your user slice
import { userApi } from '@/apis/user_api';
import { recipeApi } from '@/apis/recipe_api';
// import {

//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// Configuration for Redux Persist
const persistConfig = {
  key: 'root', // Key for the persisted state
  storage, // Storage engine (localStorage)
  whitelist: ['user'], // Specify which reducers to persist
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store with the persisted reducer
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware,recipeApi.middleware),
});

// Create a persistor
export const persistor = persistStore(store);

export default store;