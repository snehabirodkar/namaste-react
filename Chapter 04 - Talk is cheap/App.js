import React from "react";
import ReactDOM from "react-dom/client";

/**
 * - Header
 *   - Logo
 *   - Nav items
 * - Body
 *   - Search
 *   - Restraunt Container
 *     - Restraunt card
 *      - Img
 *      - Name of Restrau, Star rating, cuisines, delivery time, etc
 * - Footer
 *   - Copyright
 *   - Links
 *   - Address
 *   - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src=""
          alt=""
        />
      </div>
      <div className="nav-list">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
