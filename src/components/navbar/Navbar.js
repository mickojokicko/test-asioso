import React from "react";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [background, setBackground] = useState(false);
  const [showVideo, setShowvVideo] = useState(false);

  const changeBackground = () => {
    window.scrollY >= 100 ? setBackground(true) : setBackground(false);
  };
  window.addEventListener("scroll", changeBackground);

  const handleVideo = () => {
    setShowvVideo((prevShow) => !prevShow);
  };

  return (
    <div className={styles.navbar}>
      <div className={background ? styles.navScrolling : styles.navMenu}>
        <nav className={styles.nav}>
          <div className={styles.logo}>Asioso</div>
          <div className={styles.menu}>
            <div>Home</div>
            <div>About</div>
            <div>Blog</div>
            <div>Contact</div>
            <div>Phone</div>
          </div>
        </nav>
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>
            We make digital <span className={styles.description}>World </span>
            and <br></br>buisiness simple
          </h1>
          <p className={styles.description}>
            We are a team that makes the world a better place to live. Doing
            business with us is a mutual satisfaction. Always!
          </p>
        </div>

        <div>
          <button className={styles.btn}>Explore more</button>
          <button className={styles.btn} onClick={handleVideo}>
            {showVideo ? "Hide video" : "Show video"}
          </button>
          <div className={styles.videoSection}>
            {showVideo && (
              <video width={450} controls autoPlay>
                <source src="/videoHeroSection.mp4" type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
