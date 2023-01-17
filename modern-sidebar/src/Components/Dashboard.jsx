import { AiOutlineSearch } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import Title from "../Components/Title.jsx";
import Profile from "../assets/mateus.svg";
import styles from "../styles/Dashboard.module.scss";
import sideBar from '../styles/Sidebar.module.scss'

const Dashboard = () => {
  return (
    <div className={`${sideBar.conteudo} animeLeft`}>
      <div className={styles.containerTopBar}>
        <div className={styles.containerTitulo}>
          <div className={styles.icon}>
            <RxDashboard size={30} />
          </div>
          <Title title="Dashboard" />
        </div>
        <div className={styles.search}>
          <input type="search" placeholder="Search..." />
          <div>
            <AiOutlineSearch size={20} className={styles.searchIcon} />
          </div>
        </div>
        <div className={styles.profile}>
          <h1>Hello, Mateus</h1>
          <img
            src={Profile}
            alt="Mateus"
            style={{ width: "45px", height: "45px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard