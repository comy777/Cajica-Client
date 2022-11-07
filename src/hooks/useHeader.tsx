import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const useHeader = () => {
  const { showMenu, setShowMenu, showHeader } = useContext(AppContext);

  const handleNavigate = () => setShowMenu(false);

  return {
    showMenu,
    setShowMenu,
    handleNavigate,
    showHeader,
  };
};

export default useHeader;
