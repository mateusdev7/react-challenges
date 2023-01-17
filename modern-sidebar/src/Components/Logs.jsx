import React from "react";
import sideBar from "../styles/Sidebar.module.scss";
import styles from "../styles/Logs.module.scss";

const Logs = () => {
  return (
    <div className={`${sideBar.conteudo} animeLeft`}>
      <div className={styles.containerTopBar}>
        <div className={styles.containerTitulo} />
      </div>
    </div>
  );
};

export default Logs;
