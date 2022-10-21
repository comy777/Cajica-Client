import { useReducer } from "react";
import { appContextInitialProps } from "../interfaces/AppContext";
import { appReducer } from "../reducers/appReducers";

const useAppReducer = () => {
  const [state, dispatch] = useReducer(appReducer, appContextInitialProps);

  const setShowMenu = (show: boolean) =>
    dispatch({ type: "set show menu", payload: { show } });

  const setShowHeader = (show: boolean) =>
    dispatch({ type: "set show header", payload: { show } });
  
  const setFile = (file: File | undefined) =>
    dispatch({ type: "set file", payload: { file } });

  return {
    state,
    setShowMenu,
    setShowHeader,
    setFile
  };
};

export default useAppReducer;
