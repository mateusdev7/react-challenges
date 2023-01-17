import { AiOutlineSearch } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { FiUserCheck, FiUserMinus, FiUserPlus } from "react-icons/fi";
import Title from "../Components/Title.jsx";
import Profile from "../assets/mateus.svg";
import styles from "../styles/Dashboard.module.scss";
import sideBar from "../styles/Sidebar.module.scss";
import { VictoryPie } from "victory";

const Dashboard = () => {
  const data = [
    {
      x: "Actives",
      y: 35,
    },
    {
      x: "Disabled",
      y: 40,
    },
    {
      x: "Pending",
      y: 55,
    },
  ];

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
          <img
            src={Profile}
            alt="Mateus"
            style={{ width: "45px", height: "45px" }}
          />
          <h1>MATEUS</h1>
        </div>
      </div>
      <div className={styles.containerDash}>
        <ul className={styles.item}>
          <h1>Users</h1>
          <li>
            <div className={styles.icon}>
              <FiUserCheck size={25} />
            </div>
            <div>
              <h3>Actives</h3>
              <span>450</span>
            </div>
          </li>
          <li>
            <div className={styles.icon}>
              <FiUserMinus size={25} />
            </div>
            <div>
              <h3>Disabled</h3>
              <span>10</span>
            </div>
          </li>
          <li>
            <div className={styles.icon}>
              <FiUserPlus size={25} />
            </div>
            <div>
              <h3>Pending</h3>
              <span>50</span>
            </div>
          </li>
        </ul>
        <div className={styles.item}>
          <h1>Users</h1>
          <VictoryPie
            data={data}
            innerRadius={50}
            padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
            origin={{ y: 160 }}
            style={{
              data: {
                fillOpacity: 1,
                stroke: "var(--text-color)",
                strokeWidth: 2,
                fill: 'var(--toggle-color)'
              },
              labels: {
                fontSize: 16,
                fill: "var(--text-color)",
                fontWeight: 'bold',
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
