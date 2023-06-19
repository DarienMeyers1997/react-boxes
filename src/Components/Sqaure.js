import React from "react";

function Sqaure(props) {
  const { number, color } = props;
  console.log(props); // {number, color}
  // <div className="square" style={{ backgroundColor: color }}>
  // 		Square {number}{" "}
  // 	</div>
  return (
    <div className="sqaure" style={{ backgroundColor: color }}>
      Sqaure {number}{" "}
    </div>
  );
}

export default Sqaure;
