import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "../css/globals.css";
import Carousel from "react-bootstrap/Carousel";
import featured1 from "../img/burgerfriessoda.png";
import featured2 from "../img/special2.png";
import featured3 from "../img/special3.png";
function Featured() {
    return (_jsx("div", Object.assign({ className: "slidercontainer" }, { children: _jsx("div", Object.assign({ className: "container " }, { children: _jsxs(Carousel, { children: [_jsxs(Carousel.Item, Object.assign({ interval: 1000 }, { children: [_jsx("img", { className: " container d-block w-100", src: featured1, alt: "First slide" }), _jsx(Carousel.Caption, { className: "slide1title" })] })), _jsxs(Carousel.Item, Object.assign({ interval: 500 }, { children: [_jsx("img", { className: "d-block w-100 container", src: featured2, alt: "Second slide" }), _jsx(Carousel.Caption, { className: "slide2title" })] })), _jsxs(Carousel.Item, { children: [_jsx("img", { className: "d-block w-100 container", src: featured3, alt: "Third slide" }), _jsx(Carousel.Caption, { className: "slide2title" })] })] }) })) })));
}
export default Featured;
