// store.js
import { configureStore, createSlice, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { persistStore } from 'redux-persist';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: null,
    username: null,
    image: null,
  },
  reducers: {
    setUserData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUserData } = userSlice.actions;

const rootReducer = combineReducers({
  user: userSlice.reducer,
 
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
