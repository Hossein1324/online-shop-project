import React from "react";
import { LuShoppingCart } from "react-icons/lu";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand fs-3" href="#">
            Brand
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-2 ">
              <a className="nav-link ps-5 active " aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link ps-5" href="#">
                Men
              </a>
              <a className="nav-link ps-5" href="#">
                Women
              </a>
              <a className="nav-link ps-5 " aria-disabled="true">
                About
              </a>
            </div>
          </div>
          <a className="d-flex" href="#">
            <LuShoppingCart color="white" size={35} />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
