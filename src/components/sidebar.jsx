import React from "react";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="/">
            <span className="icon">
              <i class="fa fa-home" aria-hidden="true"></i>
            </span>
            <span className="title">
              <h2>Shopkeeper</h2>
            </span>
          </a>
        </li>
        <li>
          <a href="/">
            <span className="icon">
              <i class="fa fa-tachometer" aria-hidden="true"></i>
            </span>
            <span className="title">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="/">
            <span className="icon">
              <i class="fa fa-product-hunt" aria-hidden="true"></i>
            </span>
            <span className="title">Add Product</span>
          </a>
        </li>
        <li>
          <a href="/">
            <span className="icon">
              <i class="fa fa-product-hunt" aria-hidden="true"></i>
            </span>
            <span className="title">Product List</span>
          </a>
        </li>
        <li>
          <a href="/">
            <span className="icon">
              <i class="fa fa-product-hunt" aria-hidden="true"></i>
            </span>
            <span className="title">Settings</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
