import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <div className="logo">
          <Link>
            <img
              src="https://th.bing.com/th/id/OIP.2C2UArYLNITbzRprie00JwHaDu?rs=1&pid=ImgDetMain"
              alt="app-logo"
            />
          </Link>
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
              <Link to="/contact">Contact</Link>
            </li>
            <li>Cart</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
