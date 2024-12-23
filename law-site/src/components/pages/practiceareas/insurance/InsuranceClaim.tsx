import Footer from "../../../Shared/Footer/Footer";
import NavBar from "../../../Shared/NavBar/NavBar";
import InsuranceClaimContent from "./InsuranceClaimContent";
import insurancebanner from '../../../../assets/mainpracticearea/banner/insurancebanner.png'
const InsuranceClaim = () => {
  return (
    <div>
      <NavBar />
      <div>
        <img src={insurancebanner} className="img-fluid" alt="" />
      </div>
      <div className=" container-lg container-fluid py-lg-5 py-4">
        <div className="row px-lg-0 px-3">
          <p className="px-3" style={{ fontSize: "35px" }}>
            {" "}
           <b>Insurance Claims: Skilled Legal Support for Maximizing Your
           Compensation and Resolving Disputes.</b> 
          </p>
          <div className="col px-3">
            <p style={{ fontSize: "19px", textAlign: "justify" }}>
              We specialize in providing expert legal assistance for a variety
              of insurance claims, ensuring that your rights are protected and
              you receive the compensation you're entitled to. Our team of
              experienced lawyers navigates through the complexities of
              insurance claims, offering tailored solutions for life, health,
              property, and personal injury matters.
            </p>
          </div>
        </div>
        <InsuranceClaimContent />
      </div>
      <Footer />
    </div>
  );
};

export default InsuranceClaim;
