import { createContext } from "react";
import { StateAppContextProps } from "../interfaces/AppContext";
import useAppReducer from "../hooks/useAppReducer";

export const AppContext = createContext({} as StateAppContextProps);

export const AppContextProvider = ({ children }: any) => {
  const { state, setShowMenu, setShowHeader, setFile } = useAppReducer();

  return (
    <AppContext.Provider value={{ ...state, setShowMenu, setShowHeader, setFile }}>
      {children}
    </AppContext.Provider>
  );
};
