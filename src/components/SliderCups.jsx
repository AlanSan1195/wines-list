import Flicking from "@egjs/react-flicking";

import { getCollection } from "astro:content";
import WineCard from "./WineCard.jsx";

const winesCups = await getCollection("winesCups");
console.log(winesCups);

const FlickingComponent = () => (
  <Flicking
    className="  w-full py-4   "
    circular={false}
    circularFallback={"linear"}


    align="prev"
  
  >
    {winesCups.map((wine) => {
      const { slug, data } = wine;
      const {
        title,
        description,
        price,
        variedad,
        graduation,
        image,
        entradas,
        carne,
        speach
      } = data;

      return (
        <div key={slug} className="  p-4 min-w-96 max-w-min  text-white    flex ">
          <WineCard
            client:load
            index={slug}
            title={title}
            description={description}
            price={price}
            variedad={variedad}
            graduation={graduation}
            image={image}
            entradas={entradas}
            carne={carne}
            speach={speach}
          />
        </div>
      );
    })}
  </Flicking>
);

export default FlickingComponent;