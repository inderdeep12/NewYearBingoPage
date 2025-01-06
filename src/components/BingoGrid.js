import React from "react";
import BingoCard from "./BingoCard";

const BingoGrid = ({ grid }) => {
  return (
    <div className="bingo-grid">
      {grid.map((text, index) => (
        <BingoCard key={index} text={text} isCenter={index === 12} />
      ))}
    </div>
  );
};

export default BingoGrid;
