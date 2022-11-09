import { Link } from "react-router-dom";
import useHeader from "../hooks/useHeader";
import { dataHeader } from "../utils/data";
import Menu from "./Menu";

const Header = () => {
  const Slide = require("react-reveal/Slide");
  const { showMenu, handleNavigate, showHeader } = useHeader();

  return (
    <div className="flex items-center headerApp px-5 justify-between">
      <Link to="/" >
        <h1 className="md:text-3xl sm:text-xl font-bold headerTextColor ">
          Reci-Cajicá
        </h1>
      </Link>
      {showHeader && (
        <Slide right>
          <div className="sm:hidden md:flex">
            {dataHeader.map((item, i) => (
              <a href={item.route} key={i.toString()}>
                <div className="headerListItem rounded-lg p-2">
                  <p className="text-white text-sm font-bold">{item.title}</p>
                </div>
              </a>
            ))}
            <Link to="ideas">
              <div className="headerListItem rounded-lg p-2">
                <p className="text-white text-sm font-bold">Ideas</p>
              </div>
            </Link>
          </div>
        </Slide>
      )}
      <div className="sm:flex md:hidden">
        {showHeader && <Menu />}
        {showMenu && (
          <div className=" h-[100vh] sm:absolute top-0 bottom-0 right-0 left-0 show-menu z-50 w-80 headerMenu">
            <h2 className="font-bold text-xl text-white">Menu</h2>
            {dataHeader.map((item, i) => (
              <div
                className="show-menu-btn"
                key={i.toString()}
                onClick={handleNavigate}
              >
                <a href={item.route}>
                  <p className="text-white text-sm font-bold">{item.title}</p>
                </a>
              </div>
            ))}
            <Link to="ideas">
              <div className="show-menu-btn">
                <p className="text-white text-sm font-bold">Ideas</p>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
