import "../../style/practice-area-styles/PracticeCommon.css";
function CriminalLaw() {
  return (
    <div className="">
      <div className="d-flex flex-wrap justify-content-between row">
        <p className="mx-2" style={{ fontSize: "30px" }}>
          <b>Criminal Law</b>{" "}
        </p>
        <div className="container-fluid d-flex flex-wrap col">
          <div className="mb-3 mx-2">
            <div
              className="criminal-img"
              style={{ width: "250px", height: "150px", boxShadow:'0px 0px 10px 1px'}}
            ></div>
          </div>
          <div className="col mx-2">
            <p style={{fontSize:"20px"}}>
              Criminal law cases require expert handling, and we provide
              comprehensive legal services throughout every stage of the
              process. In India and Tamil Nadu, our team is equipped to assist
              with critical matters such as bail applications, quashing of
              charges, contempt of court issues, and defending you through
              investigations and trial. We ensure your rights are upheld at
              every stage, from initial arrest to final verdict, providing
              strong representation to secure the best possible outcome for
              you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CriminalLaw;
