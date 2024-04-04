// ColorModeProvider.jsx
import { createContext, useEffect, useState } from "react";

// Create a context to store the color mode and the toggler function
export const ColorModeContext = createContext({
  colorMode: "dark",
  toggleColorMode: () => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setColorMode: (_: any) => {},
});

const getDefaultColorMode = (): any => sessionStorage.getItem("@colorMode") ?? "dark";

// Create a custom provider component that wraps the children with the context provider
export const ColorModeProvider = ({ children, defaultTheme }: { children: any; defaultTheme?: "light" | "dark" }) => {
  // Use a state variable to keep track of the color mode
  const [colorMode, setColorMode] = useState<"light" | "dark">(defaultTheme ?? getDefaultColorMode());

  useEffect(() => {
    const event = new CustomEvent("onChangeColorMode", { detail: { colorMode } });
    sessionStorage.setItem("@colorMode", colorMode);
    window.dispatchEvent(event);
  }, [colorMode]);

  // Define a function to toggle the color mode
  const toggleColorMode = () => {
    setColorMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  // Pass the color mode and the toggler function to the context value
  const value = { colorMode, toggleColorMode, setColorMode };

  return <ColorModeContext.Provider value={value}>{children}</ColorModeContext.Provider>;
};

export default ColorModeProvider;
