import "./Buttom.css";
import { useState } from "react";
 import { getCollection } from "astro:content";
 const wines = await getCollection("wines");
 
 export default function ButtomMaridage({ vino, price, entradas, carne }) {
   const [isActive, setIsActive] = useState(false);
   const [selected, setSelcted] = useState(false);
 

  // hacer que cambie si esta activo
  const toggleIsActive = () => {
    console.log(isActive);
    setIsActive(!isActive);
  };

  const classEnable = isActive ? "active" : "desactive";

  return (
    <>
      <div className="flex justify-between items-center mr-4">
        <button onClick={toggleIsActive} className={classEnable}>
          Maridage
        </button>
        <p className="text-xs font-bold opacity-80">{price}</p>
      </div>
      <div
        id="maridage-div"
        className={`transition-max-height duration-500 ease-in-out overflow-hidden w-full  ${
          isActive ? "max-h-80" : "max-h-0 "
        } flex flex-col gap-y-2 px-8 mt-9 mb-2  text-pretty`}
      >
        <div className="flex  gap-x-2 items-center">
          <p className="font-bold opacity-90">Entradas:</p>{" "}
          <a className=" recomendaciones opacity-80" href="#">
            {entradas}
          </a>
        </div>
        <div className="flex gap-x-2 items-center">
          <p className="font-bold opacity-90">Carne:</p>{" "}
          <a className=" recomendaciones opacity-80" href="#">
            {carne}
          </a>
        </div>
        <div>
          <p className="text-sm opacity-80">
            una pequeña descripcion acerca de las carectersisticas del vino
          </p>
        </div>
      </div>
    </>
  );
}
