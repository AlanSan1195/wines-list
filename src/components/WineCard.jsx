import ButtomMaridage from "./ButtomMaridage.jsx";
import { useState } from "react";

export default function WineCard({
  title,
  description,
  price,
  variedad,
  graduation,
  image,
  entradas,
  carne,
  index,
  speach
}) {
  const [isActive, setIsActive] = useState(false);
  const toggleIsActive = () => {
    console.log(` ${index}`);
    setIsActive(!isActive);
  };

  return (
    <div className=" flex flex-col mt-8 z-10 ">
      <article
        className={`relative maxh justify-center   items-center rounded-lg border-[1px] border-white/30  bg-black/20 backdrop-blur-sm   transition-transform duration-500 text-white   
     `}
      >
        <div className="  absolute -top-10 left-0 mr-24  ">
          <img
            src={`/${image}`}
            alt={title}
            className=" h-52 w-auto wine-card-div bg-zin-400/30"
          />
        </div>
        <div className=" ml-[105px]  flex flex-col gap-y-1  px-2 my-3 text-pretty min-h-[230px]       ">
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
          isActive={isActive}
          toggleIsActive={toggleIsActive}
          price={price}
          vino={title}
          entradas={entradas}
          carne={carne}
          speach={speach}
        />
      </article>
    </div>
  );
}
