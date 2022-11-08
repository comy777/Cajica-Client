import FooterComponent from "./components/FooterComponent";
import { AppContextProvider } from "./context/AppContext";
import { AppRoutes } from "./router/AppRoutes";

const AppState = ({ children }: any) => {
  return <AppContextProvider>{children}</AppContextProvider>;
};

const App = () => {
  return (
    <AppState>
      <div className="relative">
        <AppRoutes />
        <FooterComponent />
      </div>
    </AppState>
  );
};

export default App;
