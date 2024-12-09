
import { Space } from "antd";

import {
    LinkedinOutlined,
    XOutlined,
    InstagramOutlined,
    PhoneOutlined,
    MailOutlined,
    FacebookOutlined,
    DoubleRightOutlined,
  } from "@ant-design/icons";
import '../style/common-styles/Common.css'
function Footer() {
  return (
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
  )
}

export default Footer
