import disimg from "../../../../../assets/aboutus/dis.jpg";
function DisputeResolution() {
  return (
    <div className="container-fluid">
      <div className="row">
        <p style={{ fontSize: "30px" }}>
          <b>Dispute Resolution</b>{" "}
        </p>
      </div>
      <div className="row d-flex flex-column   ">
        <div className="col">
          <p style={{ fontSize: "17px", textAlign: "justify" }}>
            Resolving disputes through litigation, arbitration, and mediation
            with efficiency and discretion.
          </p>
        </div>
        <div className="col ">
          <div className="">
            <img className="img-thumbnail" src={disimg} alt="disputeresolution" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisputeResolution;
