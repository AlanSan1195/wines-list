import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { getCollection } from "astro:content";
import WineCard from "./WineCard.jsx";

// Or, if you have to support IE9

const wines = await getCollection("wines");

const FlickingComponent = () => (
  <Flicking
    className="  w-screen mb-28 "
    circularFallback={true}
    circular={false}
    duration={100}
    moveType="freeScroll"
    align="prev"
  >
    {wines.map((wine) => {
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
      } = data;

      return (
        <div
          id="slider"
          class=" p-4 min-w-96 max-w-min   mt-14 flex   "
        >
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
          />
        </div>
      );
    })}
  </Flicking>
);

export default FlickingComponent;
