import "../../../style/practice-area-styles/PracticeCommon.css";
import debtimg from "../../../../assets/practice-area-images/debt-recovery.jpg";

function DebtRecoveryLaw() {
  return (
    <div className="container-fluid">
      <div className="row">
        <p style={{ fontSize: "30px" }}>
          <b>Debt Recovery Law</b>
        </p>
      </div>

      <div className="row d-flex flex-column flex-lg-row flex-md-column">
        <div className="col">
          <p style={{ fontSize: "17px", textAlign: "justify"  }}>
            We specialize in delivering reliable legal solutions for all your
            real estate needs. From title verification and property registration
            to dispute resolution and compliance, our services cover every
            aspect of real estate law in India and Tamil Nadu. Whether you are
            buying, selling, or leasing property, we ensure a seamless process
            while safeguarding your interests. Trust us to protect your
            investments with precision and expertise.
          </p>
        </div>
        <div className="col">
          <div>
            <img className="img-thumbnail" src={debtimg} alt="debt" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DebtRecoveryLaw;
