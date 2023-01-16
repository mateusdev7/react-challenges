import React from "react";
import styles from "./Sidebar.module.scss";
import dashboardStyles from "./styles/Dashboard.module.scss";
import Logo from "./assets/Logo.png";
import Profile from "./assets/mateus.svg";
import {
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineArrowLeft,
  AiOutlineSearch,
} from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import {
  IoAnalyticsOutline,
  IoExitOutline,
  IoMoonOutline,
} from "react-icons/io5";

import { BsSun } from "react-icons/bs";
import Title from "./Components/Title.jsx";

function App() {
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
    <div>
      <div
        className={`${styles.containerSideMenu} ${
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
            <li>
              <div className={styles.icon}>
                <AiOutlineHome size={28} />
              </div>
              <span>Home</span>
            </li>
            <li>
              <div className={styles.icon}>
                <RxDashboard size={28} />
              </div>
              <span>Dashboard</span>
            </li>
            <li>
              <div className={styles.icon}>
                <IoAnalyticsOutline size={28} />
              </div>
              <span>Logs</span>
            </li>
            <li>
              <div className={styles.icon}>
                <AiOutlineSetting size={28} />
              </div>
              <span>Settings</span>
            </li>
            <li>
              <div className={styles.icon}>
                <IoExitOutline
                  size={28}
                  style={{ transform: "rotate(180deg)" }}
                />
              </div>
              <span>Logout</span>
            </li>
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
      <div className={styles.home}>
        <div className={dashboardStyles.containerTopBar}>
          <div className={dashboardStyles.containerTitulo}>
            <div className={dashboardStyles.icon}>
              <RxDashboard size={30} />
            </div>
            <Title title="Dashboard" />
          </div>
          <div className={dashboardStyles.search}>
            <input type="search" placeholder="Search..." />
            <div>
              <AiOutlineSearch
                size={20}
                className={dashboardStyles.searchIcon}
              />
            </div>
          </div>
          <div className={dashboardStyles.profile}>
            <h1>Hello, Mateus</h1>
            <img
              src={Profile}
              alt="Mateus"
              style={{ width: "45px", height: "45px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
