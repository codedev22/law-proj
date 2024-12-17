import NavBar from "../../Shared/NavBar/NavBar";
import Footer from "../../Shared/Footer/Footer";
import "../../style/contactstyles/Contact.css";
import CaseForm from "../../common/caseform/CaseForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  return (
    <div>
      <NavBar />
      <div className="container-fluid p-lg-5 ">
        <div className="row row-color px-lg-5 py-3">
          <p style={{ fontSize: "20px" }}>Get in touch with us</p>
        </div>
        <div className="row d-flex flex-column flex-lg-row flex-md-column px-lg-5 py-3">
          <div className="col d-flex">
            <FontAwesomeIcon
              style={{ borderRadius: "8px" }}
              className="px-3 fs-3 py-3 contact-icon-color contact-icon-bgcolor me-2"
              icon={faEnvelope}
            />
            <p className="contact-icon-color" style={{ fontSize: "20px" }}>
              Support <br />{" "}
              <p className="text-dark" style={{ fontSize: "18px" }}>
                {" "}
                highbrowslegal@gmail.com
              </p>{" "}
            </p>
          </div>
          <div className="col d-flex">
            <FontAwesomeIcon
              style={{ borderRadius: "8px" }}
              className="px-3 fs-3 py-3 contact-icon-color contact-icon-bgcolor me-2"
              icon={faPhone}
            />
            <p className="contact-icon-color" style={{ fontSize: "20px" }}>
              Call Us
              <br />{" "}
              <p className="text-dark" style={{ fontSize: "18px" }}>
                +91 8110011188
              </p>{" "}
            </p>
          </div>
          <div className="col d-flex">
            <FontAwesomeIcon
              style={{ borderRadius: "8px" }}
              className="px-3 fs-3 py-3 contact-icon-color contact-icon-bgcolor me-2"
              icon={faLocationDot}
            />
            <p className="contact-icon-color" style={{ fontSize: "20px" }}>
              Address
              <br />{" "}
              <p className="text-dark" style={{ fontSize: "18px" }}>
                11, A Sathamangalam Main Road, Kuruvikaran Salai, Anna Nagar,
                Madurai - 625020.
              </p>{" "}
            </p>
          </div>
        </div>
        <div className="row row-color px-lg-5 py-3">
          <p style={{ fontSize: "20px" }}>Have question? Contact us today</p>
        </div>
        <div className="row px-lg-5 d-flex flex-column flex-lg-row flex-md-column ">
          <p className="" style={{ fontSize: "30px" }}>
            {" "}
            <b className="contact-icon-color">Consult Us</b>
          </p>
          <p style={{ fontSize: "18px", opacity: "0.5" }}>
            Send a message. We will contact you as soon as possible
          </p>
          <div className="col col-lg-6 ">
            <CaseForm />
          </div>
          <div className="col col-lg-4 px-2 px-lg-0 mt-4 mt-lg-0 ">
            <iframe
              className="w-100 h-75 border rounded shadow-sm p-2 "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.2871371528245!2d78.1444233!3d9.9100264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c501459f79cd%3A0xa01b2d6710ceb2e7!2sHighbrows%20Legal!5e0!3m2!1sen!2sin!4v1734447110800!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
