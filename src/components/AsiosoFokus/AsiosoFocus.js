import React from "react";
import styles from "./AsiosoFocus.module.css";

const AsiosoFocus = () => {
  const cardData = [
    {
      caption: <h2>Trust</h2>,
      description: <p>Trust is our motto</p>,
      btn: "Show more",
      desc: <div>We trust each other!</div>,
    },
    {
      caption: <h2>Safety</h2>,
      description: <p>Safety is our tradition</p>,
      btn: "Show more",
      desc: <div>Others feel safe with us!</div>,
    },
    {
      caption: <h2>Inovation</h2>,
      description: <p>Inovation is our strength</p>,
      btn: "Show more",
      desc: <div>We always offer something new!</div>,
    },
  ];

  return (
    <div className={styles.weDoDescription}>
      <div className={styles.heading}>
        <h2>Our Focus</h2>
      </div>
      <div className={styles.cards}>
        {cardData.map((card, index) => (
          <Card
            key={index}
            caption={card.caption}
            description={card.description}
            btn={card.btn}
            desc={card.desc}
          />
        ))}
      </div>
    </div>
  );
};

function Card({ caption, description, desc }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        {caption}
        {description}
      </div>
      <div className={styles.hoverElement}>{desc}</div>
    </div>
  );
}

export default AsiosoFocus;
