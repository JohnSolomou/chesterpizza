export async function getPizzaList() {
  return await fetch(`http://localhost:4000/product`).then((data) =>
    data.json()
  );
}
