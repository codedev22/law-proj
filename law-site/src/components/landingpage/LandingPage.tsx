import "../style/landingpage-styles/LandingPage.css";
import logo from "../../assets/images/logo1.png";
import logo1 from '../../assets/images/logo2.png'
import Floatbtn from "./Floatbtn";
import Content from "./Content";
import Footer from "../common/Footer";
import TopLawyers from "../common/TopLawyers";
import Specialization from "./Specialization";
import LegalSolutions from "../common/LegalSolutions";
import {
  PhoneOutlined,
} from "@ant-design/icons";

function LandingPage() {
  return (
    <div>
      <nav className="navbar py-0 navbar-expand-lg bg-body-tertiary  ">
        <div
          style={{ backgroundColor: "#18273E" }}
          className="container-fluid  p-3"
        >
          <div
            style={{
              height: "120px",
              width: "320px",
            }}
          >
            <img
              style={{
                height: "300px",
                width: "350px",
                marginTop: "-5rem",
                marginLeft: "-1.3rem",
              }}
              src={logo}
              alt=""
            />
          </div>
          <button
            style={{ backgroundColor: "#C7B480" }}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
         
         

          <div className="num-con-div d-flex align-items-center justify-content-end">
            <div className="me-3 text-light">
              <PhoneOutlined style={{ marginRight: "8px" }} />
              +91 7550187712
            </div>
            <button
              className="btn btn-lg"
              style={{
                backgroundColor: "#C7B480",
                color: "#18273E",
                borderRadius: "25px",
              }}
            >
              Consultation
            </button>
          </div>
        </div>
      </nav>
       <nav className=" menu-nav navbar py-0 navbar-expand-lg  ">
        <div style={{ backgroundColor: "#18273E" }} className="container-fluid px-4 ">
          
          <div
          style={{ backgroundColor: "#18273E" }}
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
            <div
            style={{
              height: "120px",
              width: "320px",
            }}
          >
            <img
              style={{
                height: "300px",
                width: "350px",
                marginTop: "-5rem",
              }}
              src={logo1}
              alt=""
            />
          </div>

            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav ">
                <li className="nav-item ">
                  <a
                    style={{ color: "#C7B480" }}
                    className="nav-link active "
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    style={{ color: "#C7B480" }}
                    className="nav-link active "
                    aria-current="page"
                    href="#"
                  >
                    About us
                  </a>
                </li>
                <div className="dropdown">
                  <button
                    style={{ marginTop: "0.1rem", color: "#C7B480" }}
                    className="btn dropdown-toggle "
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Practices Area
                  </button>
                  <ul
                    style={{ backgroundColor: "#18273E" }}
                    className="dropdown-menu"
                  >
                    <li>
                      <a
                        style={{ color: "#C7B480" }}
                        className="dropdown-item"
                        href="#"
                      >
                        Civil & Commercial
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "#C7B480" }}
                        className="dropdown-item"
                        href="#"
                      >
                        Corporate Lawyers
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "#C7B480" }}
                        className="dropdown-item"
                        href="#"
                      >
                        Family & Divorce
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "#C7B480" }}
                        className="dropdown-item"
                        href="#"
                      >
                        Criminal Lawyer
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "#C7B480" }}
                        className="dropdown-item"
                        href="#"
                      >
                        Mortgage Claim
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "#C7B480" }}
                        className="dropdown-item"
                        href="#"
                      >
                        Insurance Claim
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "#C7B480" }}
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
                    style={{ color: "#C7B480" }}
                    className="nav-link active "
                    aria-current="page"
                    href="#"
                  >
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    style={{ color: "#C7B480" }}
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
      <div className="p-5">
        <Content />
        <Specialization/>
        <TopLawyers/>
        <LegalSolutions/>
      </div>
      {/* Footer */}
      <Footer/>
        {/* Footer */}
      <Floatbtn />
    </div>
  );
}

export default LandingPage;
