import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { getCollection } from "astro:content";
import WineCard from "./WineCard.jsx";

const winesEspecials = await getCollection("winesEspecials");
console.log(winesEspecials);

const FlickingComponent = () => (
  <Flicking
    className="  w-full py-4   "
    circular={false}
    circularFallback={"linear"}
    align="prev"
  >
    {winesEspecials.map((wine) => {
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
        speach,
      } = data;

      return (
        <div
          key={slug}
          className="  p-4 min-w-96 max-w-min  text-white    flex "
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
            speach={speach}
          />
        </div>
      );
    })}
  </Flicking>
);

export default FlickingComponent;
