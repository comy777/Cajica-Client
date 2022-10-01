export interface StateAppContextProps {
  showMenu: boolean;
  setShowMenu: (show: boolean) => void;
}

export interface StateAppContext {
  showMenu: boolean;
}

export const appContextInitialProps: StateAppContext = {
  showMenu: false,
};

export type AppContextActions = {
  type: "set show menu";
  payload: { show: boolean };
};
