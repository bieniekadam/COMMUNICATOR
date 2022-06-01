import { configureStore } from "@reduxjs/toolkit";
import ConversationSlice from "./ConversationSlice";
export const store = configureStore({
  reducer: {
    ConversationSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

store.subscribe(() => console.log(store.getState()));
