
import "./Buttom.css";

export default function ButtomMaridage({ vino, price, isActive, select, toggleIsActive}) {

  const classEnable = isActive ? "active" : "desactive";
  

  return (
    <div className="flex justify-between items-center mr-4">

      <button onClick={toggleIsActive} className={classEnable} >
        Maridage
      </button>
      <p className="text-xs font-bold opacity-80">{price}</p>
    </div>
    
  );
}
