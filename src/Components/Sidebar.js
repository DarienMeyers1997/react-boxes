//Use state is a reat hook that is used to change and manage the data
import { useState } from "react";
import "./Sidebar.css";

function SideBar() {
  //Use state is used inside the functional component and BEFORE THE RETURN
  const colorArray = ["blue", "red", "green"];
  const [colors, setColors] = useState(colorArray);
  const [name, setName] = useState("Darien");

  return (
    <div className="sidebar">
      <h1>{name}</h1>
      <button onClick={() => setName("John")}> change name </button>
      {colors.map((color) => {
        return <p style={{ color: color, marginLeft: "10px" }}>{color}</p>;
      })}
    </div>
  );
}

export default SideBar;
