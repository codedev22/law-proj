import "../../style/contactstyles/Contact.css";
import CaseForm from "../../common/caseform/CaseForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  const phoneNumber = "+918110011188";

  return (
    <div>
      <div className="container-lg container-fluid p-lg-5 ">
        <div
          style={{ borderRadius: "15px" }}
          className="row row-color px-3   px-lg-5 py-3  "
        >
          <p className="text-lg-center mt-3" style={{ fontSize: "25px" }}>
            {" "}
            <b>Get in touch with us</b>{" "}
          </p>
        </div>
        <div className="row  px-3 d-flex  mt-lg-0 py-lg-0 p-lg-0 flex-column flex-lg-row flex-md-column px-lg-5 py-lg-0 py-5 gap-lg-0 gap-5">
          <div className="col  d-flex py-lg-3 ">
            <FontAwesomeIcon
              style={{ borderRadius: "8px" }}
              type="button"
              className="px-3 support-icon fs-3  py-3 contact-icon-color contact-icon-bgcolor me-2"
              icon={faEnvelope}
              onClick={() =>
                window.open(
                  "https://mail.google.com/mail/u/1/#inbox?compose=new"
                )
              }
            />

            <p className="contact-icon-color" style={{ fontSize: "20px" }}>
              Support <br />{" "}
              <p className="text-dark" style={{ fontSize: "18px" }}>
                {" "}
                contactus@highbrowslegal.in
              </p>{" "}
            </p>
          </div>
          <div className="col d-flex  py-lg-3">
            <FontAwesomeIcon
              type="button"
              style={{ borderRadius: "8px" }}
              className="px-3 fs-3 py-3 contact-icon-color contact-icon-bgcolor me-2"
              icon={faPhone}
              onClick={() => (window.location.href = `tel:${phoneNumber}`)}
            />
            <p className="contact-icon-color" style={{ fontSize: "20px" }}>
              Call Us
              <br />{" "}
              <p className="text-dark" style={{ fontSize: "18px" }}>
                +91 8110011188
              </p>{" "}
            </p>
          </div>
          <div className="col d-flex  py-lg-3">
            <FontAwesomeIcon
              type="button"
              style={{ borderRadius: "8px", fontSize: "30px" }}
              className="px-3  py-3 contact-icon-color contact-icon-bgcolor me-2"
              icon={faLocationDot}
              onClick={() =>
                window.open("https://maps.app.goo.gl/p6S2hR1h8fUnqUJW6")
              }
            />
            <p className="contact-icon-color" style={{ fontSize: "20px" }}>
              Address
              <br />{" "}
              <p className="text-dark" style={{ fontSize: "18px" }}>
                1st Floor, 11-A, opp. to M.P. Hotel, Kuruvikaran Salai, Anna
                Nagar, Shenoy Nagar, Madurai, Tamil Nadu 625020
              </p>{" "}
            </p>
          </div>
        </div>
        <div
          style={{ borderRadius: "15px" }}
          className="row row-color px-3 px-lg-5 py-3 "
        >
          <p className="text-lg-center mt-3" style={{ fontSize: "25px" }}>
            {" "}
            <b> Have question? Contact us today</b>
          </p>
        </div>
        <div className="row px-3 mt-4  px-lg-5 d-flex flex-column flex-lg-row flex-md-column ">
          <p className="" style={{ fontSize: "30px" }}>
            {" "}
            <b className="contact-icon-color">Consult Us</b>
          </p>
          <p style={{ fontSize: "18px", opacity: "0.5" }}>
            Send a message. We will contact you as soon as possible
          </p>
          <div className="col col-lg-6 mt-lg-0  ">
            <CaseForm />
          </div>
          <div className="col  col-lg-5 px-5 p-5 p-lg-0 px-lg-0 mt-4 mt-lg-2">
            <iframe
              className="w-100 h-75 border rounded shadow-sm p-2 "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62183.30736582213!2d80.1716389202222!3d13.070216149977927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5bd8435e88b%3A0x30eb36667125100c!2sHighbrows%20Legal!5e0!3m2!1sen!2sin!4v1734868400961!5m2!1sen!2sin"

            ></iframe>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
