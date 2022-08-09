import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "../css/Footer.module.css";
import "../css/globals.css";
import bg from "../img/bg.jpg";
const Footer = () => {
    return (_jsxs("div", Object.assign({ className: styles.container }, { children: [_jsx("div", Object.assign({ className: styles.item }, { children: _jsx("img", { src: bg, alt: "", width: "700px", height: "100%" }) })), _jsxs("div", Object.assign({ className: styles.item }, { children: [_jsxs("div", Object.assign({ className: styles.card }, { children: [_jsx("h1", Object.assign({ className: styles.title }, { children: "FIND OUR RESTAURANT" })), _jsxs("p", Object.assign({ className: styles.text }, { children: ["pickup or delivery", _jsx("br", {}), _jsx("br", {}), " 5504 Chester Ave", _jsx("br", {}), " Philadelphia, 19143", _jsx("br", {}), " (215) 727-0441"] }))] })), _jsxs("div", Object.assign({ className: styles.card }, { children: [_jsx("h1", Object.assign({ className: styles.title }, { children: "WORKING HOURS" })), _jsxs("p", Object.assign({ className: styles.text }, { children: ["MONDAY - SATURDAY", _jsx("br", {}), " 11:00 \u2013 9:00"] })), _jsx("h1", Object.assign({ className: styles.title }, { children: "Holiday Hours" })), _jsxs("p", Object.assign({ className: styles.text }, { children: ["Closed on these Holidays", _jsx("br", {}), " Easter", _jsx("br", {}), "Labor Day", _jsx("br", {}), "Christmas"] }))] }))] }))] })));
};
export default Footer;
