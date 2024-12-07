import "../style/landingpage-styles/LandingPage.css";
import logo from "../../assets/images/logo1.png";
import { Space } from "antd";
import Floatbtn from "./Floatbtn";
import Content from "./Content";
import {
  LinkedinOutlined,
  XOutlined,
  InstagramOutlined,
  PhoneOutlined,
  MailOutlined,
  FacebookOutlined,
  DoubleRightOutlined,
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
          <a href="2" className="navbar-brand  d-lg-flex"></a>
          <button
          style={{ backgroundColor: "#C7B480" }}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
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
      <nav className=" menu-nav navbar py-0 navbar-expand-lg ">
        <div style={{ backgroundColor: "#18273E" }} className="container-fluid">
        <div className="">
            <div
              className="nav-menus collapse navbar-collapse  "
              id="navbarNav"
            >
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
      </div>
      <footer
        style={{ backgroundColor: "#18273E" }}
        className="footer scroll-overflow"
      >
        <div className="container-fluid footcontainer-1 p-0 ">
          <div className="row p-3 footrow-1 ">
            <div className="col about-column">
              <p style={{ color: "#C7B480" }} className="text-start">
                About Us
              </p>
              <hr className="bg-light w-100" style={{ border: "1px dashed" }} />
              <ul className="list-unstyled text-start">
                <p
                  style={{ fontSize: "17px" }}
                  className="text-justify text-light "
                >
                  Highbrows Legal Consultants - We are more than a group of
                  expert lawyers, we take pride in not just our successful track
                  record, but also in the relationships that we form with our
                  clients. Best and Top Legal Consultant in India
                </p>
              </ul>
              <div className="contact d-flex flex-wrap">
                <div className="phone-btn-div">
                  <div className="d-lg-flex justify-content-center mt-3 phone-btn-adjuster ">
                    <button
                      style={{
                        borderRadius: "24px",
                        height: "40px",
                        width: "40px",
                      }}
                      className="phone-btn btn btn-md  "
                    >
                      <PhoneOutlined
                        style={{ fontSize: "15px" }}
                        className="phone-icon "
                      />
                    </button>
                    <p
                      style={{ color: "#C7B480", fontSize: "15px" }}
                      className=" my-2 mx-1"
                    >
                      Call Us: +91 7550187712
                    </p>
                  </div>
                </div>

                <div style={{ marginTop: "1rem" }} className="mail-btn-div">
                  <div className="d-lg-flex justify-content-center mail-btn-adjuster  ">
                    <button
                      style={{
                        borderRadius: "34px",
                        height: "40px",
                        width: "40px",
                      }}
                      className="mail-btn btn btn-sm "
                    >
                      <MailOutlined
                        style={{ fontSize: "15px" }}
                        className="mail-icon "
                      />
                    </button>
                    <p
                      style={{ color: "#C7B480", fontSize: "15px" }}
                      className="fs-6 my-2 mx-1"
                    >
                      Email: example@adovate.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <p style={{ color: "#C7B480" }} className="text-start">
                Practices Area
              </p>
              <hr className="bg-light w-75" style={{ border: "1px dashed" }} />
              <div className="d-flex ">
                <ul
                  style={{ fontSize: "17px" }}
                  className="practice-area-ul text-start list-unstyled text-light  "
                >
                  <li>
                    <DoubleRightOutlined className="mx-1" />
                    Civil & Commercial
                  </li>
                  <li>
                    <DoubleRightOutlined className="mx-1" />
                    Corporate Lawyers
                  </li>
                  <li>
                    <DoubleRightOutlined className="mx-1" />
                    Family & Divorce
                  </li>
                  <li>
                    <DoubleRightOutlined className="mx-1" />
                    Criminal Lawyer
                  </li>
                  <li>
                    <DoubleRightOutlined className="mx-1" />
                    Real Estate & Property
                  </li>
                  <li>
                    <DoubleRightOutlined className="mx-1" />
                    Mortgage Claim
                  </li>
                  <li>
                    <DoubleRightOutlined className="mx-1" />
                    Insurance Claim
                  </li>
                  <li>
                    <DoubleRightOutlined className="mx-1" />
                    Labor & Employment
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <p style={{ color: "#C7B480" }} className="text-start">
                Best Lawyers in India
              </p>
              <hr className="bg-light" style={{ border: "1px dashed" }} />
              <div className="d-flex ">
                <ul
                  style={{ fontSize: "17px" }}
                  className="practice-area-ul text-start list-unstyled text-light  "
                >
                  <li>
                    <DoubleRightOutlined className="mx-1" />
                    Real Estate & Property Lawyer in India
                  </li>
                  <li>
                    <DoubleRightOutlined className="mx-1" />
                    DEBT Recovery In India
                  </li>
                  <li>
                    <DoubleRightOutlined className="mx-1" />
                    Will Drafting Services in India
                  </li>
                  <li>
                    <DoubleRightOutlined className="mx-1" />
                    Insurance Lawyer in India
                  </li>
                  <li>
                    <DoubleRightOutlined className="mx-1" />
                    Maritime Lawyers in India
                  </li>
                  <li>
                    <DoubleRightOutlined className="mx-1" />
                    Aviation Lawyers in India
                  </li>
                  <li>
                    <DoubleRightOutlined className="mx-1" />
                    Labor & Employment Lawyer in India
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid mt-5 social-container ">
          <div className="row footrow1  ">
            <div className="col ">
              <div className="socialmedia  text-start">
                <p style={{ color: "#C7B480" }}>Follow Us On Social Media</p>
                <hr
                  className="bg-light "
                  style={{ border: "1px dashed", width: "195px" }}
                />

                <Space style={{ paddingInline: 3 }}>
                  <a
                    style={{ paddingInline: 3 }}
                    href="https://x.com/HighbrowsL"
                  >
                    <XOutlined style={{ fontSize: "25px", color: "black" }} />
                  </a>
                  <a style={{ paddingInline: 3 }} href="#">
                    <InstagramOutlined
                      style={{ fontSize: "25px", color: "black" }}
                    />
                  </a>
                  <a
                    style={{ paddingInline: 3 }}
                    href="https://www.linkedin.com/company/highbrows-legal/"
                  >
                    <LinkedinOutlined
                      style={{ fontSize: "25px", color: "black" }}
                    />
                  </a>
                  <a
                    style={{ paddingInline: 3 }}
                    href="https://www.facebook.com/people/highbrows_legal/100066270802915/?locale=zh_TW"
                  >
                    <FacebookOutlined
                      style={{ fontSize: "25px", color: "black" }}
                    />
                  </a>
                </Space>
              </div>
            </div>

            <div className="col-lg-4">
              <p className="text-start" style={{ color: "#C7B480" }}>
                Important Links
              </p>
              <hr className="bg-light w-75 " style={{ border: "1px dashed" }} />

              <ul
                style={{ fontSize: "17px" }}
                className=" practice-area-ul text-start list-unstyled text-light  "
              >
                <li>Blogs</li>
                <li>Copyright Notice</li>
                <li>Privacy Policy</li>
                <li>Disclaimer</li>
                <li>Sitemap</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright text-start mt-5 p-2">
          <p style={{ color: "#C7B480" }}>
            Copyright © 2024 HighBrows Legal. All Rights Reserved
          </p>
        </div>
      </footer>
      <Floatbtn />
    </div>
  );
}

export default LandingPage;
