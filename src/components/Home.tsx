import { useEffect, useState } from "react";
import Featured from "./Featured";
import PizzaList from "./PizzaList";
import { getPizzaList } from "../components/api";

export default function Home() {
  const [product, setProducts] = useState([
    {
      title: "",
      desc: "",
      img: "",
      price: "",
      extraOptions: "",
    },
  ]);

  useEffect(() => {
    getPizzaList()
      .then((items) => {
        console.log("====data+++", items);
        setProducts(items);
      })
      .catch((Error) => {
        console.error(Error);
      });
  }, []);

  return (
    <div>
      <Featured />
      <PizzaList PizzaList={product} />
      Home
    </div>
  );
}
