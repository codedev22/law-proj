import "../../style/landingpage-styles/LandingPage.css";
import specialimg1 from "../../../assets/images/special1.jpeg";
import specialimg2 from "../../../assets/images/special2.jpeg";
import specialimg3 from "../../../assets/images/special3.jpeg";
import specialimg4 from "../../../assets/images/special4.jpeg";

function Specialization() {
  return (
    <div className="container-fluid ">
      <div className="row d-flex gap-4 px-lg-0 px-1  mt-4 flex-column flex-lg-row ">
        <div className="col d-flex justify-content-center align-items-center">
          <img style={{borderRadius:'15px' , boxShadow:"0px 0px 5px 1px"}}
            className="hover-effect img-fluid position-relative"
            src={specialimg1}
            alt=""
          />
          <p
            style={{ fontSize: "25px" }}
            className=" text-center text-light  position-absolute "
          >
            {" "}
            <b>+Thousand <br /> of  Trusted Client</b>
          </p>
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <img style={{borderRadius:'15px' , boxShadow:"0px 0px 10px 1px"}}
            className="  hover-effect img-fluid position-relative"
            src={specialimg2}
            alt=""
          />
          <p
            style={{ fontSize: "25px" }}
            className=" text-center text-light position-absolute"
          >
            <b>+Thousand <br /> of Successful Cases</b>
          </p>
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <img style={{borderRadius:'15px' , boxShadow:"0px 0px 10px 1px"}}
            className=" hover-effect img-fluid position-relative"
            src={specialimg3}
            alt=""
          />
          <p
            style={{ fontSize: "25px" }}
            className=" text-center text-light position-absolute "
          >
            <b>+Millions <br />of Recovered Money</b>
          </p>
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <img style={{borderRadius:'15px' , boxShadow:"0px 0px 10px 1px"}}
            className="  hover-effect img-fluid position-relative"
            src={specialimg4}
            alt=""
          />
          <p
            style={{ fontSize: "25px" }}
            className=" text-center text-light position-absolute "
          >
            <b>Specialize <br /> in all INDIAN Courts </b>
          </p>
        </div>
        {/* <div 
        style={{height:"300px" ,border:'1px solid'}} 
        className="adv-talk-div col d-flex justify-content-center align-items-center">
            <p style={{fontSize:'25px'}} className=" text-center text-light  "> <b>+Thousand of Trusted Client</b></p>
        </div>
        <div style={{height:"300px", border:'1px solid'}} className="hammer-div col d-flex justify-content-center align-items-center">
        <p style={{fontSize:'25px'}} className=" text-light text-center"><b>+Thousand of Successful Cases</b></p>
        </div>
        <div style={{height:"300px", border:'1px solid'}} className="money-div col  d-flex justify-content-center align-items-center">
        <p style={{fontSize:'25px'}} className="text-center text-light "><b>+Millions of Recovered Money</b></p>
        </div>
        <div style={{height:"300px", border:'1px solid'}} className="adv-grp-div col d-flex justify-content-center align-items-center">
        <p style={{fontSize:'25px'}} className="text-center text-light "><b>Specialize in all INDIAN Courts  </b></p>
        </div> */}
      </div>
    </div>
  );
}

export default Specialization;
