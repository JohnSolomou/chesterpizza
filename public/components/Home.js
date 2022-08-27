import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("div", { children: [_jsx(Featured, {}), _jsx(PizzaList, { PizzaList: product }), "Home"] }));
}
