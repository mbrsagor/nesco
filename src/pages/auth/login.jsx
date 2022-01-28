import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="container-fluid page-body-wrapper full-page-wrapper">
      <div className="content-wrapper d-flex align-items-center auth auth-bg-1 theme-one">
        <div className="row w-100">
          <div className="col-lg-4 mx-auto">
            <div className="auto-form-wrapper">
              <form action="#">
                <div className="form-group">
                  <label className="label">Username</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="mdi mdi-check-circle-outline"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="label">Password</label>
                  <div className="input-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="*********"
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="mdi mdi-check-circle-outline"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <button className="btn btn-primary submit-btn btn-block">
                    Login
                  </button>
                </div>
                <div className="form-group d-flex justify-content-between">
                  <div className="form-check form-check-flat mt-0">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" />
                      Keep me signed in
                    </label>
                  </div>
                  <Link to="/" className="text-small forgot-password text-black">
                    Forgot Password
                  </Link>
                </div>
                <div className="text-block text-center my-3">
                  <span className="text-small font-weight-semibold">
                    Not a member ?
                  </span>
                  <Link to="/registration" className="text-black text-small">
                    Create new account
                  </Link>
                </div>
              </form>
            </div>
            <p className="footer-text text-center">
              copyright © 2020 Shopkeeper. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
