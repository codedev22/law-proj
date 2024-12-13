import "../../style/practice-area-styles/PracticeCommon.css";
function DebtRecoveryLaw() {
  return (
    <div className="">
      <div className="d-flex flex-wrap justify-content-between row">
        <p className="mx-2"  style={{ fontSize: "30px" }}>
          <b>Debt Recovery Law</b>
        </p>
        <div className="container-fluid d-flex flex-wrap col">
          <div className="mb-3 mx-2">
            <div
              className="debt-img"
              style={{ width: "250px", height: "150px",  boxShadow:'0px 0px 10px 1px'}}
            ></div>
          </div>
          <div className="col mx-2">
            <p style={{fontSize:"20px"}}>
              We specialize in delivering reliable legal solutions for all your
              real estate needs. From title verification and property
              registration to dispute resolution and compliance, our services
              cover every aspect of real estate law in India and Tamil Nadu.
              Whether you are buying, selling, or leasing property, we ensure a
              seamless process while safeguarding your interests. Trust us to
              protect your investments with precision and expertise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DebtRecoveryLaw;
