import React from "react";
import styles from "../styles/Sidebar.module.scss";
import Logo from "../assets/Logo.png";
import {
  AiOutlineSetting,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import {
  IoAnalyticsOutline,
  IoExitOutline,
  IoMoonOutline,
} from "react-icons/io5";

import { BsSun } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = React.useState(true);
  const [mode, setMode] = React.useState("light");

  const changeMode = () => {
    if (mode == "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  React.useEffect(() => {
    document.body.className = mode;
  }, [mode]);
  return (
    <div
      className={`animeLeft ${styles.containerSideMenu} ${
        openMenu ? `${styles.openMenu}` : `${styles.closeMenu}`
      } ${mode == "dark" ? `${styles.darkMode}` : `${styles.lightMode}`}`}
    >
      <div className={styles.topoContainer}>
        <div
          onClick={() => setOpenMenu(!openMenu)}
          aria-hidden="true"
          className={styles.iconCloseAndOpen}
        >
          <AiOutlineArrowLeft />
        </div>
        <img src={Logo} alt="Logo" />
        <div className={styles.topoContent}>
          <h1>Mateus Company</h1>
          <p>© Copyright</p>
        </div>
      </div>
      <div className={styles.containerNav}>
        <ul className={styles.nav}>
          <NavLink to="/" end>
            <div className={styles.icon}>
              <RxDashboard size={28} />
            </div>
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="/logs">
            <div className={styles.icon}>
              <IoAnalyticsOutline size={28} />
            </div>
            <span>Logs</span>
          </NavLink>
          <NavLink to="/settings">
            <div className={styles.icon}>
              <AiOutlineSetting size={28} />
            </div>
            <span>Settings</span>
          </NavLink>
          <NavLink to="/logout">
            <div className={styles.icon}>
              <IoExitOutline
                size={28}
                style={{ transform: "rotate(180deg)" }}
              />
            </div>
            <span>Logout</span>
          </NavLink>
        </ul>
        <ul className={styles.containerMode}>
          <button onClick={changeMode}>
            <li>
              {mode == "dark" ? (
                <div className={styles.soon}>
                  <BsSun size={28} />
                </div>
              ) : (
                <div className={styles.moon}>
                  <IoMoonOutline size={28} />
                </div>
              )}
              {mode == "dark" ? (
                <span>Ligth Mode</span>
              ) : (
                <span>Dark Mode</span>
              )}
              <div className={styles.toggle} />
            </li>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
