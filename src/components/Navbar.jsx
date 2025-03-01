import React from "react";
import { TfiShoppingCart } from "react-icons/tfi";
import { TbBrandDatabricks } from "react-icons/tb";

function Navbar({ prodouctNumber, showCared }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-dark navbar-dark w-100">
        <div className="container-fluid">
          <a className="navbar-brand " href="#">
            <TbBrandDatabricks size={50} />
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
              <a className="nav-link ps-5" href="#">
                About
              </a>
            </div>
          </div>
          <a className="d-flex" href="#">
            <button
              onClick={showCared}
              type="button"
              className="btn btn-dark position-relative ms-1"
            >
              <TfiShoppingCart size={32} />
              <span className="position-absolute  top-0 end-100 badge rounded-pill text-dark bg-light ">
                {prodouctNumber}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
