import "../../style/practice-area-styles/PracticeCommon.css";
function IntellectualPropertyLaw() {
  return (
    <div className="">
      <div className="d-flex flex-wrap justify-content-between row">
        <p className="mx-2" style={{ fontSize: "30px" }}>
          <b>Intellectual Property Law</b>{" "}
        </p>
        <div className="container-fluid d-flex flex-wrap col">
          <div className="mb-3">
            <div
              className="intproperty-img mx-2"
              style={{ width: "250px", height: "150px" ,  boxShadow:'0px 0px 10px 1px' }}
            ></div>
          </div>
          <div className="col mx-2">
            <p style={{fontSize:"20px"}}>
              Intellectual Property Law is essential in protecting your
              innovations, creations, and brand. Our firm specializes in
              securing patents, trademarks, copyrights, and designs in India and
              Tamil Nadu, ensuring your ideas are safeguarded. We assist in
              registration, enforcement, and defending your rights against
              infringement. Whether you’re an entrepreneur or a corporation, we
              provide tailored legal strategies to protect your intellectual
              assets and help you maximize their value..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntellectualPropertyLaw;
