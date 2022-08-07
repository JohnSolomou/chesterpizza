import Layout from "./components/Layout";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Events from "./components/Events";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Products from "./pages/product/[id]";
import "../src/css/Featured.module.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/events" element={<Events />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
