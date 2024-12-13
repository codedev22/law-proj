import "../../style/practice-area-styles/PracticeCommon.css";
function FamilyLaw() {
  return (
    <div className="">
      <div className="d-flex flex-wrap justify-content-between row ">
        <p className="mx-2" style={{ fontSize: "30px" }}>
          <b>Family Law</b>{" "}
        </p>
        <div className="container-fluid d-flex flex-wrap col">
          <div className="mb-3 mx-2">
            <div
              className="family-img"
              style={{ width: "250px", height: "150px" ,  boxShadow:'0px 0px 10px 1px' }}
            ></div>
          </div>
          <div className="col mx-2">
            <p style={{fontSize:"20px"}}>
              At our firm, we understand that family matters require a delicate
              approach. Our family law services in India and Tamil Nadu focus on
              resolving disputes with empathy and expertise. We assist with
              divorce proceedings, child custody cases, inheritance issues, and
              more, always aiming for the best possible outcome for you and your
              loved ones. With years of experience, we ensure that your personal
              matters are handled with care and legal precision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FamilyLaw;
