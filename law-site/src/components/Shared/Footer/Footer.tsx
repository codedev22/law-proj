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
import "../../style/common-styles/Common.css";
function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#18273E" }}
      className="footer scroll-overflow mt-5 px-lg-0 px-3 "
    >
      <div className="container-fluid p-2 p-lg-4 ">
        <div className="row  flex-column flex-lg-row flex-md-column ">
          <div className="col about-column">
            <p style={{ color: "#BF976C" }} className="text-start">
              About Us
            </p>
            <hr className="bg-light w-100" style={{ border: "1px dashed" }} />
            <ul className="list-unstyled text-start">
              <p
                style={{ fontSize: "17px", textAlign: "justify" }}
                className="text-justify text-light "
              >
                At Highbrows Legal, we are more than just a team of skilled
                lawyers. Our commitment lies in building strong, lasting
                relationships with our clients, ensuring they receive the
                highest level of legal expertise and personalized attention.
                With a strong presence in Tamil Nadu and across India, we offer
                innovative and effective legal solutions tailored to the unique
                needs of each client. Trust, integrity, and a relentless pursuit
                of excellence define who we are as a leading legal consultant.
              </p>
            </ul>
          </div>
          <div className="col ">
            <p style={{ color: "#BF976C" }} className="text-start">
              Practices Area
            </p>
            <hr className="bg-light " style={{ border: "1px dashed" }} />
            <div className="d-flex">
              <ul
                style={{ fontSize: "17px" }}
                className="practice-area-ul text-start list-unstyled text-light  "
              >
                <li>
                  <DoubleRightOutlined className="mx-1" />
                  Corporate Legal Services in TN & INDIA
                </li>
                <li>
                  <DoubleRightOutlined className="mx-1" />
                  IPR Legal Services in TN & INDIA
                </li>
                <li>
                  <DoubleRightOutlined className="mx-1" />
                  Family & Divorce Lawyers in TN & INDIA
                </li>
                <li>
                  <DoubleRightOutlined className="mx-1" />
                  Criminal Lawyer in TN & INDIA
                </li>
                <li>
                  <DoubleRightOutlined className="mx-1" />
                  Civil & Commercial Lawyer in TN & INDIA
                </li>
                <li>
                  <DoubleRightOutlined className="mx-1" />
                  Mortgage Lawyer in TN & INDIA
                </li>
                <li>
                  <DoubleRightOutlined className="mx-1" />
                  Insurance Claim in TN & INDIA
                </li>
                <li>
                  <DoubleRightOutlined className="mx-1" />
                  Labor & Employment in TN & INDIA
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <p style={{ color: "#BF976C" }} className="text-start">
              Best Advocates and Lawyers in TN & All over INDIA
            </p>
            <hr className="bg-light" style={{ border: "1px dashed" }} />
            <div className="d-flex ">
              <ul
                style={{ fontSize: "17px" }}
                className="practice-area-ul text-start list-unstyled text-light  "
              >
                <li>
                  <DoubleRightOutlined className="mx-1" />
                  IP Attorney in TN & INDIA
                </li>
                <li>
                  <DoubleRightOutlined className="mx-1" />
                  Criminal Law Advocates in TN & INDIA
                </li>
                
                <li>
                  <DoubleRightOutlined className="mx-1" />
                  Real Estate & Property Lawyer in TN & INDIA
                </li>
                <li>
                  <DoubleRightOutlined className="mx-1" />
                  DEBT Recovery in TN & INDIA
                </li>
                <li>
                  <DoubleRightOutlined className="mx-1" />
                  Will Drafting Services in TN & INDIA
                </li>
                <li>
                  <DoubleRightOutlined className="mx-1" />
                  Insurance Lawyer in TN & INDIA
                </li>
                <li>
                  <DoubleRightOutlined className="mx-1" />
                  Labor & Employment Lawyer in TN & INDIA
                </li>

              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="contact col d-flex flex-wrap flex-column ">
            <div className="phone-btn-div ">
              <div className="d-flex mt-3 mt-lg-0 phone-btn-adjuster ">
                <button
                  style={{
                    borderRadius: "24px",
                    height: "40px",
                    width: "40px",
                  }}
                  className="phone-btn btn"
                >
                  <PhoneOutlined
                    style={{ fontSize: "15px" }}
                    className="phone-icon "
                  />
                </button>
                <p
                  style={{ color: "white", fontSize: "15px" }}
                  className=" my-2 mx-1"
                >
                  +91 8110011188
                </p>
              </div>
            </div>

            <div style={{ marginTop: "1rem" }} className="mail-btn-div">
              <div className="d-flex mail-btn-adjuster  ">
                <button
                  style={{
                    borderRadius: "34px",
                    height: "40px",
                    width: "40px",
                  }}
                  className="mail-btn btn "
                >
                  <MailOutlined
                    style={{ fontSize: "15px" }}
                    className="mail-icon "
                  />
                </button>
                <p
                  style={{ color: "white", fontSize: "15px" }}
                  className="my-2 mx-1"
                >
                  highbrowslegal@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-5 mt-lg-0 mt-md-5 imp-column ">
            <p className="text-start" style={{ color: "#BF976C" }}>
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
        <div className="row mt-4">
          <div className="col social-column  mt-0 mt-lg-0 mt-md-5  ">
            <div className="socialmedia  text-start">
              <p style={{ color: "#BF976C" }}>Follow Us On Social Media</p>
              <hr
                className="bg-light "
                style={{ border: "1px dashed", width: "195px" }}
              />

              <Space style={{ paddingInline: 3 }}>
                <a style={{ paddingInline: 3 }} href="https://x.com/HighbrowsL">
                  <XOutlined className="x-icon" style={{ fontSize: "25px" }} />
                </a>
                <a
                  style={{ paddingInline: 3 }}
                  href="https://www.instagram.com/highbrows_legal?igsh=a3QycmVlY29odGtm"
                >
                  <InstagramOutlined
                    className="insta-icon"
                    style={{ fontSize: "25px" }}
                  />
                </a>
                <a
                  style={{ paddingInline: 3 }}
                  href="https://www.linkedin.com/company/highbrows-legal/"
                >
                  <LinkedinOutlined
                    className="linkedin-icon"
                    style={{ fontSize: "25px" }}
                  />
                </a>
                <a
                  style={{ paddingInline: 3 }}
                  href="https://www.facebook.com/people/highbrows_legal/100066270802915/?locale=zh_TW"
                >
                  <FacebookOutlined
                    className="facebook-icon"
                    style={{ fontSize: "25px" }}
                  />
                </a>
              </Space>
            </div>
          </div>

          
        </div>
        <div className="copyright text-start mt-5 ">
        <p style={{ color: "#BF976C" }}>
          Copyright © 2024 HighBrows Legal. All Rights Reserved
        </p>
      </div>
      </div>   
    </footer>
  );
}

export default Footer;
