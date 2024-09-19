import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.contactUs}>
          <div className={styles.greenText}>
            <h4> Do you need help?</h4>
          </div>
          <div className={styles.bigText}>
            Contact us.
            <br />
            Enjoy with us.
            <br />
            Let's Talk.
          </div>
        </div>
        <div className={styles.resource}>
          <h4>Resource</h4>
          <div>About us</div>
          <div>Design</div>
          <div>Tool</div>
        </div>
        <div className={styles.adress}>
          <h4>Where we are?</h4>
          Jevrejska XX, Banja Luka
        </div>
        <div className={styles.info}>
          <h4>Our contact info</h4>
          <div>Phone: +387 51 xxx xxx</div>
          <div>Mail: contact@asioso.com</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
