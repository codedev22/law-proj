import MortgageClaimsContent from "./MortgageClaimsContent";
import mortgagebanner from '../../../../assets/mainpracticearea/banner/mortgagebanner.png'
const MortgageClaims = () => {
  return (
    <div>
      <div className="w-100">
        <img src={mortgagebanner} className="img-fluid w-100" alt="" />
      </div>
      <div className=" container-lg container-fluid py-lg-5 py-4">
        <div className="row px-lg-0 px-3">
          <p className="px-3" style={{ fontSize: "35px" }}>
            {" "}
          <b>Mortgage Claims: Tailored Legal Support for Resolving Disputes and Recovering Losses.</b>  
          </p>
          <div className="col px-3">
            <p style={{ fontSize: "19px", textAlign: "justify" }}>
              We specialize in resolving disputes and legal issues arising from
              mortgage agreements. Whether you are a lender or a borrower,
              navigating mortgage claims requires precision, expertise, and a
              deep understanding of property and financial laws in India. Our
              firm provides tailored legal solutions across Tamil Nadu and the
              country, ensuring a fair resolution to complex mortgage matters.
            </p>
          </div>
        </div>
        <MortgageClaimsContent />
      </div>
    </div>
  );
};

export default MortgageClaims;
