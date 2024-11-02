import ButtomMaridage from "./ButtomMaridage.jsx";
import { useState } from "react";
import { getCollection } from "astro:content";

export default function WineCard({
  title,
  description,
  price,
  variedad,
  graduation,
  image,
  entradas,
  carne,
  estado,
}) {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelcted] = useState(false);

  const botonActive = isActive ? "active" : "desactive";

  // hacer que cambie si esta activo

  return (
    <article
      className={`relative flex-col justify-center  items-center rounded-lg border-[1px] border-white/30 bg-black transition-transform duration-500  
     `}
    >
      <div className="  absolute -top-10 left-0 mr-24  ">
        <img
          src={`/${image}`}
          alt={title}
          className=" h-52 w-auto wine-card-div"
        />
      </div>
      <div className=" ml-[105px] flex flex-col gap-y-1  px-2 my-3 text-pretty       ">
        <h2 className=" font-bold text-xl opacity-80 mt-4 mb-2">{title}</h2>

        <p className=" opacity-80 text-sm mb-2">{description}</p>
        <p className=" font-semibold text-xs opacity-90">
          Composicion:{" "}
          <span className=" font-normal opacity-80">{variedad}</span>
        </p>
        <p className="font-semibold text-xs mb-4 opacity-80">
          Graduacion alcoholica:{" "}
          <span className=" font-normal opacity-80">{graduation}</span>
        </p>
      </div>
      <ButtomMaridage
        client:load
        price={price}
        vino={title}
        entradas={entradas}
        carne={carne}
      />
    </article>
  );
}
