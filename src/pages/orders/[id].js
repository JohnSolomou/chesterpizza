import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "../../css/Order.module.css";
import paid from "../../img/paid.png";
import checked from "../../img/checked.png";
import preparing from "../../img/bake.png";
import bike from "../../img/bike.png";
import delivered from "../../img/delivered.png";
const Order = () => {
    const status = 0;
    const statusClass = (index) => {
        if (index - status < 1)
            return styles.completed;
        if (index - status === 1)
            return styles.inProgress;
        if (index - status > 1)
            return styles.incomplete;
    };
    return (_jsxs("div", Object.assign({ className: styles.container }, { children: [_jsxs("div", Object.assign({ className: styles.left }, { children: [_jsx("div", Object.assign({ className: styles.row }, { children: _jsxs("table", Object.assign({ className: styles.table }, { children: [_jsxs("tr", Object.assign({ className: styles.trTitle }, { children: [_jsx("th", { children: "Order ID" }), _jsx("th", { children: "Customer" }), _jsx("th", { children: "Address" }), _jsx("th", { children: "Total" })] })), _jsxs("tr", Object.assign({ className: styles.tr }, { children: [_jsx("td", { children: _jsx("span", Object.assign({ className: styles.id }, { children: "129837819237" })) }), _jsx("td", { children: _jsx("span", Object.assign({ className: styles.name }, { children: "John Doe" })) }), _jsx("td", { children: _jsx("span", Object.assign({ className: styles.address }, { children: "Elton st. 212-33 LA" })) }), _jsx("td", { children: _jsx("span", Object.assign({ className: styles.total }, { children: "$79.80" })) })] }))] })) })), _jsxs("div", Object.assign({ className: styles.row }, { children: [_jsxs("div", Object.assign({ className: statusClass(0) }, { children: [_jsx("img", { src: paid, width: 30, height: 30, alt: "payment" }), _jsx("span", { children: "Payment" }), _jsx("div", Object.assign({ className: styles.checkedIcon }, { children: _jsx("img", { className: styles.checkedIcon, src: checked, width: 20, height: 20, alt: "checkmark" }) }))] })), _jsxs("div", Object.assign({ className: statusClass(0) }, { children: [_jsx("img", { src: preparing, width: 30, height: 30, alt: "" }), _jsx("span", { children: "Preparing" }), _jsx("div", Object.assign({ className: styles.checkedIcon }, { children: _jsx("img", { className: styles.checkedIcon, src: checked, width: 20, height: 20, alt: "checkmark" }) }))] })), _jsxs("div", Object.assign({ className: statusClass(1) }, { children: [_jsx("img", { src: bike, width: 30, height: 30, alt: "delivery" }), _jsx("span", { children: "On the way" }), _jsx("div", Object.assign({ className: styles.checkedIcon }, { children: _jsx("img", { className: styles.checkedIcon, src: checked, width: 20, height: 20, alt: "checkmark" }) }))] })), _jsxs("div", Object.assign({ className: statusClass(3) }, { children: [_jsx("img", { src: delivered, width: 30, height: 30, alt: "" }), _jsx("span", { children: "Delivered" }), _jsx("div", Object.assign({ className: styles.checkedIcon }, { children: _jsx("img", { className: styles.checkedIcon, src: checked, width: 20, height: 20, alt: "checkmark" }) }))] }))] }))] })), _jsx("div", Object.assign({ className: styles.right }, { children: _jsxs("div", Object.assign({ className: styles.wrapper }, { children: [_jsx("h2", Object.assign({ className: styles.title }, { children: "CART TOTAL" })), _jsxs("div", Object.assign({ className: styles.totalText }, { children: [_jsx("b", Object.assign({ className: styles.totalTextTitle }, { children: "Subtotal:" })), "$79.60"] })), _jsxs("div", Object.assign({ className: styles.totalText }, { children: [_jsx("b", Object.assign({ className: styles.totalTextTitle }, { children: "Discount:" })), "$0.00"] })), _jsxs("div", Object.assign({ className: styles.totalText }, { children: [_jsx("b", Object.assign({ className: styles.totalTextTitle }, { children: "Total:" })), "$79.60"] })), _jsx("button", Object.assign({ disabled: true, className: styles.button }, { children: "PAID" }))] })) }))] })));
};
export default Order;
