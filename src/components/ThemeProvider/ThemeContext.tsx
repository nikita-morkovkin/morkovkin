import {createContext, useState} from "react";
import type {IThemeProvider} from "./types/themeProviderInterface.ts";

const defaultTheme = window.localStorage.getItem('theme') || 'dark';

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext({
  theme: defaultTheme,
  toggleTheme: () => {}
});

const ThemeProvider = ({children}: IThemeProvider) => {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);

  const toggleTheme = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setCurrentTheme(newTheme);
    window.localStorage.setItem('theme', newTheme);
  }

  return (
    <ThemeContext.Provider value={{theme: currentTheme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
};

export default ThemeProvider;