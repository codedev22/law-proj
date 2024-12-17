import "../../../style/practice-area-styles/PracticeCommon.css";
import realestateimg from "../../../../assets/practice-area-images/RealEstate.jpg";

function RealEstateLaw() {
  return (
    <div className="container-fluid">
      <div className="row">
        <p  style={{ fontSize: "30px" }}>
          <b>Real Estate Law</b>{" "}
        </p>
      </div>
      <div className="row d-flex flex-column flex-lg-row flex-md-column">
        <div className="col">
          <p style={{ fontSize: "20px", textAlign: "justify"  }}>
            Real estate transactions in India and Tamil Nadu can be complex,
            involving numerous legal considerations. Our firm offers expert
            services in property matters, including drafting and reviewing
            agreements, handling disputes over ownership, title verification,
            and ensuring compliance with local laws. Whether you are buying,
            selling, leasing or renting property, we guide you through the
            entire process, providing clear and reliable legal advice to
            safeguard your investment and resolve any issues efficiently.
          </p>
        </div>
        <div className="col">
          <div>
            <img className="img-thumbnail" src={realestateimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RealEstateLaw;
