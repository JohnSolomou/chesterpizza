import styles from "../css/PizzaCard.module.css";
import pizzapic from "../img/pizza.png";
import { Link } from "react-router-dom";
const PizzaCard = (pizza: any) => {
  // const link = "/product " + pizza._id;
  return (
    <div className={styles.container}>
      <Link to={"/product "}>
        <img src={pizzapic} alt="" width="200" height="200" />
      </Link>
      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>${pizza.prices}</span>
      <p className={styles.desc}>{pizza.desc}</p>
      {/* <h2>{pizza._id}</h2> */}
    </div>
  );
};

export default PizzaCard;
