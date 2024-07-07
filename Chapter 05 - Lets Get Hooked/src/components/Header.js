import { LOGO_URL } from "../utils/constants";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt=""
        />
      </div>
      <div className="nav-list">
        <ul>
          <li className="nav-items">Home</li>
          <li className="nav-items">About Us</li>
          <li className="nav-items">Contact Us</li>
          <li className="nav-items">Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
