import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LanguageState {
  currentLanguage: "ru" | "en";
}

const initialState: LanguageState = {
  currentLanguage: "ru",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<"ru" | "en">) {
      state.currentLanguage = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
