import "../../style/practice-area-styles/PracticeCommon.css";
function CorporateLegalServices() {
  return (
    <div  className="">
      <div className="d-flex flex-wrap justify-content-between row ">
        <p className="mx-2" style={{ fontSize: "30px" }}>
        <b>Corporate Legal Services</b>{" "}

          {" "}
        </p>
        <div   className="container-fluid d-flex flex-wrap col  ">
        <div className="mx-2 ">
            <div
              className="corporate-img "
              style={{ width: "230px", height: "150px" , boxShadow:'0px 0px 10px 1px'}}
            ></div>
          </div>
          <div  className=" col mx-2">
            <p style={{fontSize:"20px"}}>
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
         
        </div>
          
        
      </div>
    </div>
  );
}

export default CorporateLegalServices;
