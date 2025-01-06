import React, { useState } from "react";
import BingoGrid from "../components/BingoGrid";
import RegistrationForm from "../components/RegistrationForm";
import BuildGridPage from "./BuildGridPage";
import { saveUserData, getUserData } from "../services/StorageService";

const HomePage = () => {
  const [user, setUser] = useState(null); // Stores email and PIN
  const [grid, setGrid] = useState(null); // Stores Bingo grid
  const [isEditing, setIsEditing] = useState(false); // Tracks if the user is editing the grid

  // Handle user registration/login
  const handleRegister = (email, pin) => {
    const existingGrid = getUserData(email, pin);
    if (existingGrid) {
      setUser({ email, pin });
      setGrid(existingGrid);
    } else {
      setUser({ email, pin });
      setGrid(Array(25).fill("")); // Start with an empty grid
    }
  };

  // Handle saving the grid
  const handleSaveGrid = (newGrid) => {
    saveUserData(user.email, user.pin, newGrid);
    setGrid(newGrid);
    setIsEditing(false); // Return to viewing the grid after saving
  };

  // If the user is not logged in, show the registration form
  if (!user) {
    return <RegistrationForm onRegister={handleRegister} />;
  }

  // If the user is editing the grid, show the BuildGridPage
  if (isEditing) {
    return <BuildGridPage savedGrid={grid} onSaveGrid={handleSaveGrid} />;
  }

  // Default view: show the Bingo grid with an "Edit Grid" button
  return (
    <div>
      <BingoGrid grid={grid} />
      <button onClick={() => setIsEditing(true)} style={{ marginTop: "20px" }}>
        Edit Grid
      </button>
    </div>
  );
};

export default HomePage;
