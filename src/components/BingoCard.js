import React from "react";

const BingoCard = ({ text, isCenter }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
        textAlign: "center",
        backgroundColor: isCenter ? "#f0f0f0" : "white",
        fontWeight: isCenter ? "bold" : "normal",
      }}
    >
      {isCenter ? "Bingo" : text}
    </div>
  );
};

export default BingoCard;
