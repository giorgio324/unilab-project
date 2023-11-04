export const saveToLocalStorage = (data) => {
  localStorage.setItem("user", JSON.stringify(data));
};
export const getItemFromLocalStorage = () => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : null;
  return user;
};
