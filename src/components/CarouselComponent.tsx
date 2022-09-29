import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = () => {
  return (
    <Carousel showArrows={true} autoPlay interval={5000} infiniteLoop>
      <div>
        <img src="https://www.epccajica.gov.co/wp-content/uploads/2020/03/epc_reciclaje-1024x684.jpg" />
        <p className="legend">Cajica Recicla</p>
      </div>
      <div>
        <img src="https://lanotapositiva.com/wp-content/uploads/2019/08/reciclar-3.jpg" />
        <p className="legend">Cajica Recicla</p>
      </div>
      <div>
        <img src="https://i1.wp.com/elobservador.com.co/wp-content/uploads/2021/12/reciclaje.jpg?fit=850%2C495&ssl=1" />
        <p className="legend">Cajica Recicla</p>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
