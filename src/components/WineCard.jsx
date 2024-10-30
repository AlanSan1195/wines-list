import ButtomMaridage from "./ButtomMaridage.jsx";

export default function WineCard({
  title,
  description,
  price,
  variedad,
  graduation,
  image,
}) {
  return (
    <article class=" relative flex-col justify-center items-center border-[1px] border-gray-300/10 rounded-lg  shadow-md bg-black/40     ">
      <div class="  absolute -top-12    shadow-xl ">
        <img src={`/${image}`} alt={title} class=" max-w-28 " />
      </div>
      <div class=" ml-32 flex flex-col gap-y-1  px-2 my-4 text-pretty      ">
        <h2 class=" font-bold text-xl mb-2">{title}</h2>
        <p class=" opacity-80 text-xs mb-2">{description}</p>
        <p class=" font-semibold text-xs">
          Composicion: <span class=" font-normal opacity-80">{variedad}</span>
        </p>
        <p class="font-semibold text-xs mb-4">
          Graduacion alcoholica:{" "}
          <span class=" font-normal opacity-80">{graduation}</span>
        </p>

        <ButtomMaridage client:load price={price} vino={title} />
      </div>
      <div class=" flex flex-col gap-y-2 px-8 my-10 text-pretty ">
        <div class=" flex gap-x-2 items-center">
          <p class=" font-bold">Entradas:</p> <a href="#">Bocaditos</a>
        </div>
        <div class=" flex gap-x-2 items-center ">
          <p class=" font-bold">Carne:</p> <a href="#">Bife de lomo</a>
        </div>
      </div>
    </article>
  );
}
