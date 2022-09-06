import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "../css/PizzaCard.module.css";
import pizzapic from "../img/pizza.png";
import { Link } from "react-router-dom";
const PizzaCard = (pizza) => {
    return (_jsxs("div", Object.assign({ className: styles.container }, { children: [_jsx(Link, Object.assign({ to: "/product " }, { children: _jsx("img", { src: pizzapic, alt: "", width: "200", height: "200" }) })), _jsx("h1", Object.assign({ className: styles.title }, { children: pizza.title })), _jsxs("span", Object.assign({ className: styles.price }, { children: ["$", pizza.prices] })), _jsx("p", Object.assign({ className: styles.desc }, { children: pizza.desc }))] })));
};
export default PizzaCard;
