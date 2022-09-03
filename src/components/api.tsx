export async function getPizzaList() {
  return await fetch("http://localhost:4000/products").then((data) =>
    data.json()
  );
}
