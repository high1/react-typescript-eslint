import React, { ReactElement } from "react";
import Logo from "assets/react-logo.svg";
import styles from "components/styles.css";

const Hello = ({ title }: { title: string }): ReactElement<{}> => (
  <>
    <Logo className={styles.logo} />
    <div className={styles.text}>{title}</div>
  </>
);

export default Hello;
