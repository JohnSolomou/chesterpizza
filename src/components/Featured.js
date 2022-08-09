import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "../css/globals.css";
import "../css/Featured.module.css";
import Carousel from "react-bootstrap/Carousel";
import featured5 from "../img/featured5.jpg";
import featured2 from "../img/featured2.jpg";
import featured3 from "../img/featured3.jpg";
function Featured() {
    return (_jsx("div", Object.assign({ className: "slidercontainer" }, { children: _jsx("div", Object.assign({ className: "container " }, { children: _jsxs(Carousel, { children: [_jsxs(Carousel.Item, Object.assign({ interval: 1000 }, { children: [_jsx("img", { className: "d-block w-100 container", src: featured5, alt: "First slide" }), _jsx(Carousel.Caption, Object.assign({ className: "slide1title" }, { children: _jsx("h3", { children: "Good to the last slice." }) }))] })), _jsxs(Carousel.Item, Object.assign({ interval: 500 }, { children: [_jsx("img", { className: "d-block w-100 container", src: featured2, alt: "Second slide" }), _jsxs(Carousel.Caption, Object.assign({ className: "slide2title" }, { children: [_jsx("h3", { children: "Second slide label" }), _jsx("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." })] }))] })), _jsxs(Carousel.Item, { children: [_jsx("img", { className: "d-block w-100 container", src: featured3, alt: "Third slide" }), _jsxs(Carousel.Caption, Object.assign({ className: "slide2title" }, { children: [_jsx("h3", { children: "Third slide label" }), _jsx("p", { children: "Praesent commodo cursus magna, vel scelerisque nisl consectetur." })] }))] })] }) })) })));
}
export default Featured;
