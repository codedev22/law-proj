import "../../../style/practice-area-styles/PracticeCommon.css";
import famimg from "../../../../assets/practice-area-images/family-law.jpg";

function FamilyLaw() {
  return (
    <div className="container-fluid">
      <div className="row">
        <p style={{ fontSize: "30px" }}>
          <b>Family Law</b>{" "}
        </p>
      </div>
      <div className="row d-flex flex-column flex-lg-row flex-md-column">
        <div className="col">
          <p style={{ fontSize: "20px", textAlign: "justify"  }}>
            At our firm, we understand that family matters require a delicate
            approach. Our family law services in India and Tamil Nadu focus on
            resolving disputes with empathy and expertise. We assist with
            divorce proceedings, child custody cases, inheritance issues, and
            more, always aiming for the best possible outcome for you and your
            loved ones. With years of experience, we ensure that your personal
            matters are handled with care and legal precision.
          </p>
        </div>
        <div className="col">
          <div>
            <img className="img-thumbnail" src={famimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FamilyLaw;
