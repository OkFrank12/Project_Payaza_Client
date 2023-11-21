import {
  FLUSH,
  PURGE,
  PAUSE,
  REGISTER,
  REHYDRATE,
  PERSIST,
  persistReducer,
} from "redux-persist";
import rootReducer from "./reduxState";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";

const config = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(config, rootReducer);

export const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PURGE, REGISTER, REHYDRATE, PERSIST],
      },
    }),
});
