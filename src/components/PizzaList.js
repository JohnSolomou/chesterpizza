import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";
const PizzaList = () => {
    return (_jsxs("div", Object.assign({ className: styles.container }, { children: [_jsx("h1", Object.assign({ className: styles.title }, { children: "THE BEST PIZZA IN TOWN" })), _jsx("p", Object.assign({ className: styles.desc }, { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor sit amet, consectetur adipiscing elit." })), _jsxs("div", Object.assign({ className: styles.wrapper }, { children: [_jsx(PizzaCard, {}), _jsx(PizzaCard, {}), _jsx(PizzaCard, {}), _jsx(PizzaCard, {}), _jsx(PizzaCard, {}), _jsx(PizzaCard, {}), _jsx(PizzaCard, {}), _jsx(PizzaCard, {})] }))] })));
};
export default PizzaList;
