import React from "react";
import { Link } from "react-router-dom";

export default function Registration() {
  return (
    <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth register-bg-1 theme-one">
          <div className="row w-100">
            <div className="col-lg-4 mx-auto">
              <h2 className="text-center mb-4">Register</h2>
              <div className="auto-form-wrapper">
                <form action="#">
                  <div className="form-group">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Username"/>
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="mdi mdi-check-circle-outline"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <input type="password" className="form-control" placeholder="Password"/>
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="mdi mdi-check-circle-outline"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <input type="password" className="form-control" placeholder="Confirm Password"/>
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="mdi mdi-check-circle-outline"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group d-flex justify-content-center">
                    <div className="form-check form-check-flat mt-0">
                      <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" /> I agree to the terms </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary submit-btn btn-block">Register</button>
                  </div>
                  <div className="text-block text-center my-3">
                    <span className="text-small font-weight-semibold">Already have and account ?</span>
                    <Link to="/login" className="text-black text-small">Login</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
