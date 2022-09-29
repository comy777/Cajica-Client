import { AppContextActions, StateAppContext } from "../interfaces/AppContext";

export const appReducer = (
  state: StateAppContext,
  action: AppContextActions
): StateAppContext => {
  switch (action.type) {
    case "set header show":
      return {
        ...state,
        showHeader: action.payload.show,
      };
    default:
      return state;
  }
};
