import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
        <Link className="navbar-brand brand-logo" to="/">
          <img src="assets/images/logo.svg" alt="logo" />
        </Link>
        <Link className="navbar-brand brand-logo-mini" to="/">
          <img src="assets/images/logo-mini.svg" alt="logo" />
        </Link>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-center">
        <ul className="navbar-nav">
          <li className="nav-item font-weight-semibold d-none d-lg-block">
            Sagor development center
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown d-none d-xl-inline-block user-dropdown">
            <img
              className="img-xs rounded-circle"
              src="assets/images/faces/face8.jpg"
              alt="Profile"
            />
          </li>
          <li className="nav-item dropdown"> Mbr Sagor </li>
          <li className="nav-item dropdown"> 
              <Link to="/">Logout</Link>
           </li>
        </ul>
      </div>
    </nav>
  );
}
