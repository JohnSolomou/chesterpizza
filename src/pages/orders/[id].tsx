import styles from "../../css/Order.module.css";
import paid from "../../img/paid.png";
import checked from "../../img/checked.png";
import preparing from "../../img/bake.png";
import bike from "../../img/bike.png";
import delivered from "../../img/delivered.png";

const Order = () => {
  const status = 0;

  const statusClass = (index: any) => {
    if (index - status < 1) return styles.completed;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.incomplete;
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.trTitle}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr className={styles.tr}>
              <td>
                <span className={styles.id}>129837819237</span>
              </td>
              <td>
                <span className={styles.name}>John Doe</span>
              </td>
              <td>
                <span className={styles.address}>Elton st. 212-33 LA</span>
              </td>
              <td>
                <span className={styles.total}>$79.80</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <img src={paid} width={30} height={30} alt="payment" />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <img
                className={styles.checkedIcon}
                src={checked}
                width={20}
                height={20}
                alt="checkmark"
              />
            </div>
          </div>
          <div className={statusClass(0)}>
            <img src={preparing} width={30} height={30} alt="" />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <img
                className={styles.checkedIcon}
                src={checked}
                width={20}
                height={20}
                alt="checkmark"
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <img src={bike} width={30} height={30} alt="delivery" />
            <span>On the way</span>
            <div className={styles.checkedIcon}>
              <img
                className={styles.checkedIcon}
                src={checked}
                width={20}
                height={20}
                alt="checkmark"
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <img src={delivered} width={30} height={30} alt="" />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <img
                className={styles.checkedIcon}
                src={checked}
                width={20}
                height={20}
                alt="checkmark"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
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
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
