import businessimg from "../../../../assets/mainpracticearea/corporatelegalimages/businessformationimg.jpeg";
import mergeimg from "../../../../assets/mainpracticearea/corporatelegalimages/mergers.jpeg";
import corpgovimg from "../../../../assets/mainpracticearea/corporatelegalimages/corporategovernence.jpeg";
import draftimg from "../../../../assets/mainpracticearea/corporatelegalimages/ContractDraftingandNegotiation.jpeg";
import emplawimg from "../../../../assets/mainpracticearea/corporatelegalimages/employmentlawcomplaiance.jpeg";
import bankimg from "../../../../assets/mainpracticearea/corporatelegalimages/BankingandFinance.jpeg";
import disputeimg from "../../../../assets/mainpracticearea/corporatelegalimages/DisputeResolution.jpeg";
const CorporateContent = () => {
  return (
    <div>
      <div
        className="row py-lg-0 py-4   p-lg-3 text-lg-center d-flex flex-column flex-lg-row "
      >
        
        <div className="col col-lg-4 mt-lg-4 px-3">
          <img style={{borderRadius:'15px'}} className="img-fluid" src={businessimg} alt="" />
        </div>

        <div className="col  p-lg-3 px-lg-0 px-3  p-3">
          <p style={{ fontSize: "25px" }} className="text-start maincolor">
           <b>Business Formation and Structuring</b> 
          </p>
          <p className="" style={{ textAlign: "justify", fontSize: "19px" }}>
            The foundation of any successful business lies in its legal
            structure. We assist clients in choosing the optimal business
            structure—whether sole proprietorship, partnership, corporation, or
            limited liability company (LLC)—ensuring compliance with all
            applicable laws and helping minimize personal liability. Our team
            provides in-depth advice on the legal considerations that come with
            each type of business entity.
          </p>
        </div>
      </div>
      <div
        style={{ borderRadius: "15px" }}
        className="row py-lg-0 py-4 subcolor p-lg-3 text-lg-center mt-3  d-flex flex-column-reverse flex-lg-row"
      >
        <div className="col p-lg-3 px-lg-0 px-3 p-3 ">
          <p style={{ fontSize: "25px" }} className="text-start maincolor">
            {" "}
            <b>Mergers and Acquisitions</b> 
          </p>
          <p className="" style={{ textAlign: "justify", fontSize: "19px" }}>
            Our firm has significant experience in handling mergers,
            acquisitions, and corporate restructuring. We provide end-to-end
            support, including due diligence, structuring, negotiation, and
            post-transaction integration, ensuring that the deal is both legally
            sound and aligned with your strategic goals.
          </p>
        </div>
        <div className="col col-lg-4 mt-lg-4 px-3  ">
          <img style={{borderRadius:'15px'}} className="img-fluid" src={mergeimg} alt="" />
        </div>
      </div>

      <div
        className="row py-lg-0 py-4  d-flex flex-column flex-lg-row   p-lg-3 text-lg-center mt-3 "
      >
        <div className="col col-lg-4 mt-lg-4 px-3 ">
          <img style={{borderRadius:'15px'}} className="img-fluid" src={corpgovimg} alt="" />
        </div>
        <div className="col p-lg-3 px-lg-0 px-3 p-3">
          <p style={{ fontSize: "25px" }} className="text-start maincolor"><b>Corporate Governance</b></p>
          <p className="" style={{ textAlign: "justify", fontSize: "19px" }}>
            Ensuring proper corporate governance is crucial for businesses to
            maintain legal compliance and build trust with stakeholders. We
            provide counsel on establishing effective governance frameworks,
            drafting shareholder agreements, advising on board member duties,
            and ensuring transparency and accountability in corporate operations
          </p>
        </div>
      </div>

      <div
        style={{ borderRadius: "15px" }}
        className="row py-lg-0 py-4  subcolor  d-flex flex-column-reverse flex-lg-row p-lg-3 text-lg-center mt-3 "
      >
        <div className="col p-lg-3 px-lg-0 px-3 p-3">
          <p style={{ fontSize: "25px" }} className="text-start maincolor">
           <b>Contract Drafting and Negotiation</b> 
          </p>
          <p style={{ textAlign: "justify", fontSize: "19px" }}>
            Well-drafted contracts are essential to safeguarding your business
            interests. Our attorneys specialize in drafting and negotiating
            clear, enforceable contracts tailored to your business needs,
            including supplier agreements, joint venture contracts, service
            agreements, and more. We help minimize risks by addressing potential
            legal issues upfront.
          </p>
        </div>
        <div className="col col-lg-4 mt-lg-4 px-3 ">
          <img style={{borderRadius:'15px'}} className="img-fluid" src={draftimg} alt="" />
        </div>
      </div>
      <div
        className="row py-lg-0 py-4   d-flex flex-column flex-lg-row  p-lg-3   mt-3"
      >
        <div className="col col-lg-4 mt-lg-4 px-3 ">
          <img style={{borderRadius:'15px'}} className="img-fluid" src={emplawimg} alt="" />
        </div>
        <div className="col p-lg-3 px-lg-0 px-3 p-3">
          <p style={{ fontSize: "25px" }} className="text-start maincolor"><b>Employment Law Compliance</b></p>
          <p style={{ textAlign: "justify", fontSize: "19px" }}>
            Employment issues can impact your company’s reputation and
            productivity. We offer advice on employment law matters, including
            employee rights, workplace policies, compliance with labor laws, and
            dispute resolution. Our firm helps employers create legally
            compliant practices that foster a positive working environment and
            prevent litigation.
          </p>
        </div>
      </div>
      <div
        style={{ borderRadius: "15px" }}
        className="row py-lg-0 py-4  d-flex flex-column-reverse subcolor flex-lg-row   p-lg-3   mt-3"
      >
        <div className="col p-lg-3 px-lg-0 px-3 p-3">
          <p style={{ fontSize: "25px" }} className="text-start maincolor"><b>Banking and Finance</b></p>
          <p style={{ textAlign: "justify", fontSize: "19px" }}>
            Navigating banking and financial regulations is critical to ensuring
            your business remains compliant and financially stable. We provide
            guidance on loan agreements, financing, regulatory issues, and risk
            management, ensuring that your business is wellequipped to handle
            financial challenges.
          </p>
        </div>
        <div className="col col-lg-4 mt-lg-4 px-3 ">
          <img style={{borderRadius:'15px'}} className="img-fluid" src={bankimg} alt="" />
        </div>
      </div>
      <div
        className="row py-lg-0 py-4  d-flex flex-column flex-lg-row  p-lg-3   mt-3"
      >
        <div className="col col-lg-4 mt-lg-4 px-3 ">
          <img style={{borderRadius:'15px'}} className="img-fluid" src={disputeimg} alt="" />
        </div>
        <div className="col p-lg-3 px-lg-0 px-3 p-3">
          <p style={{ fontSize: "25px" }} className="text-start maincolor"><b>Dispute Resolution</b></p>
          <p style={{ textAlign: "justify", fontSize: "19px" }}>
            Corporate disputes, whether between partners, shareholders, or
            clients, can significantly disrupt operations. Our firm offers
            robust dispute resolution strategies, including arbitration and
            mediation, helping businesses resolve conflicts efficiently while
            minimizing disruption. When litigation is unavoidable, we are
            prepared to protect your interests in court.
          </p>
        </div>
      </div>
      <div style={{borderRadius:'15px'}} className="row mt-2 mt-lg-5 subcolor py-lg-3 py-4 ">
        <p className="maincolor" style={{fontSize:"25px"}}><b>Our Moto</b></p>
        <div className="col px-3">
          <p style={{textAlign:'justify'}}>
            At Highbrows Legal, we believe that your business deserves the best
            legal protection. Our corporate law specialists work closely with
            you to understand your goals, anticipate challenges, and provide
            solutions that promote long-term growth and stability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CorporateContent;
