import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { GoPlus } from "react-icons/go";
import { TbMinus } from "react-icons/tb";
import Hoodi from "../images/photo1721131255.jpeg";
import h from "../images/photo1721131255 (2).jpeg";
import { FaTrashAlt } from "react-icons/fa";

import { LuShoppingCart } from "react-icons/lu";

function Main({
  number,
  Plus,
  Minus,
  card,
  addCard,
  cardNumber,
  RemoveProducts,
}) {
  const [img, setImg] = useState(false);
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);

  return (
    <div>
      <div className="container-fluid px-5  text-center">
        {card && (
          <div className="row">
            <div data-aos="fade-down" className="col">
              <div className="alert  mb-2 bg-dark text-white p-1 " role="alert">
                <h4 className="alert-heading">Your Cart</h4>

                <hr />
                {cardNumber === 0 ? (
                  <h1> bro your cart is empty!</h1>
                ) : (
                  <div className="d-flex justify-content-center">
                    <div className="d-flex flex-row mb-3">
                      <div className="p-2">
                        {" "}
                        <img
                          className="rounded-pill mt-2 p-1 border border-light "
                          src={h}
                          alt=""
                          style={{ width: "104px", height: "100px" }}
                        />
                      </div>
                      <div className="p-2">
                        <div className="d-flex flex-column mb-3 mt-2">
                          <div className="p-2 fs-6 fw-bolder">
                            Black Hoodie for cold weather.
                          </div>
                          <div className="p-2 fs-6 fw-medium">
                            $125.00 x {cardNumber} = {"$" + 125.0 * cardNumber}{" "}
                            <FaTrashAlt
                              onClick={RemoveProducts}
                              size={20}
                              color="white"
                              className="ms-4"
                              role="button"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        <div className="row gx-5">
          <div data-aos="fade-right" className="col-sm ">
            <div className="p-3">
              {img ? (
                <img
                  style={{ height: "520px" }}
                  className="mw-100 rounded-3 "
                  src={Hoodi}
                  alt=""
                />
              ) : (
                <img
                  style={{ height: "520px" }}
                  className="mw-100 rounded-3 "
                  src={h}
                  alt=""
                />
              )}
              <div className=" d-flex justify-content-center">
                <a onClick={() => setImg(false)}>
                  <img
                    className="rounded-pill mt-2 p-1 "
                    src={h}
                    alt=""
                    style={{ width: "104px", height: "104px" }}
                  />
                </a>

                <a onClick={() => setImg(true)}>
                  <img
                    className="rounded-pill mt-2 p-1 "
                    src={Hoodi}
                    alt=""
                    style={{ width: "104px", height: "104px" }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className="col-sm mt-5 ">
            <div className="p-3">
              <div className="container text-center me-5">
                <div className="row">
                  <div className="col">
                    <h1 className="fs-2 fw-bold text-capitalize mt-2">
                      Black hoodie for fall season for mens
                    </h1>
                  </div>
                  <div className="row mt-3">
                    <div className="col">
                      <p className="fs-5 fw-normal text-capitalize">
                        cool black hoodie for people from 18 to 30, durable for
                        more than 10 years, warm and light, suitable for fun,
                        events, sports, dating, ....
                      </p>
                    </div>
                    <div className="d-flex justify-content-start mt-3">
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
                          <div className="input-group mb-3">
                            <button
                              className="btn btn-outline-dark"
                              type="button"
                              onClick={Plus}
                            >
                              <GoPlus />
                            </button>
                            <button
                              className="btn btn-outline-dark"
                              type="button"
                              onClick={Minus}
                            >
                              <TbMinus />
                            </button>
                            <input
                              pla
                              onChange={addCard}
                              value={number}
                              type="tel"
                              className="form-control"
                              placeholder="Choose the number of product purchases by clicking on the icons"
                              aria-label="Example text with two button addons"
                            />
                          </div>
                        </div>
                        <div className="col-xxl">
                          <button
                            onClick={addCard}
                            className=" py-2 px-4 btn btn-dark text-center   "
                          >
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
