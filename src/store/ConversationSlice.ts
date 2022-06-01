import { createSlice } from "@reduxjs/toolkit";

export interface ConversationSlice {
  message: string[];
  popup: boolean;
}

export const initialState: ConversationSlice = {
  message: [],
  popup: false,
};

export const ConversationSlice = createSlice({
  name: "ConversationSlice",
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      state.message = [...state.message, action.payload];
    },
    setPopup: (state, action) => {
      state.popup = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { sendMessage, setPopup } = ConversationSlice.actions;

export default ConversationSlice.reducer;
