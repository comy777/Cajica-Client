import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = () => {
  return (
    <Carousel
      showArrows={true}
      autoPlay
      interval={5000}
      infiniteLoop
      showStatus={false}
    >
      <div>
        <img
          src="https://media.istockphoto.com/photos/cardboard-house-on-grass-picture-id937210218?k=20&m=937210218&s=612x612&w=0&h=VxFaoAohMKcsx2O2DS0xZhseIRlEfKIkqKv2CvCJzyI="
          className="object-cover"
        />
        <p className="legend">Cajicá recicla en pro de su comunidad</p>
      </div>
      <div>
        <img
          src="https://media.istockphoto.com/photos/ecology-concept-forest-water-save-and-tree-and-butterfly-droplet-tap-picture-id919781054?k=20&m=919781054&s=612x612&w=0&h=zndjPxVPJbWbR6sPpFA5edoMl2TOUIP_PcF9nCCk5Vk="
          className="object-cover"
        />
        <p className="legend">Cajicá piensa en el medio ambiente</p>
      </div>
      <div>
        <img
          src="https://media.istockphoto.com/photos/ecology-concept-go-green-environment-of-paper-cut-clean-energy-and-picture-id932751848?k=20&m=932751848&s=612x612&w=0&h=DtcUpvErlVipbzSSqVQs05dvXLfQmdykK-5FOjlvrs0="
          className="object-cover"
        />
        <p className="legend">Cajicá trabaja en equipo</p>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
