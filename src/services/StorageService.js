export const saveUserData = (email, pin, grid) => {
  const userData = {
    email,
    pin,
    grid: grid.map((text, index) => (index === 12 ? "Bingo" : text)), // Ensure middle square
  };
  localStorage.setItem(email, JSON.stringify(userData));
};

export const getUserData = (email, pin) => {
  const userData = JSON.parse(localStorage.getItem(email));
  return userData && userData.pin === pin ? userData.grid : null;
};
