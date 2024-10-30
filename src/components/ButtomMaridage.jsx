import { useState } from "react";
import "./Buttom.css";

export default function ButtomMaridage() {
  const [enable, setEnable] = useState(false);
  const classEnable = enable ? "active" : "desactive";

  const hanClick = () => {
    setEnable(!enable);
  };
  console.log("clik")

  return (
    <button onClick={()=>{
    }} className={classEnable}>
      Maridage
    </button>
  );
}
