import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Menu = () => {
  const { showMenu, setShowMenu } = useContext(AppContext);
  return (
    <div>
      {!showMenu ? (
        <div className="menu" onClick={() => setShowMenu(true)}>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </div>
      ) : (
        <div
          className="text-white font-bold text-xl"
          onClick={() => setShowMenu(false)}
        >
          X
        </div>
      )}
    </div>
  );
};

export default Menu;
