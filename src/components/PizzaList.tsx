import styles from "../css/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ PizzaList }: any) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
        {PizzaList.map((pizza: any) => (
          <PizzaCard key={pizza._id} title={pizza.title} desc={pizza.desc} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
