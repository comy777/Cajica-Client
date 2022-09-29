import { createContext } from "react";
import { StateAppContextProps } from "../interfaces/AppContext";
import useAppReducer from "../hooks/useAppReducer";

export const AppContext = createContext({} as StateAppContextProps);

export const AppContextProvider = ({ children }: any) => {
  const { state, setShowHeader } = useAppReducer();

  return (
    <AppContext.Provider value={{ ...state, setShowHeader }}>
      {children}
    </AppContext.Provider>
  );
};
