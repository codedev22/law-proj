import { Formik, Form, Field, ErrorMessage,FormikHelpers } from "formik";
import "../../style/common-styles/Common.css";
import * as Yup from "yup";
import emailjs from "emailjs-com";
 import {toast, Toaster } from "react-hot-toast";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  caseType: string;
  caseDescription: string;
}

const ContactForm = () => {
  // Validation schema
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone Number is required"),
    caseType: Yup.string().required("Please select a case type"),
    caseDescription: Yup.string().required("Please describe your case"),
  });

  // Initial values
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "",
    phoneNumber: "",
    caseType: "",
    caseDescription: "",
  };

  // Form submission handler
  const handleSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    emailjs
      .send(
        "service_ti0gdnk", // Replace with your EmailJS service ID
        "template_yuihz3o", // Replace with your EmailJS template ID
        {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phoneNumber: `${values.countryCode}${values.phoneNumber}`,
          caseType: values.caseType,
          caseDescription: values.caseDescription,
        },
        "CB89j6T2cUcPJPNsB" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("We Have Received Your Complaint!");
          resetForm();
        },
        (error) => {
          console.log(error.text);
          toast.error("Error in sending email. Please try again.");
        }
      );
  };

  return (
    <div className="container-fluid d-flex justify-content-center mt-5 mb-5 p-0">
      <Toaster position="top-center" reverseOrder={false} />
      <div
        style={{ boxShadow: "0px 0px 10px 0px", backgroundColor: "#18273E", borderRadius: "15px" }}
        className="border form-div p-4"
      >
        <div className="container">
          <h2 style={{ color: "#BF976C" }} className="text-center contact-text">
            Contact Us
          </h2>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="og-form">
            {/* First Name */}
            <div className="first-field-div d-flex mt-3">
              <div className="container">
                <label className="me-2 text-light" htmlFor="firstName">
                  First Name
                </label>
                <Field
                  className="bg-light text-dark me-2 w-100"
                  type="text"
                  id="firstName"
                  name="firstName"
                />
                <ErrorMessage
                  className="text-danger"
                  name="firstName"
                  component="div"
                />
              </div>

              {/* Last Name */}
              <div className="container">
                <label className="me-2 text-light" htmlFor="lastName">
                  Last Name
                </label>
                <Field
                  className="bg-light text-dark w-100"
                  type="text"
                  id="lastName"
                  name="lastName"
                />
                <ErrorMessage
                  className="text-danger"
                  name="lastName"
                  component="div"
                />
              </div>
            </div>

            {/* Email */}
            <div className="d-flex flex-column mt-2 container">
              <label className="text-light" htmlFor="email">
                Email
              </label>
              <Field
                className="bg-light text-dark w-100"
                type="email"
                id="email"
                name="email"
              />
              <ErrorMessage
                className="text-danger"
                name="email"
                component="div"
              />
            </div>

            {/* Phone Number */}
            <div className="d-flex flex-column mt-2 container">
              <label className="text-light" htmlFor="phoneNumber">
                Phone Number
              </label>
              <div className="d-flex">
                <Field
                  className="bg-light text-dark me-2"
                  as="select"
                  id="countryCode"
                  name="countryCode"
                >
                  <option value="">Select</option>
                  <option value="+1">+1 (USA)</option>
                  <option value="+91">+91 (India)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+61">+61 (Australia)</option>
                </Field>
                <Field
                  className="bg-light text-dark w-100"
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter phone number"
                />
              </div>
              <ErrorMessage
                className="text-danger"
                name="phoneNumber"
                component="div"
              />
            </div>

            {/* Case Type */}
            <div className="d-flex flex-column mt-2 container">
              <label className="text-light" htmlFor="caseType">
                Case Type
              </label>
              <Field
                className="bg-light text-dark w-100"
                as="select"
                id="caseType"
                name="caseType"
              >
                <option value="">Select</option>
                <option value="civil">Civil</option>
                <option value="criminal">Criminal</option>
                <option value="family">Family</option>
                <option value="business">Business</option>
              </Field>
              <ErrorMessage
                className="text-danger"
                name="caseType"
                component="div"
              />
            </div>

            {/* Case Description */}
            <div className="d-flex flex-column mt-2 container">
              <label className="text-light" htmlFor="caseDescription">
                Please, Describe Your Case
              </label>
              <Field
                className="bg-light text-dark w-100"
                as="textarea"
                id="caseDescription"
                name="caseDescription"
                rows="4"
                placeholder="Enter details about your case"
              />
              <ErrorMessage
                className="text-danger"
                name="caseDescription"
                component="div"
              />
            </div>

            {/* Submit Button */}
            <div className="container">
              <div className="text-center form-button mt-3">
                <button className="btn btn-light text-dark btn-md" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;
