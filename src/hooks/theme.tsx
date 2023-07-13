import { createContext } from "react";

export const themes = {
  dark: "",
  light: "white-content",
};

interface ThemeContextValue {
  theme: string;
  changeTheme: (theme: string) => void;
  }

export const ThemeContext = createContext<ThemeContextValue>({
    theme: themes.dark,
  changeTheme: () => {},
});