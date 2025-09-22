import { ThemeContext } from "../context/themeContext";
import { useState } from "react";
import type { ReactNode } from "react";

export const ThemeProvider = ({ children }: { children: ReactNode; }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
