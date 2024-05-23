import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I'm Conner</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 2 years of experience using React and
          NodeJS. I have also worked on projects that use selenium, cucumber and have a knowledge of Java! 
          Reach out if you'd like to learn more!
        </p>
        <a href="mailto:cccochrane1@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Profile image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};