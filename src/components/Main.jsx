import React from "react";
import { RiDiscountPercentLine } from "react-icons/ri";
import Hoodi from "../images/photo1721131255.jpeg";
import h from "../images/photo1721131255 (2).jpeg";
import b from "../images/photo1721131255 (1).jpeg";

import { LuShoppingCart } from "react-icons/lu";

function Main() {
  return (
    <div>
      <div className="container px-4 text-center">
        <div className="row gx-5">
          <div className="col-sm ">
            <div className="p-3">
              <img
                style={{ height: "520px" }}
                className="mw-100 rounded-3 "
                src={Hoodi}
                alt=""
              />
              <div className=" d-flex justify-content-center">
                <a>
                  <img
                    className="rounded-5 mt-2 p-1 "
                    src={h}
                    alt=""
                    style={{ width: "104px", height: "104px" }}
                  />
                </a>
                <a>
                  <img
                    className="rounded-5 mt-2 p-1 "
                    src={b}
                    alt=""
                    style={{ width: "104px", height: "104px" }}
                  />
                </a>

                <a>
                  <img
                    className="rounded-5 mt-2 p-1 "
                    src={Hoodi}
                    alt=""
                    style={{ width: "104px", height: "104px" }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm mt-5">
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
                    <div className="d-flex justify-content-center">
                      <div className=" d-flex flex-row mb-3">
                        <div className="p-3">
                          <h4>$125.00</h4>
                        </div>
                        <div className="p-1">
                          <h5>
                            <span className="badge rounded-pill text-bg-dark mt-3">
                              50%
                            </span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="container px-2 text-center mt-3 ">
                      <div className="row gx-2 gy-2">
                        <div className="col-xxl">
                          <input className="py-1 px-3 " type="number" />
                        </div>
                        <div className="col-xxl">
                          <button className=" py-2 px-4 btn btn-dark text-center  ">
                            <LuShoppingCart color="white" size={18} /> Add to
                            card
                          </button>
                        </div>
                      </div>
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
