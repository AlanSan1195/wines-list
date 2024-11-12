import "./Buttom.css";



export default function ButtomMaridage({
  price,
  entradas,
  carne,
  isActive,
  toggleIsActive,
  speach
}) {


  // hacer que cambie si esta activo

  const classEnable = isActive ? "active" : "desactive";

  return (
    <>
      <div className="flex justify-between items-center px-6 text-sm  ">
        <button onClick={toggleIsActive} className={classEnable}>
          Maridaje
        </button>
        <p className="text-sm font-bold opacity-80 ">{price}</p>
      </div>
      <div
        id="maridage-div"
        className={`transition-max-height duration-500 ease-in-out overflow-hidden bg w-full  ${
          isActive ? "max-h-80" : "max-h-0 "
        } flex flex-col gap-y-2 px-8 mt-9 mb-4  text-pretty`}
      >
        <div className="flex  gap-x-2 items-center">
          <p className="font-bold opacity-90">Entrada:</p>{" "}
          <a className=" recomendaciones opacity-80" href="#">
            {entradas}
          </a>
        </div>
        <div className="flex gap-x-2 items-center">
          <p className="font-bold opacity-90">Platillo:</p>{" "}
          <a className=" recomendaciones opacity-80" href="#">
            {carne}
          </a>
        </div>
        <div>
        {
          speach && <p className="text-xs opacity-60 ">{speach}</p>
        }
        </div>
      </div>
    </>
  );
}
