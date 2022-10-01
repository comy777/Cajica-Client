import { useReducer } from "react";
import { appContextInitialProps } from "../interfaces/AppContext";
import { appReducer } from "../reducers/appReducers";

const useAppReducer = () => {
  const [state, dispatch] = useReducer(appReducer, appContextInitialProps);

  const setShowMenu = (show: boolean) =>
    dispatch({ type: "set show menu", payload: { show } });

  return {
    state,
    setShowMenu,
  };
};

export default useAppReducer;
