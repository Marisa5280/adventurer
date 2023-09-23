import "./Header.css";
import { NavLink } from "react-router-dom";
import DTwenty from "../../Images/D20.png";

function Header() {
  return (
    <header>
      <NavLink to="/" style={{ color: `inherit`, textDecoration: `inherit` }}>
        <h1>Adventurer Alchemist</h1>
      </NavLink>
      <NavLink
        to="/favorites"
        style={{ color: `inherit`, textDecoration: `inherit` }}
      >
        <img src={DTwenty} alt="20 sided dice" />
        <h3>My Characters</h3>
      </NavLink>
    </header>
  );
}

export default Header;
