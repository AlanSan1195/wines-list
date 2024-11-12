import ButtomMaridage from "./ButtomMaridage.jsx";
import Grapes from "./icons/Grapes.jsx";
import Porcetage from "./icons/porcetage.jsx";

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
  speach,
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
        <div className=" ml-[95px]  flex flex-col gap-y-2  px-2 my-3 text-pretty min-h-[230px]       ">
          <h2 className=" font-bold text-xl opacity-80 mt-4 mb-2">{title}</h2>

          <p className=" opacity-80 text-sm mb-2 ">{description}</p>
          <div className=" flex flex-col gap-y-3 ">
            <div className=" flex felx-row items-center  ">
              <Grapes />
              <span className=" font-xs opacity-60  text-sm ">{variedad}</span>
            </div>
            <div className="flex felx-row items-center ml-1 ">
              <Porcetage />
              <span className=" font-xs opacity-60  text-sm ">
                {graduation}
              </span>
            </div>
          </div>

          {/* <p className="font-semibold text-xs mb-4 opacity-80 ">
            Graduación alcoholica:{" "}
            <span className=" font-normal opacity-60 ">{graduation}</span>
          </p> */}
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
