export const getCurrentDate = () => {
  const date = new Date();
  let month = String(date.getMonth() + 1).padStart(2, '0');
  let day = String(date.getDate()).padStart(2, '0');

  return `${day}-${month}-1984`;
}
