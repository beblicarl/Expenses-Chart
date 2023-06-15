/* eslint-disable react/prop-types */
import { useState } from "react";
export default function Bar({ item, maxValue }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = (event) => {
    console.log(event.target);
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const style = {
    display: isHovered ? "block" : "none",
  };
  return (
    <div
      onMouseOver={(event) => handleMouseOver(event)}
      onMouseOut={handleMouseOut}
      className="bar-chart-bar"
      key={item.day}
    >
      <div className="bar-chart-label">{item.day}</div>
      <div
        className={`bar-chart-progress${
          item.amount === maxValue ? " max-value" : ""
        }`}
        style={{ height: `${(item.amount / maxValue) * 100}%` }}
      ></div>
      <div style={style} className="bar-chart-amount">{`$${item.amount}`}</div>
    </div>
  );
}
