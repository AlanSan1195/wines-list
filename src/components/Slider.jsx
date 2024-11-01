import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import ButtomMaridage from "./ButtomMaridage.jsx";

const WINES = [
  {
    title: "Zuccardi Emma",
    description:
      "Zuccardi Emma es un vino tinto argentino de la variedad bonarda, elaborado en la región del Valle de Uco, Mendoza",
    price: "$1950",
    variedad: "100% Bonarda",
    graduation: "13.5%",
    image: "imagenes-vinos/emmaZuccardi.webp",
    entradas: "Bocaditos de espinacas",
    carne: "Bife de lomo",
  },
  {
    title: "Jose Zuccardi",
    description:
      "José Zuccardi fue un vino creado por Sebastián Zuccardi como un homenaje a su padre, José, y simboliza su pasión y convicción",
    price: "$4500",
    variedad: "95% Malbec 5% Cabernet Sauvignon",
    graduation: "15%",
    image: "imagenes-vinos/joseZuccardi.webp",
    entradas: "Mollejas verdeo",
    carne: "Entraña",
  },
];

const FlickingComponent = () => (

  <Flicking
    className="w-full p-4 my-1    "
    moveType="freeScroll"
    horizontal={false}
    align="center"
  >
    {WINES.map((wine) => {
      const {
        title,
        description,
        price,
        variedad,
        graduation,
        image,
        entradas,
        carne,
      } = wine;
      return (
        <article
          key={title}
          className={`relative my-6 flex-col justify-center items-center rounded-lg border-[1px] border-white/30 bg-black transition-transform duration-500 `}
        >
          <div className="  absolute -top-10 left-0 mr-24  ">
            <img
              src={`/${image}`}
              alt={title}
              className=" h-52 w-auto wine-card-div"
            />
          </div>
          <div className="ml-[105px] flex flex-col gap-y-1 px-2 my-3 text-pretty">
            <h2 className="font-bold text-xl opacity-80 mt-4 mb-2">{title}</h2>
            <p className="opacity-80 text-sm mb-2">{description}</p>
            <p className="font-semibold text-xs opacity-90">
              Composicion:{" "}
              <span className="font-normal opacity-80">{variedad}</span>
            </p>
            <p className="font-semibold text-xs mb-4 opacity-80">
              Graduacion alcoholica:{" "}
              <span className="font-normal opacity-80">{graduation}</span>
            </p>

            <ButtomMaridage
              price={price}
              vino={title}
              entradas={entradas}
              carne={carne}
            />
          </div>
        </article>
      );
    })}
  </Flicking>
);

export default FlickingComponent;
