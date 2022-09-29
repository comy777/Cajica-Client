import { useContext } from "react";
import { Link } from "react-router-dom";
import { dataCardImages } from "../utils/data";
import { AppContext } from "../context/AppContext";

const ListImages = () => {
  const { setShowHeader } = useContext(AppContext);
  return (
    <div className="md:h-64 md:mx-24 mt-12 sm:mx-2">
      <div className="grid md:grid-cols-4 sm:grid-row">
        {dataCardImages.map((item, i) => (
          <div
            className="mx-2 h-60 bg-white zoom"
            key={i.toString()}
            onClick={() => setShowHeader(false)}
          >
            <Link to={`${item.path}/${item.id}`}>
              <img src={item.image} />
              <div className="flex justify-center">
                <p>{item.title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListImages;
