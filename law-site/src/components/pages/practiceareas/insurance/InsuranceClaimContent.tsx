import legalimg from "../../../../assets/mainpracticearea/insuranceimages/legaladvice.jpeg";
import productimg from "../../../../assets/mainpracticearea/civilandcommercialimages/ProductLiabilityandConsumerProtection.jpeg";
import casualtyimg from "../../../../assets/mainpracticearea/insuranceimages/casualty.jpeg";
import commercialimg from "../../../../assets/mainpracticearea/civilandcommercialimages/CommercialContractDisputes.jpeg";
import transactionsimg from "../../../../assets/mainpracticearea/civilandcommercialimages/CommercialTransactionsandBusinessDisputes.jpeg";

const InsuranceClaimContent = () => {
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
            src={legalimg}
            alt="Assessment"
          />
        </div>

        <div className="col p-lg-3 px-lg-0 px-lg-0 px-3 p-3">
          <p style={{ fontSize: "25px" }} className="text-start maincolor">
            <b>Legal Advice and Claim Assessment</b>
          </p>
          <p className="" style={{ textAlign: "justify", fontSize: "19px" }}>
            Our experts provide thorough legal opinions on complex insurance
            claims. We assess the policy terms, claim documentation, and
            eligibility, guiding you through the process to ensure your claims
            are filed correctly and with the best chance for success.
          </p>
        </div>
      </div>
      <div
        style={{ borderRadius: "15px" }}
        className="row px-lg-3 px-3 py-lg-0 py-4  subcolor p-lg-3 text-lg-center mt-3  d-flex flex-column-reverse flex-lg-row"
      >
        <div className="col p-lg-3 px-lg-0 px-3 p-3">
          <p style={{ fontSize: "25px" }} className="text-start maincolor">
            <b>Life, Health, and Personal Injury Claims</b>
          </p>
          <p className="" style={{ textAlign: "justify", fontSize: "19px" }}>
            We handle life insurance claims for beneficiaries, address disputes
            over policyholder death, and represent clients in health and
            personal injury insurance claims. We help resolve issues related to
            wrongful denial, non-coverage, and ensure timely reimbursement for
            medical expenses, treatment costs, and compensation for injuries.
          </p>
        </div>
        <div className="col d-lg-flex align-items-center col-lg-6 col-xl-4 p-3 ">
          <img
            style={{ borderRadius: "15px" }}
            className="img-fluid"
            src={productimg}
            alt="Claims"
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
            src={casualtyimg}
            alt="Property"
          />
        </div>
        <div className="col p-lg-3 px-lg-0 px-3 p-3">
          <p style={{ fontSize: "25px" }} className="text-start maincolor">
            <b> Property and Casualty Insurance Claims</b>
          </p>
          <p className="" style={{ textAlign: "justify", fontSize: "19px" }}>
            Our team helps clients with property damage, vehicle accidents, and
            casualty claims. We ensure that insurers properly assess damages and
            expedite the claim process, securing compensation for your losses in
            the event of fire, accidents, or other propertyrelated incidents.
          </p>
        </div>
      </div>

      <div
        style={{ borderRadius: "15px" }}
        className="row px-lg-3 px-3 py-lg-0 py-4  subcolor  d-flex flex-column-reverse flex-lg-row p-lg-3 text-lg-center mt-3 "
      >
        <div className="col p-lg-3 px-lg-0 px-3 p-3">
          <p style={{ fontSize: "25px" }} className="text-start maincolor">
            <b>Third-Party Liability and Insurance Fraud</b>
          </p>
          <p style={{ textAlign: "justify", fontSize: "19px" }}>
            We assist clients with third-party liability claims, ensuring that
            insurance policies cover the necessary damages and losses. In cases
            of insurance fraud or misrepresentation, we defend clients against
            wrongful accusations and disputes, ensuring transparency and
            fairness in the claims process.
          </p>
        </div>
        <div className="col d-lg-flex align-items-center col-lg-6 col-xl-4 p-3 ">
          <img
            style={{ borderRadius: "15px" }}
            className="img-fluid"
            src={commercialimg}
            alt="Liability"
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
            src={transactionsimg}
            alt="Litigation"
          />
        </div>
        <div className="col p-lg-3 px-lg-0 px-3 p-3">
          <p style={{ fontSize: "25px" }} className="text-start maincolor">
            <b>Litigation and Alternative Dispute Resolution</b>
          </p>
          <p style={{ textAlign: "justify", fontSize: "19px" }}>
            We represent clients in litigation against insurers who fail to
            honor their policies and take legal action to recover owed
            compensation. Additionally, we facilitate dispute resolution through
            arbitration, helping clients settle claims efficiently without
            prolonged court battles.
          </p>
        </div>
      </div>
      <div style={{borderRadius:"15px"}} className="row mt-2 px-lg-0 px-3 mt-lg-5 subcolor  py-4  py-lg-3 py-4 subcolor">
        <p className="maincolor" style={{ fontSize: "25px" }}>
          <b>Our Moto</b>
        </p>
        <div className="col px-3">
          <p style={{ textAlign: "justify" }}>
            At Highbrows Legal, we focus on delivering comprehensive legal
            support for all insurancerelated matters. Our team ensures your
            claims are processed with integrity, efficiency, and a clear legal
            strategy that prioritizes your rights and ensures fair compensation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InsuranceClaimContent;
