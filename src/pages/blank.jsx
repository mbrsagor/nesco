import React from "react";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import Header from '../components/header'

export default function Blank() {
  return (
    <>
     <Header />
      <div className="container-fluid page-body-wrapper">
        <Sidebar />
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row">
              <div className="col-md-12 grid-margin">
                <h2>This is a blank page</h2>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
