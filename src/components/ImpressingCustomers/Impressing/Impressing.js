import React from "react";
import styles from "./Impressing.module.css";

const Impressing = () => {
  return (
    <div className={styles.impressing}>
      <div className={styles.imageField}></div>
      <div className={styles.textField}>
        <div className={styles.greenText}>Technologies</div>
        <div className={styles.heading}>Impressing our customers</div>
        <p className={styles.impressingDescription}>
          With our work, efficiency and reliability, we constantly impress our
          customers.
        </p>
        <>
          <div className={styles.column}>
            <div>💻</div>
            <div className={styles.name}>Primar think</div>
          </div>
          <div className={styles.column}>
            <div>Primar think is wonderfull</div>
          </div>
        </>
        <div className={styles.technology}>
          <div className={styles.column}>
            <div>📱</div>
            <div className={styles.name}>Primary opinion</div>
          </div>
          <div className={styles.column}>
            <div>Primary opinion is better</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressing;
