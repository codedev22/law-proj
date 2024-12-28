import logo from "../../../assets/images/final-logo.png";
import '../../style/navbarstyle/Navbar.css'
import { PhoneOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="">
      <nav className="navbar py-0 navbar-expand-lg ">
        <div
          style={{ backgroundColor: "#18273E" }}
          className="container-fluid p-3 px-lg-5 d-flex flex-col justify-content-center"
        >
          <div className="row container-lg container-fluid w-100 ">
            <Link
              to="/"
              className="col-lg-4 col-xl-3 col-md-4 col-6 mt-lg-3 mt-2"
            >
              <img className="img-fluid" src={logo} alt="Logo" />
            </Link>

            <div className="d-flex align-items-center align-content-center justify-content-end gap-lg-3 gap-0 col ">
              <div className="callus-div text-light d-none d-lg-flex ">
                <p className="mb-0">
                  <PhoneOutlined /> +91 8110011188
                </p>
              </div>
              <div className="consultation-div">
                <Link to="/contact" className="consultation-button  btn btn-lg  ">
                  <span
                    style={{
                      backgroundColor: "#BF976C",
                      color: "white",
                      borderRadius: "5px",
                    }}
                    className="consultation-text px-3 py-2 d-lg-flex d-none "
                  >
                    Consultation
                  </span>
                  <FontAwesomeIcon
                    style={{ fontSize: "24px" }}
                    className="text-light consultation-icon d-flex d-lg-none"
                    icon={faEnvelope}
                  />
                </Link>
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
      <nav className="menu-nav  navbar py-0  navbar-expand-lg ">
      
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
            <div className="offcanvas-body  container-lg px-lg-4 container-fluid">
            <div  className="d-flex d-lg-none justify-content-end py-0  ">
           <button type="button" className="btn btn-sm py-0 nav-close  text-reset " data-bs-dismiss="offcanvas" aria-label="Close"><FontAwesomeIcon className="text-light nav-close-icon fs-2" icon={faXmark}/></button>

           </div> 
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
                    to="/aboutus"
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
                        to="/corporate-legal-service"
                      >
                        Corporate Legal Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ color: "#BF976C" }}
                        className="dropdown-item"
                        to="/intellectual-property-rights"
                      >
                        Intellectual Property Rights
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ color: "#BF976C" }}
                        className="dropdown-item"
                        to="/criminal-law"
                      >
                        Criminal Law Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ color: "#BF976C" }}
                        className="dropdown-item"
                        to="/family-matrimonial"
                      >
                        Family and Matrimonial Law
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ color: "#BF976C" }}
                        className="dropdown-item"
                        to="/civil-commercial"
                      >
                        Civil and Commercial Law
                      </Link>
                    </li>
                  
                    <li>
                      <Link
                        style={{ color: "#BF976C" }}
                        className="dropdown-item"
                        to="/mortgage-claims"
                      >
                        Mortgage Claims
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ color: "#BF976C" }}
                        className="dropdown-item"
                        to="/labour-employment"
                      >
                        Labour and Employment Law
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ color: "#BF976C" }}
                        className="dropdown-item"
                        to="/debt-recovery"                     
                       >
                        Debt Recovery Law
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ color: "#BF976C" }}
                        className="dropdown-item"
                      to="/real-estate"
                      >
                        Real Estate Law
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ color: "#BF976C" }}
                        className="dropdown-item"
                        to="/insurance-claims"
                      >
                        Insurance Claim
                      </Link>
                    </li>
                  </ul>
                </div>
                <li className="nav-item">
                  <Link
                    style={{ color: "#BF976C" }}
                    className="nav-link active "
                    aria-current="page"
                    to="/blog"
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
