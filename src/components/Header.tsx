import { useEffect, useContext } from "react";
import { dataHeader } from "../utils/data";
import { AppContext } from "../context/AppContext";

const Header = () => {
  const { showHeader } = useContext(AppContext);

  return (
    <div className="flex items-center headerApp px-5 justify-between">
      <h1 className="md:text-3xl sm:text-xl font-bold headerTextColor ">
        Residuos Cajica
      </h1>
      {showHeader && (
        <div className="sm:hidden md:flex">
          {dataHeader.map((item, i) => (
            <div className="headerListItem rounded-lg p-2" key={i.toString()}>
              <p className="text-white">{item.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
