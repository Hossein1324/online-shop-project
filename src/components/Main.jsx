import React from "react";
import { RiDiscountPercentLine } from "react-icons/ri";
import dress from "../images/photo1721071586 (1).jpeg";
import { LuShoppingCart } from "react-icons/lu";

function Main() {
  return (
    <div>
      <div className="container px-4 text-center">
        <div className="row gx-5">
          <div className="col ">
            <div className="p-3">
              <img
                style={{ height: "520px" }}
                className="mw-100 rounded-3 "
                src={dress}
                alt=""
              />
            </div>
          </div>
          <div className="col mt-5">
            <div className="p-3">
              <div className="container text-center">
                <div className="row">
                  <div className="col">
                    <h1>women drees for paty... and with nice colot</h1>
                  </div>
                  <div className="row mt-3">
                    <div className="col">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eligendi id quod natus minus consequuntur tenetur nemo
                        iusto nesciunt assumenda magni!
                      </p>
                    </div>
                    <div className="row row-cols-3 mt-3">
                      <div className="col-3">
                        <h4>$125.00</h4>
                      </div>
                      <div className="col-1 mt-1">
                        <h5>
                          <span class="badge rounded-pill text-bg-dark">
                            50%
                          </span>
                        </h5>
                      </div>
                      <div className="col-8"></div>
                    </div>
                    <div className="row row-cols-3 mt-5">
                      <div className="col-5 me-5">
                        <input
                          style={{ width: "200px", height: "40px" }}
                          type="number"
                        />
                      </div>
                      <div className="col-5">
                        <button
                          style={{ width: "300px", height: "40px" }}
                          className="btn btn-dark text-center "
                        >
                          <LuShoppingCart color="white" size={18} /> Add to card
                        </button>
                      </div>
                      <div className="col-2"></div>
                    </div>
                  </div>
                  .
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
