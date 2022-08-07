import styles from "../css/Footer.module.css";
import "../css/globals.css";
import bg from "../img/bg.jpg";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <img src={bg} alt="" width="700px" height="100%" />
      </div>
      <div className={styles.item}>
        {/* <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID.THE Chester PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div> */}
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANT</h1>
          <p className={styles.text}>
            5504 Chester Ave
            <br /> Philadelphia, 19143
            <br /> (215) 727-0441
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY - SATURDAY
            <br /> 11:00 – 9:00
          </p>
          <h1 className={styles.title}>Holiday Hours</h1>
          <p className={styles.text}>
            Closed on these Holidays
            <br /> Easter Christmas Labor Day
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
