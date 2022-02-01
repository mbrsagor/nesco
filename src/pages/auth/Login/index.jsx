import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginUser from './helper/login-service'

export default function Login() {
  const [values, setValues] = useState({
    phone: "",
    password: "",
  });
  const navigate = useNavigate()

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const response = LoginUser(values)
    if (response && response.success) {
      navigate('/dashboard')
    }
  };

  return (
    <div className="container-fluid page-body-wrapper full-page-wrapper">
      <div className="content-wrapper d-flex align-items-center auth auth-bg-1 theme-one">
        <div className="row w-100">
          <div className="col-lg-4 mx-auto">
            <div className="auto-form-wrapper">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="label">Phone Number</label>
                  <div className="input-group">
                    <input
                      value={values.phone}
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Phone number"
                      onChange={handleChange}
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
                      value={values.password}
                      type="password"
                      className="form-control"
                      placeholder="*********"
                      name="password"
                      onChange={handleChange}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="mdi mdi-check-circle-outline"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary submit-btn btn-block"
                  >
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
                  <Link
                    to="/"
                    className="text-small forgot-password text-black"
                  >
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
