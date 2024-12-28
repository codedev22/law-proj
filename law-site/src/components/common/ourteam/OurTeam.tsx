import team1img from '../../../assets/ourteam/vignesh.jpg'
import team2img from '../../../assets/ourteam/nithya.jpg'
import team3img from '../../../assets/ourteam/indhuvadhana.jpg'
import team4img from '../../../assets/ourteam/dhivya.jpg'
import "../../style/common-styles/OurTeam.css";

function OurTeam() {
  return (
    <div  className="container-fluid">
      <div className="row gap-3 px-lg-0 px-3 d-flex py-3 flex-column justify-content-lg-center flex-lg-row ">
        <div className="col col-lg-2 img-container">
          <img style={{borderRadius:'15px'}} className="img-fluid img-1" src={team1img} alt="Labour Law" />
          <p className="img-text text-center"> <p className="fs-4">VIGNESH ANAND</p> <p style={{fontSize:'13px'}}>ADVOCATE / IP ATTORNEY & HEAD</p>  </p>
        </div>
        <div className="col col-lg-2  img-container ">
          <img style={{borderRadius:'15px'}} className="img-fluid img-1 " src={team2img} alt="Labour Law" />
          <p className="img-text text-center d-flex flex-column"><p className="fs-4">NITHYA SOWMYA</p> <p style={{fontSize:'13px'}}>ADVOCATE/PARTNER/ <br />LEGAL CONSULTANT </p> 
          </p>
        </div>
        
       
      </div>
      <div className="row px-3  gap-3 d-flex flex-column justify-content-center flex-lg-row ">
      <div className="col col-lg-2 img-container">
          <img style={{borderRadius:'15px'}} className="img-fluid img-1" src={team3img} alt="Labour Law" />
          <p className="img-text text-center"> <p className="fs-4">INDHUVADHANA</p> <p> ADVOCATE / LEGAL CONSULTANT </p>
          </p>
        </div>
        <div className="col col-lg-2 img-container">
          <img style={{borderRadius:'15px'}} className="img-fluid img-1" src={team4img} alt="Labour Law" />
          <p className="img-text text-center "> <p className="fs-4">DHIVYA BHARATHI</p> <p>LAWYER/ LEGAL RESEARCHER </p> 
          </p>
        </div>
         {/* <div className="col col-lg-3  img-container">
          <img style={{borderRadius:'15px'}} className="img-fluid img-1" src={img1} alt="Labour Law" />
          <p className="img-text text-center"> <p className="fs-4">MOHAMED MUBEEN</p> <p>ADVOCATE</p>  
          </p>
        </div> */}

      </div>
    </div>
  );
}

export default OurTeam;
