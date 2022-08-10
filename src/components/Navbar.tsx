import styles from "../css/Navbar.module.css";
import tele from "../img/telephone.png";
import cart from "../img/cart.png";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <img src={tele} alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>215 727 0441</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.listItem}>
            <Link to="/product">Products</Link>
          </li>
          <li className={styles.listItem}>
            <Link to="/menu">Menu</Link>
          </li>
          <img src={logo} alt="" width="100px" height="100px" />
          <li className={styles.listItem}>
            <Link to="/events">Events</Link>
          </li>
          <li className={styles.listItem}>
            {" "}
            <Link to="/blog">Blog</Link>
          </li>
          <li className={styles.listItem}>
            {" "}
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Link to="/cart">
            {" "}
            <img src={cart} alt="" width="30px" height="30px" />
          </Link>
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
