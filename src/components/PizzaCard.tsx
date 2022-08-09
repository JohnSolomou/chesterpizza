import styles from "../css/PizzaCard.module.css";
import pizza from "../img/pizza.png";
const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <img src={pizza} alt="" width="200" height="200" />
      <h1 className={styles.title}>Cheese Pizza</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default PizzaCard;
