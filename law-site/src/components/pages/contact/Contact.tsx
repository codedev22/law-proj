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
  const phoneNumber = "+918110011188"; 
  return (
    <div>
      <NavBar />
      <div className="container-fluid p-lg-5 ">
        <div style={{borderRadius:'15px'}} className="row row-color px-2   px-lg-5 py-3  ">
          <p className="text-lg-center mt-3" style={{ fontSize: "25px" }}> <b>Get in touch with us</b> </p>
        </div>
        <div className="row  px-2 d-flex  mt-lg-0 py-lg-0 p-lg-0 flex-column flex-lg-row flex-md-column px-lg-5 py-lg-0 py-5 gap-lg-0 gap-5">
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
              onClick={()=>(window.location.href = `tel:${phoneNumber}`)}
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
              style={{ borderRadius: "8px",fontSize:'30px' }}
              className="px-3  py-3 contact-icon-color contact-icon-bgcolor me-2"
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
        <div style={{borderRadius:'15px'}}  className="row row-color px-2 px-lg-5 py-3 ">
          <p className="text-lg-center mt-3" style={{ fontSize: "25px" }}> <b> Have question? Contact us today</b></p>
        </div>
        <div className="row px-2 mt-4 px-lg-5 d-flex flex-column flex-lg-row flex-md-column ">
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
          <div className="col col-lg-4 px-5 p-5 p-lg-0 px-lg-0 mt-4 mt-lg-0">
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
