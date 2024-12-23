import { Space } from "antd";
import Floatbtn from "../../../components/common/Floatbtn";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const phoneNumber = "+918110011188";

  return (
    <footer
      style={{ backgroundColor: "#18273E" }}
      className="footer scroll-overflow mt-5 px-lg-0 px-4 "
    >
      <div className="container-lg-fluid container p-2 p-lg-4 ">
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
                <li
                  onClick={() => {
                    navigate("/corporate-legal-service");
                  }}
                >
                  <DoubleRightOutlined className="mx-1" />
                  Corporate Legal Services in TN & INDIA
                </li>
                <li
                  onClick={() => {
                    navigate("/intellectual-property-rights");
                  }}
                >
                  <DoubleRightOutlined className="mx-1" />
                  IPR Legal Services in TN & INDIA
                </li>
                <li
                  onClick={() => {
                    navigate("/family-matrimonial");
                  }}
                >
                  <DoubleRightOutlined className="mx-1" />
                  Family & Divorce Lawyers in TN & INDIA
                </li>
                <li
                  onClick={() => {
                    navigate("/criminal-law");
                  }}
                >
                  <DoubleRightOutlined className="mx-1" />
                  Criminal Lawyer in TN & INDIA
                </li>
                <li
                  onClick={() => {
                    navigate("/civil-commercial");
                  }}
                >
                  <DoubleRightOutlined className="mx-1" />
                  Civil & Commercial Lawyer in TN & INDIA
                </li>
                <li
                  onClick={() => {
                    navigate("/mortgage-claims");
                  }}
                >
                  <DoubleRightOutlined className="mx-1" />
                  Mortgage Lawyer in TN & INDIA
                </li>
                <li
                  onClick={() => {
                    navigate("/insurance-claims");
                  }}
                >
                  <DoubleRightOutlined className="mx-1" />
                  Insurance Claim in TN & INDIA
                </li>
                <li
                  onClick={() => {
                    navigate("/labour-employment");
                  }}
                >
                  <DoubleRightOutlined className="mx-1" />
                  Labor & Employment in TN & INDIA
                </li>
                <li
                  onClick={() => {
                    navigate("/debt-recovery");
                  }}
                >
                  <DoubleRightOutlined className="mx-1" />
                  Debt Recovery in TN & INDIA
                </li>
                <li
                  onClick={() => {
                    navigate("/real-estate");
                  }}
                >
                  <DoubleRightOutlined className="mx-1" />
                  Real Estate in TN & INDIA
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
                <li
                  onClick={() => {
                    navigate("/intellectual-property-rights");
                  }}
                >
                  <DoubleRightOutlined className="mx-1" />
                  IP Attorney in TN & INDIA
                </li>
                <li
                  onClick={() => {
                    navigate("/criminal-law");
                  }}
                >
                  <DoubleRightOutlined className="mx-1" />
                  Criminal Law Advocates in TN & INDIA
                </li>

                <li
                  onClick={() => {
                    navigate("/real-estate");
                  }}
                >
                  <DoubleRightOutlined className="mx-1" />
                  Real Estate & Property Lawyer in TN & INDIA
                </li>
                <li
                  onClick={() => {
                    navigate("/debt-recovery");
                  }}
                >
                  <DoubleRightOutlined className="mx-1" />
                  DEBT Recovery in TN & INDIA
                </li>
                <li>
                  <DoubleRightOutlined className="mx-1" />
                  Will Drafting Services in TN & INDIA
                </li>
                <li
                  onClick={() => {
                    navigate("/insurance-claims");
                  }}
                >
                  <DoubleRightOutlined className="mx-1" />
                  Insurance Lawyer in TN & INDIA
                </li>
                <li
                  onClick={() => {
                    navigate("/labour-employment");
                  }}
                >
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
                  onClick={() => (window.location.href = `tel:${phoneNumber}`)}
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
                  onClick={() =>
                    window.open(
                      "https://mail.google.com/mail/u/1/#inbox?compose=new"
                    )
                  }
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
              <li
                onClick={() => {
                  window.location.href =
                    "https://www.google.com/maps/place/Highbrows+Legal/@9.9207708,78.0989202,13z/data=!4m19!1m12!4m11!1m6!1m2!1s0x3b00c5bd8435e88b:0x30eb36667125100c!2sHighbrows+Legal!2m2!1d78.1401198!2d9.9206888!1m3!2m2!1d78.1473287!2d9.9654933!3m5!1s0x3b00c5bd8435e88b:0x30eb36667125100c!8m2!3d9.9206888!4d78.1401198!16s%2Fg%2F11wtw1gqff?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D";
                }}
              >
                Sitemap
              </li>
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
      <Floatbtn />
    </footer>
  );
}

export default Footer;
