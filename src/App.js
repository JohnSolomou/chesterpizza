import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Layout from "./components/Layout";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Events from "./components/Events";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Product from "./pages/product/[id]";
import Order from "./pages/orders/[id]";
import Cart from "./pages/Cart";
import "../src/css/Featured.module.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
    return (_jsx("div", { children: _jsx(Router, { children: _jsx(Layout, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/menu", element: _jsx(Menu, {}) }), _jsx(Route, { path: "/events", element: _jsx(Events, {}) }), _jsx(Route, { path: "/blog", element: _jsx(Blog, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) }), _jsx(Route, { path: "/product", element: _jsx(Product, {}) }), _jsx(Route, { path: "/cart", element: _jsx(Cart, {}) }), _jsx(Route, { path: "/order", element: _jsx(Order, {}) })] }) }) }) }));
}
export default App;
