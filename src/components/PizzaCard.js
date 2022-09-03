import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "../css/PizzaCard.module.css";
import pizza from "../img/pizza.png";
const PizzaCard = (pizzas) => {
    return (_jsxs("div", Object.assign({ className: styles.container }, { children: [_jsx("img", { src: pizza, alt: "", width: "200", height: "200" }), _jsx("h1", Object.assign({ className: styles.title }, { children: pizzas.title })), _jsxs("span", Object.assign({ className: styles.price }, { children: ["$", pizzas.prices] })), _jsx("p", Object.assign({ className: styles.desc }, { children: pizzas.desc }))] })));
};
export default PizzaCard;
