import disputeimg from "../../../../assets/mainpracticearea/mortgageclaimsimage/resolvingmortgage.jpeg";
import loanimg from "../../../../assets/mainpracticearea/mortgageclaimsimage/loanrecovery.jpeg";
import unfairimg from "../../../../assets/mainpracticearea/mortgageclaimsimage/unfairforeclosures.jpeg";
import ownerimg from "../../../../assets/mainpracticearea/mortgageclaimsimage/propertyownership.jpeg";
import legalimg from "../../../../assets/mainpracticearea/mortgageclaimsimage/legalforums.jpeg";
import mortgageimg from "../../../../assets/mainpracticearea/mortgageclaimsimage/aggrement.jpeg";

import bglogo from "../../../../assets/images/smalllogo.svg";

const MortgageClaimsContent = () => {
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
            src={disputeimg}
            alt=""
          />
        </div>

        <div className="col p-lg-3 px-lg-0 px-lg-0 px-3 p-3">
          <p style={{ fontSize: "25px" }} className="text-start maincolor">
            <b>Resolving Mortgage Disputes</b>
          </p>
          <p className="" style={{ textAlign: "justify", fontSize: "19px" }}>
            Disputes between lenders and borrowers can be challenging. We aim to
            mediate and resolve conflicts effectively, ensuring our clients’
            interests are upheld
          </p>
        </div>
      </div>
      <div
        style={{ borderRadius: "15px" }}
        className="row px-lg-3 px-3 py-lg-0 py-4  subcolor p-lg-3 text-lg-center mt-3  d-flex flex-column-reverse flex-lg-row"
      >
        <div className="col p-lg-3 px-lg-0 px-3 p-3">
          <p style={{ fontSize: "25px" }} className="text-start maincolor">
            <b>Legal Action for Loan Recovery</b>
          </p>
          <p className="" style={{ textAlign: "justify", fontSize: "19px" }}>
            For lenders seeking recovery of secured loans, we initiate legal
            proceedings or alternative mechanisms to recover debts while
            adhering to statutory frameworks.
          </p>
        </div>
        <div className="col d-lg-flex align-items-center col-lg-6 col-xl-4 p-3 ">
          <img
            style={{ borderRadius: "15px" }}
            className="img-fluid"
            src={loanimg}
            alt=""
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
            src={unfairimg}
            alt=""
          />
        </div>
        <div className="col p-lg-3 px-lg-0 px-3 p-3">
          <p style={{ fontSize: "25px" }} className="text-start maincolor">
            <b>Protecting Against Unfair Foreclosures</b>
          </p>
          <p className="" style={{ textAlign: "justify", fontSize: "19px" }}>
            Facing foreclosure due to procedural violations or unjust practices?
            We challenge such actions, safeguarding your property rights with a
            strategic approach.
          </p>
        </div>
      </div>

      <div
        style={{ borderRadius: "15px" }}
        className="row px-lg-3 px-3 py-lg-0 py-4  subcolor  d-flex flex-column-reverse flex-lg-row p-lg-3 text-lg-center mt-3 "
      >
        <div className="col p-lg-3 px-lg-0 px-3 p-3">
          <p style={{ fontSize: "25px" }} className="text-start maincolor">
            <b>Property Title and Ownership Matters</b>
          </p>
          <p style={{ textAlign: "justify", fontSize: "19px" }}>
            Ensuring clarity in property titles is essential in mortgage claims.
            We offer legal support in verifying and addressing discrepancies in
            ownership and mortgage documentation.
          </p>
        </div>
        <div className="col d-lg-flex align-items-center col-lg-6 col-xl-4 p-3 ">
          <img
            style={{ borderRadius: "15px" }}
            className="img-fluid"
            src={ownerimg}
            alt=""
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
            src={legalimg}
            alt=""
          />
        </div>
        <div className="col p-lg-3 px-lg-0 px-3 p-3">
          <p style={{ fontSize: "25px" }} className="text-start maincolor">
            <b>Representation Before Legal Forums</b>
          </p>
          <p style={{ textAlign: "justify", fontSize: "19px" }}>
            Our lawyers advocate on behalf of clients in Debt Recovery Tribunals
            (DRTs), civil courts, and appellate forums, ensuring robust
            representation in all legal proceedings
          </p>
        </div>
      </div>
      <div
        style={{ borderRadius: "15px" }}
        className="row px-lg-3 px-3 py-lg-0 py-4  d-flex flex-column-reverse subcolor flex-lg-row  p-lg-3   mt-3"
      >
        <div className="col p-lg-3 px-lg-0 px-3 p-3">
          <p style={{ fontSize: "25px" }} className="text-start maincolor">
            <b>Drafting and Reviewing Mortgage Agreements</b>
          </p>
          <p style={{ textAlign: "justify", fontSize: "19px" }}>
            A well-drafted mortgage agreement minimizes future disputes. We
            assist clients in preparing, reviewing, and negotiating agreements
            with a focus on legal compliance and transparency.
          </p>
        </div>
        <div className="col d-lg-flex align-items-center col-lg-6 col-xl-4 p-3 ">
          <img
            style={{ borderRadius: "15px" }}
            className="img-fluid"
            src={mortgageimg}
            alt=""
          />
        </div>
      </div>
      
      
      <div
        style={{ borderRadius: "15px" }}
        className="row px-lg-0 px-3 subcolor p-lg-2 mt-5 d-flex flex-column flex-lg-row"
      >
        <div className="col  d-flex align-items-center justify-content-center">
          <img
            className="img-fluid position-relative opacity-25"
            src={bglogo}
            alt=""
          />
          <p
            className="maincolor1 px-3 py-3 position-absolute text-center"
            style={{ fontSize: "30px" }}
          >
            {" "}
            <b>
            What  <br />
              <p style={{ fontSize: "45px" }} className="maincolor">
              Sets Us Apart
              </p>
            </b>{" "}
          </p>
        </div>
        <div className="col px-3">
          <div>
            <p style={{ fontSize: "30px" }} className="maincolor">
              {" "}
              <b>Strategic Approach:</b>{" "}
            </p>
            <p style={{ textAlign: "justify" }}>
            Each case is addressed with a tailored strategy, ensuring
            precision and efficiency.
            </p>
          </div>
          <hr
            className="mainbgcolor  "
            style={{ boxShadow: "0px 0px 10px 1px" }}
          />
          <div>
            <p style={{ fontSize: "30px" }} className="maincolor">
              {" "}
              <b>Thorough Documentation Review:</b>{" "}
            </p>
            <p style={{ textAlign: "justify" }}>
            We leave no stone unturned in analyzing
            agreements, transaction histories, and related paperwork.
            </p>
          </div>
          <hr
            className="mainbgcolor"
            style={{ boxShadow: "0px 0px 10px 1px" }}
          />

          <div>
            <p style={{ fontSize: "30px" }} className="maincolor">
              {" "}
              <b>Client-Centric Focus:</b>{" "}
            </p>
            <p style={{ textAlign: "justify" }}>
             We prioritize client interests, offering clear guidance and
            proactive solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-2 px-lg-0 px-3 mt-lg-5 subcolor  py-4  py-lg-3 py-4 subcolor">
        <p className="maincolor" style={{ fontSize: "25px" }}>
          <b>Our Moto</b>
        </p>
        <div className="col px-3">
          <p style={{ textAlign: "justify" }}>
            Mortgage claims can have far-reaching consequences, from financial
            repercussions to property disputes. At Highbrows Legal, we are
            committed to providing clear, reliable, and results-driven legal
            services that secure justice for our clients in every situation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MortgageClaimsContent;
