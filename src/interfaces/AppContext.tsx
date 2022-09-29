export interface StateAppContextProps {
  showHeader: boolean;
  setShowHeader: (show: boolean) => void;
}

export interface StateAppContext {
  showHeader: boolean;
}

export const appContextInitialProps: StateAppContext = {
  showHeader: true,
};

export type AppContextActions = {
  type: "set header show";
  payload: { show: boolean };
};
