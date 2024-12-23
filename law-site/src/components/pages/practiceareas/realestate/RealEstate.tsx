import Footer from "../../../Shared/Footer/Footer";
import NavBar from "../../../Shared/NavBar/NavBar";
import RealEstateContent from "./RealEstateContent";
import realestatebanner from '../../../../assets/mainpracticearea/banner/realestatebanner.png'
const RealEstate = () => {
  return (
    <div>
      <NavBar />
      <div>
        <img src={realestatebanner} className="img-fluid" alt="" />
      </div>
      <div className=" container-lg container-fluid py-lg-5 py-4">
        <div className="row px-lg-0 px-3">
          <p className="px-3" style={{ fontSize: "35px" }}>
            {" "}
           <b> Real Estate Law: Expert Legal Services for Property Transactions,
           Disputes, and Investments.</b>
          </p>
          <div className="col px-3">
            <p style={{ fontSize: "19px", textAlign: "justify" }}>
              Real estate transactions and property disputes can be complex and
              involve large sums of money. At Highbrows Legal, we provide expert
              legal services to handle all aspects of real estate law. Whether
              you are buying, selling, leasing, or facing a property dispute, we
              ensure that your interests are protected with diligent legal
              support.
            </p>
          </div>
        </div>
        <RealEstateContent />
      </div>
      <Footer />
    </div>
  );
};

export default RealEstate;
