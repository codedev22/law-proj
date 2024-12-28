import "../../../style/practice-area-styles/PracticeCommon.css";
import criminalimg from "../../../../assets/practice-area-images/criminallaw.jpg";

function CriminalLaw() {
  return (
    <div className="container-fluid">
      <div className="row">
        <p className="" style={{ fontSize: "30px" }}>
          <b>Criminal Law</b>{" "}
        </p>
      </div>
      <div className="row d-flex flex-column flex-lg-row flex-md-column">
        <div className="col">
          <p style={{ fontSize: "17px", textAlign: "justify"  }}>
            Criminal law cases require expert handling, and we provide
            comprehensive legal services throughout every stage of the process.
            In India and Tamil Nadu, our team is equipped to assist with
            critical matters such as bail applications, quashing of charges,
            contempt of court issues, and defending you through investigations
            and trial. We ensure your rights are upheld at every stage, from
            initial arrest to final verdict, providing strong representation to
            secure the best possible outcome for you.
          </p>
          
        </div>
        <div className="col">
            <div className="">
              <img className="img-thumbnail" src={criminalimg} alt="criminal" />
            </div>
          </div>
      </div>
    </div>
  );
}

export default CriminalLaw;
