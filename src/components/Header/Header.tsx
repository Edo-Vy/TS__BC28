//tsrfc
import React from "react";
import { NavLink } from "react-router-dom";
type Props = {
  title?: string;
};

export default function Header({}: Props) {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-sm navbar-light bg-dark text-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-light" to="/">
            Cyber
          </NavLink>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse text-light" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0 ">
              <li className="nav-item">
                <NavLink className="nav-link active text-light" to="/" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/register">
                  Register
                </NavLink>
              </li>
            </ul>
            <form className="d-flex my-2 my-lg-0">
              <NavLink className="nav-link text-light" to="/cart">
                <i className="fa fa-cart-plus"></i> (0)
              </NavLink>
              <input
                className="form-control me-sm-2 w-50"
                type="text"
                placeholder="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0 text-light" 
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
