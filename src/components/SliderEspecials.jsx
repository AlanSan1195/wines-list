import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { getCollection } from "astro:content";
import WineCard from "./WineCard.jsx";

const winesEspecials = await getCollection("winesEspecials");

const FlickingComponent = () => (
  <Flicking
    className="  w-screen mb-6 "
    circularFallback={true}
    circular={false}
    duration={500}
    moveType="freeScroll"
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
      } = data;


      return (
        <div key={slug} className="  p-4 min-w-96 max-w-min  text-white   flex ">
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
