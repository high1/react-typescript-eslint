import React from "react";
import Logo from "assets/react-logo.svg";
// import styles from "components/styles.css";
import "components/styles.css";

const Hello = ({ title }: { title: string }): React.ReactElement<{}> => (
  // <div className={styles.container}>
  //   <Logo className={styles.logo} />
  <>
    <Logo className="logo" />
    <div className="text">{title}</div>
  </>
);

export default Hello;
