import { useParams } from "react-router-dom";
import { DetailsProps } from "../interfaces/Components";
import { dataCardImages } from "../utils/data";

const Details = () => {
  const { id } = useParams();
  const dataList: DetailsProps[] = dataCardImages.filter(
    (item) => item.id === id
  );
  const data = dataList[0];
  const Zoom = require("react-reveal/Zoom");
  return (
    <Zoom>
      <div className="mt-5">
        <h1 className="text-center text-3xl font-bold">{data.title}</h1>
        <div className="grid md:grid-rows-1 md:grid-cols-2 sm:grid-rows-2 mx-5 mt-5 md:h-[100vh] sm:h-auto gap-x-4 items-center">
          <div className="mb-12">
            <p className="text-justify"> {data.body} </p>
          </div>
          <div className="relative sm:row-start-1 sm:m-0 md:col-start-2">
            <div className="absolute bottom-32 right-0 left-0 flex justify-center">
              <div className="">
                <h1 className="text-3xl text-white font-bold">
                  Reducir, reciclar,
                  <br />
                  reutilizar y recuperar:
                  <br />
                  las 4R del reciclaje
                </h1>
              </div>
            </div>
            <img src={data.imgDetails} className="h-96" />
          </div>
        </div>
      </div>
    </Zoom>
  );
};

export default Details;
