import logo from "../../../assets/images/final-logo.png";

import { PhoneOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function NavBar() {
  
  return (
    <div>
      <nav className="navbar py-0 navbar-expand-lg ">
        <div
          style={{ backgroundColor: "#18273E" }}
          className="container-fluid p-3 px-lg-5 d-flex flex-col justify-content-center"
        >
          <div className="row w-100">
            <div className="col-lg-3 col-xl-2  col-md-4 col-6">
              <img className="img-fluid" src={logo} alt="" />
            </div>

            <div className="d-flex align-items-center align-content-center justify-content-end gap-lg-3 gap-0 col ">
              <div className="callus-div text-light d-none d-lg-flex ">
                <p className="mb-0">
                  <PhoneOutlined /> +91 8110011188
                </p>
              </div>
              <div className="consultation-div">
                <button className="consultation-button btn btn-lg  ">
                  <span
                    style={{
                      backgroundColor: "#BF976C",
                      color: "#18273E",
                      borderRadius: "5px",
                    }}
                    className="consultation-text px-3 py-2 d-lg-flex d-none "
                  >
                    Consultation
                  </span>
                  <FontAwesomeIcon
                    style={{ fontSize: "24px" }}
                    className="text-light consultation-icon d-flex d-lg-none "
                    icon={faEnvelope}
                  />
                </button>
              </div>
              <div className="">
                <button
                  style={{ borderRadius: "5px" }}
                  className="btn offcan-button btn-sm d-lg-none d-flex "
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasNavbar"
                  aria-controls="offcanvasNavbar"
                  aria-label="Toggle navigation"
                >
                  <FontAwesomeIcon
                    style={{ fontSize: "24px" }}
                    className="text-light offcan-icon"
                    icon={faBars}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className="menu-nav navbar py-0  navbar-expand-lg ">
        <div
          style={{ backgroundColor: "#18273E" }}
          className="container-fluid px-lg-5 "
        >
          <div
            style={{ backgroundColor: "#18273E" }}
            className="offcanvas offcanvas-end custom-offcanvas w-75"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-body">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <Link
                    style={{ color: "#BF976C" }}
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    style={{ color: "#BF976C" }}
                    className="nav-link active "
                    aria-current="page"
                    to={""}
                  >
                    About us
                  </Link>
                </li>
                <div className="dropdown">
                  <button
                    style={{ marginTop: "0.1rem", color: "#BF976C" }}
                    className="btn dropdown-toggle "
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Practices Area
                  </button>
                  <ul
                    style={{ backgroundColor: "#18273E" }}
                    className="dropdown-menu practice-list"
                  >
                    <li>
                      <Link
                        style={{ color: "#BF976C" }}
                        className="dropdown-item"
                        to={""}
                      >
                        Civil & Commercial
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ color: "#BF976C" }}
                        className="dropdown-item"
                        to={""}
                      >
                        Corporate Lawyers
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ color: "#BF976C" }}
                        className="dropdown-item"
                        to={""}
                      >
                        Family & Divorce
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ color: "#BF976C" }}
                        className="dropdown-item"
                        to={""}
                      >
                        Criminal Lawyer
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ color: "#BF976C" }}
                        className="dropdown-item"
                        to={""}
                      >
                        Mortgage Claim
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ color: "#BF976C" }}
                        className="dropdown-item"
                        to={""}
                      >
                        Insurance Claim
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ color: "#BF976C" }}
                        className="dropdown-item"
                        to={""}
                      >
                        Labor & Employment
                      </Link>
                    </li>
                  </ul>
                </div>
                <li className="nav-item">
                  <Link
                    style={{ color: "#BF976C" }}
                    className="nav-link active "
                    aria-current="page"
                    to={""}
                  >
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    style={{ color: "#BF976C" }}
                    className="nav-link active "
                    aria-current="page"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
