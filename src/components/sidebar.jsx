import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item nav-profile">
          <Link to="/" className="nav-link">
            <div className="profile-image">
              <img
                className="img-xs rounded-circle"
                src="assets/images/faces/face8.jpg"
                alt="profile"
              />
              <div className="dot-indicator bg-success"></div>
            </div>
            <div className="text-wrapper">
              <p className="profile-name">Bozlur Rosid Sagor</p>
              <p className="designation">Superuser</p>
            </div>
          </Link>
        </li>
        <li className="nav-item nav-category">Main Menu</li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            <i className="menu-icon typcn typcn-document-text"></i>
            <span className="menu-title">Dashboard</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blank">
            <i className="menu-icon typcn typcn-shopping-bag"></i>
            <span className="menu-title">Create Shop</span>
          </Link>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="collapse"
            href="#ui-basic"
            aria-expanded="false"
            aria-controls="ui-basic"
          >
            <i className="menu-icon typcn typcn-coffee"></i>
            <span className="menu-title">Product Management</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="ui-basic">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <Link className="nav-link" to="/blank">
                 Add New Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blank">
                Add new product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blank">
                Product List
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="pages/charts/chartjs.html">
            <i className="menu-icon typcn typcn-th-large-outline"></i>
            <span className="menu-title">Charts</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="pages/tables/basic-table.html">
            <i className="menu-icon typcn typcn-bell"></i>
            <span className="menu-title">Tables</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="pages/icons/font-awesome.html">
            <i className="menu-icon typcn typcn-user-outline"></i>
            <span className="menu-title">Icons</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="collapse"
            href="#auth"
            aria-expanded="false"
            aria-controls="auth"
          >
            <i className="menu-icon typcn typcn-document-add"></i>
            <span className="menu-title">User Pages</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="auth">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <a className="nav-link" href="pages/samples/blank-page.html">
                  Blank Page
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="pages/samples/login.html">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="pages/samples/register.html">
                  Register
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="pages/samples/error-404.html">
                  404
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="pages/samples/error-500.html">
                  500
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}
