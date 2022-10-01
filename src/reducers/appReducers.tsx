import { AppContextActions, StateAppContext } from "../interfaces/AppContext";

export const appReducer = (
  state: StateAppContext,
  action: AppContextActions
): StateAppContext => {
  switch (action.type) {
    case "set show menu":
      return {
        ...state,
        showMenu: action.payload.show,
      };
    default:
      return state;
  }
};
