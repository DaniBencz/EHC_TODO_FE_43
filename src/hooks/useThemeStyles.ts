import { useMemo } from 'react';

export const useThemeStyles = (theme: string) => {
  return useMemo(() => ({
    background: theme === "dark" ? "bg-gray-900" : "bg-gray-100",
    card: theme === "dark" ? "bg-gray-800" : "bg-white",
    text: theme === "dark" ? "text-gray-300" : "text-gray-700",
    textMuted: "text-gray-500",
    placeholder: theme === "dark" ? "placeholder-gray-500" : "placeholder-gray-400",
    border: theme === "dark" ? "border-gray-700" : "border-gray-200",
    divide: theme === "dark" ? "divide-gray-700" : "divide-gray-200",
    inputBorder: theme === "dark" ? "border-gray-500 hover:border-blue-400" : "border-gray-300 hover:border-blue-500",
    hover: theme === "dark" ? "hover:text-white" : "hover:text-gray-800",
    addButton: theme === "dark" ? "text-gray-400" : "text-gray-400"
  }), [theme]);
};
