import "../../../style/practice-area-styles/PracticeCommon.css";
import corpimg from '../../../../assets/practice-area-images/corporatelegalservce.jpg'
function CorporateLegalServices() {
  return (
    <div className="container-fluid">
      <div className="row">
        <p style={{ fontSize: "30px" }}>
          <b>Corporate Legal Services</b>{" "}
        </p>
        
      </div>
      <div className="row d-flex flex-column flex-lg-row flex-md-column ">
         
          <div className="col">
            <p style={{ fontSize: "17px", textAlign: "justify" }}>
              We offer comprehensive solutions to businesses of all sizes in
              India. From company formation to mergers, acquisitions, and
              compliance, we provide expert legal guidance to help your business
              thrive. Our expert team ensures compliance with all regulatory
              requirements, safeguarding your business interests. Whether it's
              corporate governance, dispute resolution, or advisory services, we
              provide tailored solutions for your company's growth. With deep
              knowledge of local and national legal frameworks, we are committed
              to driving your business forward with legal expertise and
              efficiency.
            </p>
          </div>
          <div className="col">
            <div
              className=""
             
            >
              <img className="img-thumbnail" src={corpimg} alt="corporate" />
            </div>
          </div>
        </div>

    </div>
  );
}

export default CorporateLegalServices;
