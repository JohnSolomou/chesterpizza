import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "../../css/Product.module.css";
import { useState } from "react";
const Product = () => {
    const [size, setSize] = useState(0);
    const pizza = {
        id: 1,
        img: "/img/pizza.png",
        name: "CAMPAGNOLA",
        price: [19.9, 23.9, 27.9],
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.",
    };
    return (_jsxs("div", Object.assign({ className: styles.container }, { children: [_jsx("div", Object.assign({ className: styles.left }, { children: _jsx("div", Object.assign({ className: styles.imgContainer }, { children: _jsx("img", { src: pizza.img, alt: "" }) })) })), _jsxs("div", Object.assign({ className: styles.right }, { children: [_jsx("h1", Object.assign({ className: styles.title }, { children: pizza.name })), _jsxs("span", Object.assign({ className: styles.price }, { children: ["$", pizza.price[size]] })), _jsx("p", Object.assign({ className: styles.desc }, { children: pizza.desc })), _jsx("h3", Object.assign({ className: styles.choose }, { children: "Choose the size" })), _jsxs("div", Object.assign({ className: styles.sizes }, { children: [_jsxs("div", Object.assign({ className: styles.size, onClick: () => setSize(0) }, { children: [_jsx("img", { src: "/img/size.png", alt: "" }), _jsx("span", Object.assign({ className: styles.number }, { children: "Small" }))] })), _jsxs("div", Object.assign({ className: styles.size, onClick: () => setSize(1) }, { children: [_jsx("img", { src: "/img/size.png", alt: "" }), _jsx("span", Object.assign({ className: styles.number }, { children: "Medium" }))] })), _jsxs("div", Object.assign({ className: styles.size, onClick: () => setSize(2) }, { children: [_jsx("img", { src: "/img/size.png", alt: "" }), _jsx("span", Object.assign({ className: styles.number }, { children: "Large" }))] }))] })), _jsx("h3", Object.assign({ className: styles.choose }, { children: "Choose additional ingredients" })), _jsxs("div", Object.assign({ className: styles.ingredients }, { children: [_jsxs("div", Object.assign({ className: styles.option }, { children: [_jsx("input", { type: "checkbox", id: "double", name: "double", className: styles.checkbox }), _jsx("label", Object.assign({ htmlFor: "double" }, { children: "Double Ingredients" }))] })), _jsxs("div", Object.assign({ className: styles.option }, { children: [_jsx("input", { className: styles.checkbox, type: "checkbox", id: "cheese", name: "cheese" }), _jsx("label", Object.assign({ htmlFor: "cheese" }, { children: "Extra Cheese" }))] })), _jsxs("div", Object.assign({ className: styles.option }, { children: [_jsx("input", { className: styles.checkbox, type: "checkbox", id: "spicy", name: "spicy" }), _jsx("label", Object.assign({ htmlFor: "spicy" }, { children: "Spicy Sauce" }))] })), _jsxs("div", Object.assign({ className: styles.option }, { children: [_jsx("input", { className: styles.checkbox, type: "checkbox", id: "garlic", name: "garlic" }), _jsx("label", Object.assign({ htmlFor: "garlic" }, { children: "Garlic Sauce" }))] }))] })), _jsxs("div", Object.assign({ className: styles.add }, { children: [_jsx("input", { type: "number", defaultValue: 1, className: styles.quantity }), _jsx("button", Object.assign({ className: styles.button }, { children: "Add to Cart" }))] }))] }))] })));
};
export default Product;
