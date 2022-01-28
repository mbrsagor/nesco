import React from 'react';

export default function Header() {
  return (
        <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
          <a className="navbar-brand brand-logo" href="index.html">
            <img src="assets/images/logo.svg" alt="logo" /> </a>
          <a className="navbar-brand brand-logo-mini" href="index.html">
            <img src="assets/images/logo-mini.svg" alt="logo" /> </a>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-center">
          <ul className="navbar-nav">
            <li className="nav-item font-weight-semibold d-none d-lg-block">Sagor development center</li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a className="nav-link count-indicator" id="messageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                <i className="mdi mdi-bell-outline"></i>
                <span className="count">7</span>
              </a>
              <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="messageDropdown">
                <a className="dropdown-item py-3">
                  <p className="mb-0 font-weight-medium float-left">You have 7 unread mails </p>
                  <span className="badge badge-pill badge-primary float-right">View all</span>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img src="assets/images/faces/face10.jpg" alt="image" className="img-sm profile-pic"/> </div>
                  <div className="preview-item-content flex-grow py-2">
                    <p className="preview-subject ellipsis font-weight-medium text-dark">Marian Garner </p>
                    <p className="font-weight-light small-text"> The meeting is cancelled </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img src="assets/images/faces/face12.jpg" alt="image" className="img-sm profile-pic"/> </div>
                  <div className="preview-item-content flex-grow py-2">
                    <p className="preview-subject ellipsis font-weight-medium text-dark">David Grey </p>
                    <p className="font-weight-light small-text"> The meeting is cancelled </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img src="assets/images/faces/face1.jpg" alt="image" className="img-sm profile-pic"/> </div>
                  <div className="preview-item-content flex-grow py-2">
                    <p className="preview-subject ellipsis font-weight-medium text-dark">Travis Jenkins </p>
                    <p className="font-weight-light small-text"> The meeting is cancelled </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link count-indicator" id="notificationDropdown" href="#" data-toggle="dropdown">
                <i className="mdi mdi-email-outline"></i>
                <span className="count bg-success">3</span>
              </a>
              <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="notificationDropdown">
                <a className="dropdown-item py-3 border-bottom">
                  <p className="mb-0 font-weight-medium float-left">You have 4 new notifications </p>
                  <span className="badge badge-pill badge-primary float-right">View all</span>
                </a>
                <a className="dropdown-item preview-item py-3">
                  <div className="preview-thumbnail">
                    <i className="mdi mdi-alert m-auto text-primary"></i>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject font-weight-normal text-dark mb-1">Application Error</h6>
                    <p className="font-weight-light small-text mb-0"> Just now </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item py-3">
                  <div className="preview-thumbnail">
                    <i className="mdi mdi-settings m-auto text-primary"></i>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject font-weight-normal text-dark mb-1">Settings</h6>
                    <p className="font-weight-light small-text mb-0"> Private message </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item py-3">
                  <div className="preview-thumbnail">
                    <i className="mdi mdi-airballoon m-auto text-primary"></i>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject font-weight-normal text-dark mb-1">New user registration</h6>
                    <p className="font-weight-light small-text mb-0"> 2 days ago </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item dropdown d-none d-xl-inline-block user-dropdown">
              <a className="nav-link dropdown-toggle" id="UserDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                <img className="img-xs rounded-circle" src="assets/images/faces/face8.jpg" alt="Profile"/> </a>
              <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                <div className="dropdown-header text-center">
                  <img className="img-md rounded-circle" src="assets/images/faces/face8.jpg" alt="Profile image"/>
                  <p className="mb-1 mt-3 font-weight-semibold">Allen Moreno</p>
                  <p className="font-weight-light text-muted mb-0">allenmoreno@gmail.com</p>
                </div>
                <a className="dropdown-item">My Profile <span className="badge badge-pill badge-danger">1</span><i className="dropdown-item-icon ti-dashboard"></i></a>
                <a className="dropdown-item">Messages<i className="dropdown-item-icon ti-comment-alt"></i></a>
                <a className="dropdown-item">Activity<i className="dropdown-item-icon ti-location-arrow"></i></a>
                <a className="dropdown-item">FAQ<i className="dropdown-item-icon ti-help-alt"></i></a>
                <a className="dropdown-item">Sign Out<i className="dropdown-item-icon ti-power-off"></i></a>
              </div>
            </li>
          </ul>
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
  );
}
