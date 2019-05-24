import React from "react";
import Logo from "assets/react-logo.svg";
// import styles from "components/styles.css";
import "components/styles.css";

interface Props {
  name: string;
  surname: string;
}

const Hello = (): React.ReactElement<{}> => (
  // <div className={styles.container}>
  //   <Logo className={styles.logo} />
  <div className="container">
    <Logo className="logo" />
    <div className="text">Welcome to React!</div>
  </div>
);

export default Hello;
