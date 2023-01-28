import { NavLink } from "react-router-dom";
import styles from "../styles/Header.module.css";
import "../App.css";

const Header = () => {
  return (
    <header className={`bg-white py-5 ${styles.header}`}>
      <nav
        className={`flex items-center gap-5 container-conteudo ${styles.nav}`}
      >
        <NavLink to="/" end>
          DC Heroes
        </NavLink>
        <NavLink to="/marvel">Marvel Heroes</NavLink>
        <NavLink to="/contato">Contato</NavLink>
      </nav>
    </header>
  );
};

export default Header;
