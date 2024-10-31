import ButtomMaridage from "./ButtomMaridage.jsx";
import { useState } from "react";

export default function WineCard({
  title,
  description,
  price,
  variedad,
  graduation,
  image,
  index
  
}) {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelcted] = useState(false);

  // hacer que cambie si esta activo
  const toggleIsActive = () => {
    console.log(isActive);
    setIsActive(!isActive);

  };
   const select = () => {
    setSelcted(!selected);
   
  };



  return (

    <article
      onClick={select}
      
      className={`relative flex-col justify-center items-center rounded-lg border-[1px] border-white/30 bg-black transition-transform duration-500    ${
        selected
          ? "transform translate-y-0"
          : "translate-y-10" && !isActive ? " transform translate-y-40" : " translate-y-0"
      }  `}
    >
      <div class="  absolute -top-10 left-4 ">
        <img src={`/${image}`} alt={title} class=" max-w-24 wine-card-div" />
      </div>
      <div class=" ml-[105px] flex flex-col gap-y-1  px-2 my-3 text-pretty       ">
        <h2 class=" font-bold text-xl mt-4 mb-2">{title}</h2>

        <p class=" opacity-80 text-sm mb-2">{description}</p>
        <p class=" font-semibold text-xs">
          Composicion: <span class=" font-normal opacity-80">{variedad}</span>
        </p>
        <p class="font-semibold text-xs mb-4">
          Graduacion alcoholica:{" "}
          <span class=" font-normal opacity-80">{graduation}</span>
        </p>

        <ButtomMaridage
          client:load
          price={price}
          vino={title}
          isActive={isActive}
          toggleIsActive={toggleIsActive}
        />
      </div>
      <div
        id="maridage-div"
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
          isActive ? "max-h-80" : "max-h-0"
        } flex flex-col gap-y-2 px-8 mt-9 mb-6 text-pretty`}
      >
        <div className="flex gap-x-2 items-center">
          <p className="font-bold">Entradas:</p> <a href="#">Bocaditos</a>
        </div>
        <div className="flex gap-x-2 items-center">
          <p className="font-bold">Carne:</p> <a href="#">Bife de lomo</a>
        </div>
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero quod
            autem quos repellat commodi id voluptatem placeat, possimus itaque.
          </p>
        </div>
      </div>
    </article>

  );
}
