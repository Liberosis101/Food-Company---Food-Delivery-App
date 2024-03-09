import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <div className="logo">
          <h1>foodCompany</h1>
        </div>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
            <li>
              <Link>Cart</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
