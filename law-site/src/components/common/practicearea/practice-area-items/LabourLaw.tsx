import "../../../style/practice-area-styles/PracticeCommon.css";
import labourimg from "../../../../assets/practice-area-images/Labour-Law.jpg";

function LabourLaw() {
  return (
    <div className="container-fluid">
      <div className="row">
        <p className="" style={{ fontSize: "30px" }}>
          <b>Labour Law</b>{" "}
        </p>
      </div>
      <div className="row d-flex flex-column flex-lg-row flex-md-column">
        <div className="col">
          <p style={{ fontSize: "17px", textAlign: "justify"  }}>
            Labor law in India and Tamil Nadu can be intricate, requiring both
            strategic advice and precise legal actions. Our firm specializes in
            addressing a wide range of labor-related issues, from employment
            contracts to disputes over wages and working conditions. We work
            closely with both employers and employees to ensure compliance with
            regulations while protecting your rights. With our deep
            understanding of labor law, we aim to resolve conflicts efficiently
            and ensure fair treatment for all parties involved.
          </p>
        </div>
        <div className="col">
          <div>
            <img className="img-thumbnail" src={labourimg} alt="labour" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LabourLaw;
