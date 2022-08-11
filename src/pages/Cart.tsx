import React from "react";
import styles from "../css/Cart.module.css";
import pizza from "../img/pizza.png";
export default function Cart() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.trTitle}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>
              <div>
                <img
                  src={pizza}
                  style={{ width: "60px", height: "60px" }}
                  alt=""
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>Coralzo</span>
            </td>
            <td>
              <span className={styles.extras}>BBQ, beef pepperoni</span>
            </td>
            <td>
              <span className={styles.price}>$19.95</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>$39.90</span>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <img
                  src={pizza}
                  style={{ width: "60px", height: "60px" }}
                  alt=""
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>Coralzo</span>
            </td>
            <td>
              <span className={styles.extras}>BBQ, beef pepperoni</span>
            </td>
            <td>
              <span className={styles.price}>$19.95</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>$39.90</span>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <img
                  src={pizza}
                  style={{ width: "60px", height: "60px" }}
                  alt=""
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>Coralzo</span>
            </td>
            <td>
              <span className={styles.extras}>BBQ, beef pepperoni</span>
            </td>
            <td>
              <span className={styles.price}>$19.95</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>$39.90</span>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.cartWrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$79.60
          </div>
          <button className={styles.button}>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
}
