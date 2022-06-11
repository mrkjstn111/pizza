import React, { Component } from "react";

import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-tertiary">
        <div className="container-fluid ">
          <a className="navbar-brand" href="/">
            <img src={"/"} alt="" width="40" height="40" />
            &nbsp;&nbsp;We Knead Pizza
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active" aria-current="page" to="/admin">
                  Admin
                </Link>
              </li>
              <li>
                <button
                  className="btn btn-outline-success"
                  data-bs-toggle="modal"
                  data-bs-target="#addItemModal"
                >
                  Add Item
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
