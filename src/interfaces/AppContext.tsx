export interface StateAppContextProps {
  showMenu: boolean;
  setShowMenu: (show: boolean) => void;
  showHeader: boolean;
  setShowHeader: (show: boolean) => void;
}

export interface StateAppContext {
  showMenu: boolean;
  showHeader: boolean;
}

export const appContextInitialProps: StateAppContext = {
  showMenu: false,
  showHeader: true,
};

export type AppContextActions =
  | {
      type: "set show menu";
      payload: { show: boolean };
    }
  | { type: "set show header"; payload: { show: boolean } };
