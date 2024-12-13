import "../../style/practice-area-styles/PracticeCommon.css";
function LabourLaw() {
  return (
    <div className="">
      <div className="d-flex flex-wrap justify-content-between row">
        <p className="mx-2" style={{ fontSize: "30px" }}>
          <b>Labour Law</b>{" "}
        </p>
        <div className="container-fluid d-flex flex-wrap col">
          <div className="mb-3 mx-2">
            <div
              className="labour-img"
              style={{ width: "250px", height: "150px" ,  boxShadow:'0px 0px 10px 1px'}}
            ></div>
          </div>
          <div className="col mx-2">
            <p style={{fontSize:"20px"}}>
              Labor law in India and Tamil Nadu can be intricate, requiring both
              strategic advice and precise legal actions. Our firm specializes
              in addressing a wide range of labor-related issues, from
              employment contracts to disputes over wages and working
              conditions. We work closely with both employers and employees to
              ensure compliance with regulations while protecting your rights.
              With our deep understanding of labor law, we aim to resolve
              conflicts efficiently and ensure fair treatment for all parties
              involved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LabourLaw;
