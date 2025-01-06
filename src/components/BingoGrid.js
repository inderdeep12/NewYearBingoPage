import React from "react";
import BingoCard from "./BingoCard";

const BingoGrid = ({ grid }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "5px",
      }}
    >
      {grid.map((text, index) => (
        <BingoCard key={index} text={text} isCenter={index === 12} />
      ))}
    </div>
  );
};

export default BingoGrid;
