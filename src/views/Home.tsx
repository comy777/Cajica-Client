import { RemoveScroll } from "react-remove-scroll";
import FormComponent from "../components/FormComponent";
import ImportanComponent from "../components/ImportanComponent";
import ListImages from "../components/ListImages";
import ImageFooter from "../components/ImageFooter";
import useHome from "../hooks/useHome";
import CarouselComponent from "../components/CarouselComponent";

const Home = () => {
  const Fade = require("react-reveal/Fade");
  const { videoWidth, showMenu } = useHome();

  return (
    <RemoveScroll enabled={showMenu}>
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
                    Anima a tus hijos e hijas a practicarlo, ¡aprendizaje y
                    diversión van de la mano! A pesar de que el ser humano es el
                    responsable de producir una gran cantidad de residuos,
                    parece que a veces aún nos resistimos a reciclar. Así lo
                    único que logramos es perjudicarnos a nosotros mismos y al
                    medio ambiente, tanto en el corto plazo como en el futuro de
                    los que vendrán. Para cualquier madre o padre esta es una
                    cuestión preocupante. ¿Te has preguntado alguna vez qué tipo
                    de planeta se encontrarán tus hijos e hijas en unos años?
                    Este pequeño gesto, que forma parte de practicar un consumo
                    responsable, hará que nuestras generaciones futuras puedan
                    disfrutar de un planeta verde y azul.
                  </p>
                </div>
              </section>
            </Fade>
          </div>
          <div id="about">
            <ImportanComponent />
            <ListImages />
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
          </div>
        </div>
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
