import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), children, _jsx(Footer, {})] }));
};
export default Layout;
