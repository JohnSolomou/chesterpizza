import { useEffect, useState } from "react";
import Featured from "./Featured";
import PizzaList from "./PizzaList";
import { getPizzaList } from "../components/api";
// import axios from "axios";

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
/*
export const getPizzaList = async () => {
  const res = await axios.get("http://localhost:4000/products");
  return {
    props: {
      pizzaList: res.data,
    },
  };
};
*/
