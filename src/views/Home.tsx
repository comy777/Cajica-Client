import { RemoveScroll } from "react-remove-scroll";
import FormComponent from "../components/FormComponent";
import ImportanComponent from "../components/ImportanComponent";
import ListImages from "../components/ListImages";
import ImageFooter from "../components/ImageFooter";
import useHome from "../hooks/useHome";
import CarouselComponent from "../components/CarouselComponent";
import ListMaterials from "../components/ListMaterials";
import Galerycomponent from "../components/Galerycomponent";

const Home = () => {
  const Fade = require("react-reveal/Fade");
  const { videoWidth, showMenu, dataCard, dataMaterials } = useHome();

  return (
    <RemoveScroll enabled={showMenu}>
      <Galerycomponent />
      <div className="overflow-hidden">
        <div id="home">
          <CarouselComponent />
        </div>
        <div>
          <div>
            <Fade right big>
              <section>
                <div className="container-1 p-5">
                  <h2 className="md:text-3xl sm:text-xl my-2 text-white">
                    ¿Por qué es importante reciclar?
                  </h2>
                  <p className="md:text-xl sm:text-sm text-white">
                    Basura en nuestros océanos, ríos llenos de desperdicios,
                    ciudades cuyo aire es irrespirable... Nos sobran los
                    motivos, ¡pongámonos en marcha! Reciclar es una de las
                    actividades cotidianas más sencillas y gratificantes que
                    podemos llevar a cabo. Tanto, que puede participar cualquier
                    miembro de la familia, incluso los más peques de la casa.
                  </p>
                </div>
              </section>
            </Fade>
          </div>
          <div id="about">
            <ImportanComponent data={dataCard} />
            <ListImages data={dataCard} />
          </div>
        </div>
        <div className="px-5">
          <h2 className="md:text-3xl sm:text-xl my-2" >Materiales reciclables que encuentras en casa</h2>
          <div id="list materials" className="md:flex mt-5 md:justify-center sm:grid sm:grid-rows-4">
            {dataMaterials.map((item, i) => (
              <div key={item._id.toString()} >
                <ListMaterials
                  title={item.title}
                  data={item.items}
                />
              </div>
            ))}
          </div>
        </div>
        <section className="p-5">
          <h2 className="md:text-3xl my-4 sm:text-xl">
            Cajicá en pro del ambiente
          </h2>
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
        <div id="more-information">
          <ImageFooter />
        </div>
        <div id="contact">
          <FormComponent />
        </div>
      </div>
    </RemoveScroll>
  );
};

export default Home;
