import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header_left">
        <img src="/images/logo.svg" alt="Logo" className="header_icon" />
        <img src="/images/search.svg" alt="Search" className="header_icon" />
      </div>
      <div className="header_right">
        <img src="/images/menu.svg" alt="Menu" className="header_icon" />
        <img src="/images/user.svg" alt="User" className="header_icon" />
        <Link to="/cart">
          <img src="/images/cart.svg" alt="Cart" className="header_icon" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
