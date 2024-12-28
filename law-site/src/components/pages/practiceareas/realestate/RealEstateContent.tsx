import titleimg from "../../../../assets/mainpracticearea/realestateimages/titleverificaition.jpeg";
import reviewimg from "../../../../assets/mainpracticearea/realestateimages/review.jpeg";
import disputeimg from "../../../../assets/mainpracticearea/realestateimages/realestatedispute.jpeg";
import landimg from "../../../../assets/mainpracticearea/realestateimages/landacquisation.jpeg";
import rentimg from "../../../../assets/mainpracticearea/realestateimages/rentalagreements.jpeg";
import taximg from "../../../../assets/mainpracticearea/realestateimages/propertytax.jpeg";
import tortimg from "../../../../assets/mainpracticearea/civilandcommercialimages/tortclaims.jpeg";

const RealEstateContent = () => {
  return (
    <div>
      <div
        style={{ borderRadius: "15px" }}
        className="row px-lg-3 px-3 py-lg-0 py-4  p-lg-3 text-lg-center d-flex flex-column flex-lg-row "
      >
        <div className="col d-lg-flex align-items-center col-lg-6 col-xl-4 p-3 ">
          <img
            style={{ borderRadius: "15px" }}
            className="img-fluid"
            src={titleimg}
            alt="Property"
          />
        </div>

        <div className="col p-lg-3 px-lg-0 px-lg-0 px-3 p-3">
          <p style={{ fontSize: "25px" }} className="text-start maincolor">
            <b> Property Title Verification and Due Diligence</b>
          </p>
          <p className="" style={{ textAlign: "justify", fontSize: "19px" }}>
            We perform thorough checks to ensure clear property titles and
            assist clients in verifying ownership before proceeding with any
            real estate transaction. We offer expert legal opinions on a wide
            range of real estate issues, including property disputes, title
            concerns, transaction legality, and compliance with regulations. Our
            legal advice ensures that your property dealings are conducted with
            confidence and adherence to the law.
          </p>
        </div>
      </div>
      <div
        style={{ borderRadius: "15px" }}
        className="row px-lg-3 px-3 py-lg-0 py-4  subcolor p-lg-3 text-lg-center mt-3  d-flex flex-column-reverse flex-lg-row"
      >
        <div className="col p-lg-3 px-lg-0 px-lg-0 px-3 p-3 ">
          <p style={{ fontSize: "25px" }} className="text-start maincolor">
            <b>Drafting and Reviewing Agreements</b>
          </p>
          <p className="" style={{ textAlign: "justify", fontSize: "19px" }}>
            Our team drafts and reviews property agreements, including sale
            deeds, lease agreements, and tenancy contracts, ensuring that all
            terms are legally sound and clear.
          </p>
        </div>
        <div className="col d-lg-flex align-items-center col-lg-6 col-xl-4 p-3 ">
          <img
            style={{ borderRadius: "15px" }}
            className="img-fluid"
            src={reviewimg}
            alt="Drafting"
          />
        </div>
      </div>

      <div
        style={{ borderRadius: "15px" }}
        className="row px-lg-3 px-3 py-lg-0 py-4  d-flex flex-column flex-lg-row   p-lg-3 text-lg-center mt-3 "
      >
        <div className="col d-lg-flex align-items-center col-lg-6 col-xl-4 p-3 ">
          <img
            style={{ borderRadius: "15px" }}
            className="img-fluid"
            src={disputeimg}
            alt="Real"
          />
        </div>
        <div className="col p-lg-3 px-lg-0 px-3 p-3">
          <p style={{ fontSize: "25px" }} className="text-start maincolor">
            <b>Real Estate Dispute Resolution</b>
          </p>
          <p className="" style={{ textAlign: "justify", fontSize: "19px" }}>
            Whether it’s boundary disputes, title issues, or breach of contract,
            we provide legal representation in civil courts and tribunals to
            resolve property-related conflicts.
          </p>
        </div>
      </div>

      <div
        style={{ borderRadius: "15px" }}
        className="row px-lg-3 px-3 py-lg-0 py-4  subcolor  d-flex flex-column-reverse flex-lg-row p-lg-3 text-lg-center mt-3 "
      >
        <div className="col p-lg-3 px-lg-0 px-3 p-3">
          <p style={{ fontSize: "25px" }} className="text-start maincolor">
            <b>Land Acquisition and Compensation Matters</b>
          </p>
          <p style={{ textAlign: "justify", fontSize: "19px" }}>
            We offer legal services in land acquisition cases, helping clients
            navigate the complexities of compensation claims and disputes with
            government authorities.
          </p>
        </div>
        <div className="col d-lg-flex align-items-center col-lg-6 col-xl-4 p-3 ">
          <img
            style={{ borderRadius: "15px" }}
            className="img-fluid"
            src={landimg}
            alt="Acquisition"
          />
        </div>
      </div>
      <div
        style={{ borderRadius: "15px" }}
        className="row px-lg-3 px-3 py-lg-0 py-4  d-flex flex-column flex-lg-row  p-lg-3   mt-3"
      >
        <div className="col d-lg-flex align-items-center col-lg-6 col-xl-4 p-3 ">
          <img
            style={{ borderRadius: "15px" }}
            className="img-fluid"
            src={rentimg}
            alt="Rental"
          />
        </div>
        <div className="col p-lg-3 px-lg-0 px-3 p-3">
          <p style={{ fontSize: "25px" }} className="text-start maincolor">
            <b>Lease and Rental Agreements</b>
          </p>
          <p style={{ textAlign: "justify", fontSize: "19px" }}>
            We handle all aspects of lease and rental agreements, ensuring that
            both landlords and tenants are protected and that all statutory
            requirements are met
          </p>
        </div>
      </div>
      <div
        style={{ borderRadius: "15px" }}
        className="row px-lg-3 px-3 py-lg-0 py-4  d-flex flex-column-reverse subcolor flex-lg-row  p-lg-3   mt-3"
      >
        <div className="col p-lg-3 px-lg-0 px-3 p-3">
          <p style={{ fontSize: "25px" }} className="text-start maincolor">
            <b>Property Tax and Stamp Duty Advice</b>
          </p>
          <p style={{ textAlign: "justify", fontSize: "19px" }}>
            We provide guidance on property tax assessments, stamp duty, and
            related tax matters to ensure that your real estate transactions are
            compliant with tax regulations.
          </p>
        </div>
        <div className="col d-lg-flex align-items-center col-lg-6 col-xl-4 p-3 ">
          <img
            style={{ borderRadius: "15px" }}
            className="img-fluid"
            src={taximg}
            alt="Property"
          />
        </div>
      </div>
      <div
        style={{ borderRadius: "15px" }}
        className="row px-lg-3 px-3 py-lg-0 py-4  d-flex flex-column flex-lg-row  p-lg-3   mt-3"
      >
        <div className="col d-lg-flex align-items-center col-lg-6 col-xl-4 p-3 ">
          <img
            style={{ borderRadius: "15px" }}
            className="img-fluid"
            src={tortimg}
            alt="Arbitration"
          />
        </div>
        <div className="col p-lg-3 px-lg-0 px-3 p-3">
          <p style={{ fontSize: "25px" }} className="text-start maincolor">
            <b>Real Estate Litigation and Arbitration</b>
          </p>
          <p style={{ textAlign: "justify", fontSize: "19px" }}>
            Our team represents clients in real estate-related litigation,
            including disputes over ownership, possession, and inheritance of
            property. We also handle arbitration proceedings for out-of-court
            resolutions.
          </p>
        </div>
      </div>
      <div style={{borderRadius:'15px'}} className="row mt-2 px-lg-0 px-3 mt-lg-5 subcolor  py-4  py-lg-3 py-4 subcolor">
        <p className="maincolor" style={{ fontSize: "25px" }}>
          <b>Our Moto</b>
        </p>
        <div className="col px-3">
          <p style={{ textAlign: "justify" }}>
            At Highbrows Legal, we are committed to providing reliable and
            transparent legal services in real estate matters, ensuring that
            every transaction and dispute is handled with the utmost care, legal
            expertise, and clear legal opinions for informed decision-making
          </p>
        </div>
      </div>
    </div>
  );
};

export default RealEstateContent;
