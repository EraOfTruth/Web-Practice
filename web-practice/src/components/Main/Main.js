import React from "react";
import GoogleLogo from "../../assets/Images/GoogleLogo.png";
import { Form } from "react-bootstrap";
import styles from "./Main.module.css";

export const Main = (props) => {
  return (
    <div className={styles.main}>
        <img className={styles.logo} src={GoogleLogo}></img>
        {/* <Form className={styles.searchBar}>
          <Form.Control type="email" />
        </Form> */}
        <input className={styles.searchBar} type="text" value=""></input>
        <div className={styles.googleButtons}>
            <button>Google Search</button>
            <button>I'm Feeling Lucky</button>
        </div>
        <p className={styles.translationOption}>Google Offered in: <a href=''>Francais</a></p>
    </div>
  );
};
