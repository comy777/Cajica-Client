import Header from "./components/Header";
import { AppContextProvider } from "./context/AppContext";
import { AppRoutes } from "./router/AppRoutes";

const AppState = ({ children }: any) => {
  return <AppContextProvider>{children}</AppContextProvider>;
};

const App = () => {
  return (
    <AppState>
      <Header />
      <AppRoutes />
    </AppState>
  );
};

export default App;
