export async function getPizzaList() {
  return await fetch("http://localhost:4000/products").then((data) =>
    data.json()
  );
}

// import axios from "axios";
// export const getPizzaList = async () => {
//   const res = await axios.get("http://localhost:4000/products");
//   return {
//     props: {
//       pizzaList: res.data,
//     },
//   };
// };
