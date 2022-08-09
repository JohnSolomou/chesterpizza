import styles from "../css/Product.module.css";
import pizzapic from "../img/pizza.png";
import { useState } from "react";
import logo from "../img/size.png";
import "../css/globals.css";
const Product = () => {
  const [size, setSize] = useState(0);
  const pizza = {
    id: 1,
    img: pizzapic,
    name: "CAMPAGNOLA",
    price: [19.9, 23.9, 27.9],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.",
  };

  return (
    <div className={styles.productContainer}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <img src={pizza.img} alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <img src={logo} alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <img src={logo} alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <img src={logo} alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>

        <h3 className={styles.choose}>
          Choose additional ingredients Extra $1
        </h3>
        <p>
          note: these are extra toppings if you choose for example a meatlovers
          pizza the regular meat is already added this section is for extra
          toppings.
        </p>
        <div className={`styles.ingredients grid-container`}>
          <div className={`global.grid-item`}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="cheese"
              name="cheese"
            />
            <label htmlFor="cheese">Extra Cheese</label>
          </div>
          <div className={`global.grid-item`}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="sausage"
              name="sausage"
            />
            <label htmlFor="sausage">sausage (pork)</label>
          </div>
          <div className={`global.grid-item`}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="green-peppers"
              name="green-peppers"
            />
            <label htmlFor="green-peppers">Green Peppers</label>
          </div>
          <div className={`global.grid-item`}>
            <input
              type="checkbox"
              id="meatball"
              name="meatball"
              className={styles.checkbox}
            />
            <label htmlFor="meatball">MeatBall</label>
          </div>
          <div className={`global.grid-item`}>
            <input
              type="checkbox"
              id="ground-beef"
              name="ground-beef"
              className={styles.checkbox}
            />
            <label htmlFor="ground-beef">Ground Beef</label>
          </div>
          <div className={`global.grid-item`}>
            <input
              type="checkbox"
              id="pepperoni"
              name="pepperoni"
              className={styles.checkbox}
            />
            <label htmlFor="pepperoni">Peperoni(Pork)</label>
          </div>
          <div className={`global.grid-item`}>
            <input
              type="checkbox"
              id="beef-pepperoni"
              name="beef-pepperoni"
              className={styles.checkbox}
            />
            <label htmlFor="beef-pepperoni">Beef Pepperoni</label>
          </div>
          <div className={`global.grid-item`}>
            <input
              type="checkbox"
              id="mushroom"
              name="mushroom"
              className={styles.checkbox}
            />
            <label htmlFor="mushroom">Mushroom</label>
          </div>
          <div className={`global.grid-item`}>
            <input
              type="checkbox"
              id="broccoli"
              name="broccoli"
              className={styles.checkbox}
            />
            <label htmlFor="broccoli">Broccoli</label>
          </div>
          <div className={`global.grid-item`}>
            <input
              type="checkbox"
              id="bacon"
              name="bacon"
              className={styles.checkbox}
            />
            <label htmlFor="bacon">Bacon</label>
          </div>
          <div className={`global.grid-item`}>
            <input
              type="checkbox"
              id="bbq"
              name="bbq"
              className={styles.checkbox}
            />
            <label htmlFor="bbq">BBQ Sauce</label>
          </div>
          <div className={`global.grid-item`}>
            <input
              type="checkbox"
              id="steak"
              name="steak"
              className={styles.checkbox}
            />
            <label htmlFor="steak">Steak</label>
          </div>
          <div className={`global.grid-item`}>
            <input
              type="checkbox"
              id="chicken-steak"
              name="chicken-steak"
              className={styles.checkbox}
            />
            <label htmlFor="chicken-steak">Chicken Steak</label>
          </div>
          <div className={`global.grid-item`}>
            <input
              type="checkbox"
              id="grilled-chicken"
              name="grilled-chicken"
              className={styles.checkbox}
            />
            <label htmlFor="grilled-chicken">Grilled Chicken</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
