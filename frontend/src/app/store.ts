import { configureStore } from "@reduxjs/toolkit";
import dopamineManagementReducer from "src/features/dopamine-management/dopamine-management-slice";

export const store = configureStore({
  reducer: {
    dopamineManagement: dopamineManagementReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
