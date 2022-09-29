import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CarouselComponent from "../components/CarouselComponent";
import FormComponent from "../components/FormComponent";
import ImportanComponent from "../components/ImportanComponent";
import ListImages from "../components/ListImages";
import ImageFooter from "../components/ImageFooter";
import FooterComponent from "../components/FooterComponent";
import { AppContext } from "../context/AppContext";
import useHome from "../hooks/useHome";
import { getDeviceInfo } from "../utils/movil";

const Home = () => {
  const Zoom = require("react-reveal/Zoom");
  const Fade = require("react-reveal/Fade");
  const { videoWidth } = useHome();

  return (
    <div className="overflow-hidden">
      <div>
        <CarouselComponent />
      </div>
      <div>
        <div>
          <Fade right big>
            <section>
              <div className="container-1 p-5">
                <h2 className="md:text-3xl sm:text-xl my-2 text-white">
                  Contenido
                </h2>
                <p className="md:text-xl sm:text-sm text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  velit nulla temporibus harum eos facere repellendus, odit
                  nesciunt placeat necessitatibus corrupti rem hic animi
                  doloribus itaque error quos inventore. Dicta? Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Illo velit nulla
                  temporibus harum eos facere repellendus, odit nesciunt placeat
                  necessitatibus corrupti rem hic animi doloribus itaque error
                  quos inventore. Dicta? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Illo velit nulla temporibus harum eos facere
                  repellendus, odit nesciunt placeat necessitatibus corrupti rem
                  hic animi doloribus itaque error quos inventore. Dicta?
                </p>
              </div>
            </section>
          </Fade>
        </div>
        <ImportanComponent />
        <ListImages />
        <section className="p-5">
          <h2 className="md:text-3xl my-4 sm:text-xl">Videos</h2>
          <div className="grid justify-items-center">
            <iframe
              width={videoWidth}
              height="315"
              src="https://www.youtube.com/embed/HvqX6ZMKCFQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </section>
      </div>
      <ImageFooter />
      <FormComponent />
      <FooterComponent />
    </div>
  );
};

export default Home;
