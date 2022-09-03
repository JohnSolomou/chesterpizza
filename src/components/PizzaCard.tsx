import styles from "../css/PizzaCard.module.css";
import pizza from "../img/pizza.png";
const PizzaCard = (pizzas: any) => {
  return (
    <div className={styles.container}>
      <img src={pizza} alt="" width="200" height="200" />
      <h1 className={styles.title}>{pizzas.title}</h1>
      <span className={styles.price}>${pizzas.prices}</span>
      <p className={styles.desc}>{pizzas.desc}</p>
    </div>
  );
};

export default PizzaCard;
