import React, { useState } from "react";
import userLetterImage from '../../assets/Images/UserLetter.png';
import squares from '../../assets/Images/Squares.png';
import styles from "./Header.module.css";

export const Header = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <a href="">About</a>
        <a href="">Store</a>
      </div>
      <div className={styles.headerRight}>
        <a href="">Gmail</a>
        <a className={styles.imageLink} href="">Images</a>
        <img className={styles.squares} src={squares}></img>
        <img className={styles.userImg} src={userLetterImage}></img>
      </div>
    </div>
  );
};
