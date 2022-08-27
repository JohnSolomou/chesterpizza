import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "../css/PizzaCard.module.css";
import pizza from "../img/pizza.png";
const PizzaCard = (props) => {
    return (_jsxs("div", Object.assign({ className: styles.container }, { children: [_jsx("img", { src: pizza, alt: "", width: "200", height: "200" }), _jsx("h1", Object.assign({ className: styles.title }, { children: props.title })), _jsx("span", Object.assign({ className: styles.price }, { children: "$19.90" })), _jsx("p", Object.assign({ className: styles.desc }, { children: props.desc }))] })));
};
export default PizzaCard;
