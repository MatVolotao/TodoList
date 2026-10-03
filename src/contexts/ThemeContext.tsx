import { createContext, useState } from "react";

type ThemeName = "light" | "dark";

interface ThemeContextType {
    theme: ThemeName;
    toggleTheme: () => void;
}

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: "dark",
    toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<ThemeName>("dark");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};