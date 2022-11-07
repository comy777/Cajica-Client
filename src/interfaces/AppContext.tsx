export interface StateAppContextProps {
  showMenu: boolean;
  setShowMenu: (show: boolean) => void;
  showHeader: boolean;
  setShowHeader: (show: boolean) => void;
  file: File | undefined;
  setFile: (file: File | undefined) => void
}

export interface StateAppContext {
  showMenu: boolean;
  showHeader: boolean;
  file: File | undefined
}

export const appContextInitialProps: StateAppContext = {
  showMenu: false,
  showHeader: true,
  file: undefined
};

export type AppContextActions =
  | {
      type: "set show menu";
      payload: { show: boolean };
    }
  | { type: "set show header"; payload: { show: boolean } }
  | { type: "set file"; payload: {  file: File | undefined  }}
