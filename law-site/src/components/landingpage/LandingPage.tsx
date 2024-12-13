import "../style/landingpage-styles/LandingPage.css";
import logo from "../../assets/images/logo1.png";
import Floatbtn from "./Floatbtn";
import Footer from "../common/Footer";
import TopLawyers from "../common/TopLawyers";
import Specialization from "./Specialization";
import LegalSolutions from "../common/LegalSolutions";
import CaseForm from "../common/CaseForm";
import OurPracticeArea from "../common/OurPracticeArea";
import { PhoneOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons";

function LandingPage() {
  return (
    <div>
      <nav className="navbar py-0 navbar-expand-lg ">
        <div
          style={{ backgroundColor: "#18273E" }}
          className="container-fluid d-flex p-3 "
        >
          <div
            className="main-logo-div    "
            style={{
              height: "55px",
              position: "relative",
            }}
          >
            <img
              className="main-logo  "
              style={{
                height: "265px",
                width: "300px",
                position: "absolute",
                marginTop: "-6.4rem",
                marginLeft: "-2rem",
              }}
              src={logo}
              alt=""
            />
          </div>

          <div className="num-con-div  d-flex align-items-center justify-content-end ">
            <div className="me-3">
              <button
              style={{backgroundColor:"#BF976C",borderRadius:'5px'}}
                className="btn offcan-button btn-sm "
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
              >
               <FontAwesomeIcon
                  style={{  fontSize: "20px" }}
                  className="text-light offcan-icon"
                  icon={faBars}
                />
              </button>
          
            </div>
            <div className="me-3  mt-3 callus-div text-light">
              <p>
                <PhoneOutlined  /> +91 8110011188
              </p>
            </div>
            <div className="consultation-div">
              <button
                className="consultation-button btn btn-lg  "
                style={{
                  backgroundColor: "#BF976C",
                  color: "#18273E",
                  borderRadius: "5px",
                }}
              >
                <span className="consultation-text ">Consultation</span>
                <FontAwesomeIcon
                  style={{ display: "none", fontSize: "20px" }}
                  className="text-light consultation-icon "
                  icon={faEnvelope}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <nav className=" menu-nav navbar py-0  navbar-expand-lg ">
        <div
          style={{ backgroundColor: "#18273E" }}
          className="container-fluid  "
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
                <li className="nav-item ">
                  <a
                    style={{ color: "#BF976C" }}
                    className="nav-link active "
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    style={{ color: "#BF976C" }}
                    className="nav-link active "
                    aria-current="page"
                    href="#"
                  >
                    About us
                  </a>
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
                      <a
                        style={{ color: "#BF976C" }}
                        className="dropdown-item"
                        href="#"
                      >
                        Civil & Commercial
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "#BF976C" }}
                        className="dropdown-item"
                        href="#"
                      >
                        Corporate Lawyers
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "#BF976C" }}
                        className="dropdown-item"
                        href="#"
                      >
                        Family & Divorce
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "#BF976C" }}
                        className="dropdown-item"
                        href="#"
                      >
                        Criminal Lawyer
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "#BF976C" }}
                        className="dropdown-item"
                        href="#"
                      >
                        Mortgage Claim
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "#BF976C" }}
                        className="dropdown-item"
                        href="#"
                      >
                        Insurance Claim
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "#BF976C" }}
                        className="dropdown-item"
                        href="#"
                      >
                        Labor & Employment
                      </a>
                    </li>
                  </ul>
                </div>
                <li className="nav-item">
                  <a
                    style={{ color: "#BF976C" }}
                    className="nav-link active "
                    aria-current="page"
                    href="#"
                  >
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    style={{ color: "#BF976C" }}
                    className="nav-link active "
                    aria-current="page"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className=" main-body-div">
        <Specialization />
        <TopLawyers />
        <LegalSolutions />
        <OurPracticeArea />
        <CaseForm />
      </div>
      {/* Footer */}
      <Footer />
      {/* Footer */}
      <Floatbtn />
    </div>
  );
}

export default LandingPage;
