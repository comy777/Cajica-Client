import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const useHeader = () => {
  const { showMenu, setShowMenu } = useContext(AppContext);

  const handleNavigate = () => setShowMenu(false);

  return {
    showMenu,
    setShowMenu,
    handleNavigate,
  };
};

export default useHeader;
