import { useContext } from "react";
import { ColorModeContext } from "./ColorModeProvider";

// Create a custom hook to use the color mode context
export const useColorMode = () => {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error("useColorMode must be used within a ColorModeProvider");
  }
  return context;
};

export default useColorMode;
