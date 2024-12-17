import "../../../style/practice-area-styles/PracticeCommon.css";
import propertyimg from "../../../../assets/practice-area-images/intellectual-property.jpeg";

function IntellectualPropertyLaw() {
  return (
    <div className="container-fluid">
      <div className="row">
        <p className="" style={{ fontSize: "30px" }}>
          <b>Intellectual Property Law</b>{" "}
        </p>
      </div>
      <div className="row d-flex flex-column flex-lg-row flex-md-column">
        <div className="col">
          <p style={{ fontSize: "20px", textAlign: "justify"  }}>
            Intellectual Property Law is essential in protecting your
            innovations, creations, and brand. Our firm specializes in securing
            patents, trademarks, copyrights, and designs in India and Tamil
            Nadu, ensuring your ideas are safeguarded. We assist in
            registration, enforcement, and defending your rights against
            infringement. Whether you’re an entrepreneur or a corporation, we
            provide tailored legal strategies to protect your intellectual
            assets and help you maximize their value..
          </p>
        </div>
        <div className="col">
          <div>
            <img className="img-thumbnail" src={propertyimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntellectualPropertyLaw;
