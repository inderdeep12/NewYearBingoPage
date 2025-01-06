import React from "react";

const BingoCard = ({ text, isCenter }) => {
  return <div className="bingo-card">{isCenter ? "Bingo" : text}</div>;
};

export default BingoCard;
