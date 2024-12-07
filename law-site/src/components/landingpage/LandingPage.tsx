import "../style/landingpage-styles/LandingPage.css";
import logo from "../../assets/images/logo1.png";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";

function LandingPage() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar py-0 navbar-expand-lg bg-body-tertiary">
        <div
          style={{ backgroundColor: "#18273E" }}
          className="container-fluid p-3"
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
              alt="Highbrows Legal Logo"
            />
          </div>
          <a href="2" className="navbar-brand d-lg-flex"></a>
          {/* Off-canvas Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasMenu"
            aria-controls="offcanvasMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ backgroundColor: "#C7B480" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="d-flex align-items-center justify-content-end">
            <div className="me-3 text-light">
              <PhoneOutlined style={{ marginRight: "8px" }} />
              +91 7550187712
            </div>
            <button
              className="btn btn-lg"
              style={{
                backgroundColor: "#C7B480",
                color: "#18273E",
                borderRadius: "5px",
              }}
            >
              Consultation
            </button>
          </div>
        </div>
      </nav>

      {/* Off-canvas Menu */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasMenu"
        aria-labelledby="offcanvasMenuLabel"
        style={{ backgroundColor: "#18273E" }}
      >
        <div className="offcanvas-header">
          <h5
            className="offcanvas-title text-light"
            id="offcanvasMenuLabel"
            style={{ color: "#C7B480" }}
          >
            Menu
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            style={{ color: "#C7B480" }}
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Practices Area
              </a>
              <ul className="dropdown-menu" style={{ backgroundColor: "#18273E" }}>
                <li>
                  <a className="dropdown-item text-light" href="#">
                    Civil & Commercial
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-light" href="#">
                    Corporate Lawyers
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-light" href="#">
                    Family & Divorce
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-light" href="#">
                    Criminal Lawyer
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-5">
        {/* Your content component */}
      </div>

      {/* Footer */}
      <footer
        style={{ backgroundColor: "#18273E" }}
        className="footer scroll-overflow"
      >
        <div className="container-fluid footcontainer-1 p-0">
          <div className="row p-3 footrow-1">
            <div className="col about-column">
              <p style={{ color: "#C7B480" }} className="text-start">
                About Us
              </p>
              <hr className="bg-light w-100" style={{ border: "1px dashed" }} />
              <p
                style={{ fontSize: "17px" }}
                className="text-justify text-light"
              >
                Highbrows Legal Consultants - We are more than a group of expert
                lawyers, we take pride in not just our successful track record,
                but also in the relationships that we form with our clients.
              </p>
            </div>
          </div>
        </div>
        <div className="copyright text-start mt-5 p-2">
          <p style={{ color: "#C7B480" }}>
            Copyright © 2024 HighBrows Legal. All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
