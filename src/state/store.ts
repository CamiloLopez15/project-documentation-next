// store.ts
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface themeState {
  value: string
}

const initialThemeState: themeState = {
  value: "dark",
}

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialThemeState,
  reducers: {
    changeThemeToDark(theme) {
      theme.value = "dark";
    },
    changeThemeToLight(theme) {
      theme.value = "light";
    }
  }
})

export const {changeThemeToDark, changeThemeToLight} = themeSlice.actions;
export default themeSlice.reducer;
