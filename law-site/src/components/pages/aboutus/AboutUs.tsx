import NavBar from "../../Shared/NavBar/NavBar";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../../common/banner/Banner";
import PracticeArea from "./practicearea/PracticeArea";
import WhyHighbrows from "./whyhighbrows/WhyHighbrows";
import AboutUsContent from "./aboutuscontent/AboutUsContent";
const AboutUs = () => {
  return (
    <div>
      <NavBar />
        <Banner />
      <div className="container  p-lg-5 px-lg-5 mt-3">
        <AboutUsContent/>
        <hr className="mt-5" />
        <div>
          <PracticeArea />
        </div>
        <hr className="mt-5" />

        <WhyHighbrows />
        <hr className="mt-5 p-0" />

        <div style={{borderRadius:'15px'}} className="row px-lg-0 px-3 mt-5 subcolor p-lg-2  ">
          <p style={{ fontSize: "30px" }} className="mt-lg-3 maincolor  mt-3">
            <b>Our Commitment to You</b>
          </p>
        </div>
        <div className="row px-lg-0 px-3">
          <div className="col p-lg-3 px-lg-0 px-3 p-3 ">
            <p  style={{ textAlign: "justify", fontSize: "19px" }}>
              At Highbrows Legal, justice is not a service—it is our calling. We
              treat every case with unparalleled dedication, safeguarding your
              rights and interests with vigour and precision. Whether you’re
              building a business empire, protecting your intellectual property,
              or resolving personal disputes, our team is by your side every
              step of the way.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
