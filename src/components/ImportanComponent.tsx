import { dataCards } from "../utils/data";
const ImportanComponent = () => {
  const Fade = require("react-reveal/Fade");
  return (
    <div>
      <div className="p-5">
        <h2 className="md:text-3xl sm:text-xl">La importancia del reciclaje</h2>
        <p className="sm:text-sm md:text-lg ">
          Es relevante que todas las personas tomemos conciencia de los
          beneficios que traen los procesos de reciclaje, ya que de esa forma
          podemos cuidar los recursos naturales. Reciclar es una de las
          alternativas utilizadas para la reducción del volumen de residuos
          sólidos. Se trata de un proceso que consiste básicamente en volver a
          utilizar materiales que fueron desechados y que aun son aptos para
          elaborar otros productos o refabricar los mismos. Ejemplos de
          materiales reciclables son los metales, el vidrio, el plástico y el
          papel.
        </p>
      </div>
      <div className="container-1 p-5">
        <h2 className="md:text-xl text-white sm:text-sm ">
          Fundamentos para reciclar TRES R: Una forma de pensar con respecto a
          los residuos es la que propone la estrategia de las “3R”:
          reducir-reutilizar-reciclar.
        </h2>
        <div className="mt-2">
          {dataCards.map((item, i) => {
            const classCard = i === 1 ? "bg-card" : "bg-primary";
            return (
              <div key={i.toString()}>
                <Fade>
                  <div className="h-auto mb-2 rounded-3xl bg-white p-5">
                    <h2 className="md:text-lg font-bold">{item.title}</h2>
                    <p className="sm:text-sm md:text-xl">{item.body}</p>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImportanComponent;
