import React, { useState } from "react";

const BuildGridPage = ({ savedGrid, onSaveGrid }) => {
  // Initialize a 25-square grid with empty strings
  const [grid, setGrid] = useState(savedGrid || Array(25).fill(""));

  const handleSquareChange = (index, value) => {
    const updatedGrid = [...grid];
    if (index !== 12) {
      updatedGrid[index] = value; // Prevent changing the middle square
    }
    setGrid(updatedGrid);
  };

  const handleSave = () => {
    onSaveGrid(grid);
  };

  return (
    <div>
      <div className="bingo-grid">
        {grid.map((text, index) => (
          <div className="bingo-card" key={index}>
            <input
              type="text"
              placeholder={index === 12 ? "Bingo" : `Square ${index + 1}`}
              value={text}
              onChange={(e) => handleSquareChange(index, e.target.value)}
              disabled={index === 12} // Disable input for the middle square
            />
          </div>
        ))}
      </div>
      <button onClick={handleSave}>Save Grid</button>
    </div>
  );
};

export default BuildGridPage;
