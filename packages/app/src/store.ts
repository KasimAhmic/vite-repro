import { configureStore, combineReducers, Action, ThunkAction } from "@reduxjs/toolkit";
import { dummyApiReducer, dummyApiReducerPath, dummyApiMiddleware } from "@ahmic/commons";
import { uiSlicePath, uiSliceReducer } from "./slices";
import storage from "redux-persist/lib/storage/session";
import { persistReducer, persistStore } from "redux-persist";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist/es/constants";

const persistConfig = {
  key: "vite-hmr-repro",
  storage,
  whitelist: ["ui"],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    [dummyApiReducerPath]: dummyApiReducer,
    [uiSlicePath]: uiSliceReducer,
  })
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignored cause reasons: https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([dummyApiMiddleware]),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
