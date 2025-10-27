import {useContext} from "react";
import {ThemeContext} from "../../components/ThemeProvider/ThemeContext.tsx";

export const useTheme = () => useContext(ThemeContext);