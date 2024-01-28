export const getData = async () => {
  const response = await fetch("https://quotable.io/random");
  const data = await response.json();
  // console.log(data);
  return data
};
