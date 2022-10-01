import { useReducer } from "react";
import { appContextInitialProps } from "../interfaces/AppContext";
import { appReducer } from "../reducers/appReducers";

const useAppReducer = () => {
  const [state, dispatch] = useReducer(appReducer, appContextInitialProps);

  const setShowMenu = (show: boolean) =>
    dispatch({ type: "set show menu", payload: { show } });

  const setShowHeader = (show: boolean) =>
    dispatch({ type: "set show header", payload: { show } });

  return {
    state,
    setShowMenu,
    setShowHeader,
  };
};

export default useAppReducer;
