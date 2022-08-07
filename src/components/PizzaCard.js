import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "../styles/PizzaCard.module.css";
const PizzaCard = () => {
    return (_jsxs("div", Object.assign({ className: styles.container }, { children: [_jsx("img", { src: "/img/pizza.png", alt: "", width: "500", height: "500" }), _jsx("h1", Object.assign({ className: styles.title }, { children: "FIORI DI ZUCCA" })), _jsx("span", Object.assign({ className: styles.price }, { children: "$19.90" })), _jsx("p", Object.assign({ className: styles.desc }, { children: "Lorem ipsum dolor sit amet consectetur adipisicing elit." }))] })));
};
export default PizzaCard;
