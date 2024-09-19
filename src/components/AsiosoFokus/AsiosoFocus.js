import React from "react";
import styles from "./AsiosoFocus.module.css";

const AsiosoFocus = () => {
  return (
    <div className={styles.weDoDescription}>
      <div className={styles.heading}>
        <h2>Our Focus</h2>
      </div>
      <div className={styles.cards}>
        <Card
          caption={<h2>Trust</h2>}
          description={<p>Trust is our motto</p>}
          btn={"Show more"}
          desc={<div>We trust each other!</div>}
        />
        <Card
          caption={<h2>Safety</h2>}
          description={<p>Safety is our tradition</p>}
          btn={"Show more"}
          desc={<div>Others feel safe with us!</div>}
        />
        <Card
          className={styles.cardContent}
          caption={<h2>Inovation</h2>}
          description={<p>Inovation is our strength</p>}
          btn={"Show more"}
          desc={<div>We always offer something new!</div>}
        />
      </div>
    </div>
  );
};

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        {props.caption}
        {props.description}
      </div>
      <div className={styles.hoverElement}>{props.desc}</div>
    </div>
  );
}

export default AsiosoFocus;
