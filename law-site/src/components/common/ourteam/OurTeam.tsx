import img1 from "../../../assets/practice-area-images/Labour-Law.jpg";
import "../../style/common-styles/OurTeam.css";

function OurTeam() {
  return (
    <div className="container-fluid">
      <div className="row d-flex flex-wrap flex-column flex-lg-row flex-md-column">
        <div className="col img-container">
          <img className="img-fluid img-1" src={img1} alt="Labour Law" />
          <p className="img-text text-center"> <p className="fs-3">VIGNESH ANAND</p> <p className="">ADVOCATE / IP ATTORNEY & HEAD</p>  </p>
        </div>
        <div className="col img-container">
          <img className="img-fluid img-1" src={img1} alt="Labour Law" />
          <p className="img-text text-center"><p className="fs-4">NITHYA SOWMYA</p> <p>ADVOCATE/PARTNER/LEGAL CONSULTANT </p> 
          </p>
        </div>
        <div className="col img-container">
          <img className="img-fluid img-1" src={img1} alt="Labour Law" />
          <p className="img-text text-center"> <p className="fs-4">INDHUVADHANA</p> <p> ADVOCATE / LEGAL CONSULTANT </p>
          </p>
        </div>
        <div className="col img-container">
          <img className="img-fluid img-1" src={img1} alt="Labour Law" />
          <p className="img-text text-center"> <p className="fs-4">MOHAMED MUBEEN</p> <p>ADVOCATE</p>  
          </p>
        </div>
        <div className="col img-container">
          <img className="img-fluid img-1" src={img1} alt="Labour Law" />
          <p className="img-text text-center "> <p className="fs-4">DHIVYA BHARATHI</p> <p>LAWYER/ LEGAL RESEARCHER </p> 
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
