import { useReducer } from "react";
import { appContextInitialProps } from "../interfaces/AppContext";
import { appReducer } from "../reducers/appReducers";

const useAppReducer = () => {
  const [state, dispatch] = useReducer(appReducer, appContextInitialProps);

  const setShowHeader = (show: boolean) =>
    dispatch({ type: "set header show", payload: { show } });

  return {
    state,
    setShowHeader,
  };
};

export default useAppReducer;
