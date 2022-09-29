import { useParams } from "react-router-dom";
import { DetailsProps } from "../interfaces/Components";
import { dataCardImages } from "../utils/data";

const Details = () => {
  const { id } = useParams();
  const dataList: DetailsProps[] = dataCardImages.filter(
    (item) => item.id === id
  );
  const data = dataList[0];
  return (
    <div>
      <h1>{data.title}</h1>
      <div>
        <img src={data.image} />
      </div>
      <div>
        <p>Descripcion</p>
      </div>
    </div>
  );
};

export default Details;
