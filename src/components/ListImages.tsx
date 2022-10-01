import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { dataCardImages } from "../utils/data";

const ListImages = () => {
  const Pulse = require("react-reveal/Pulse");
  const { setShowHeader } = useContext(AppContext);
  return (
    <div className="md:h-64 md:mx-12 mt-12 sm:mx-2">
      <div className="grid md:grid-cols-4 sm:grid-row">
        {dataCardImages.map((item, i) => (
          <div
            className="md:mx-2 sm:h-80 sm:my-2 md:my-0 md:h-60 bg-white zoom"
            key={i.toString()}
            onClick={() => setShowHeader(false)}
          >
            <Pulse>
              <Link to={`${item.path}/${item.id}`}>
                <img
                  src={item.image}
                  className="sm:h-72 md:h-48 object-center"
                />
                <div className="flex justify-center mt-2 sm:text-xl md:text-2xl ">
                  <p>{item.title}</p>
                </div>
              </Link>
            </Pulse>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListImages;
