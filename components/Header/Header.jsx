import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <div className="logo">
          <h1>foodCompany</h1>
        </div>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Cart</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
