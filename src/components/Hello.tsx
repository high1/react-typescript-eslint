import React, { FunctionComponent } from "react";
import Logo from "assets/react-logo.svg";
import styles from "components/styles.css";

const Hello: FunctionComponent<{ title: string }> = ({ title }) => (
  <>
    <Logo className={styles.logo} />
    <div className={styles.text}>{title}</div>
  </>
);

export default Hello;
