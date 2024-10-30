import { useState } from "react";
import "./Buttom.css";

export default function ButtomMaridage({ vino, price}) {
  const [enable, setEnable] = useState(false);
  const classEnable = enable ? "active" : "desactive";
  const handelClick = ( )=>{
    console.log(enable)
    setEnable(!enable)
  }


  return (
    <div className="flex justify-between items-center mr-4">

      <button onClick={handelClick} className={classEnable} >
        Maridage
      </button>
      <p className="text-xs font-bold">{price}</p>
    </div>
    
  );
}
