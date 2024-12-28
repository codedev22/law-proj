import "../../style/landingpage-styles/LandingPage.css";
import specialimg1 from "../../../assets/images/special1.jpeg";
import specialimg2 from "../../../assets/images/special2.jpeg";
import specialimg3 from "../../../assets/images/special3.jpeg";
import specialimg4 from "../../../assets/images/special4.jpeg";
function Specialization() {
  
  return (
    <div className="container-fluid">
      <div className="row  d-flex gap-4 px-lg-0 px-1  mt-4 flex-column flex-lg-row ">
        <div className="col d-flex justify-content-center align-items-center">
          <img style={{borderRadius:'15px' , boxShadow:"0px 0px 5px 1px"}}
            className="hover-effect img-fluid position-relative"
            src={specialimg1}
            alt="clientimg1"
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
            alt="clientimg2"
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
            alt="clientimg3"
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
            alt="clientimg4"
          />
          <p
            style={{ fontSize: "25px" }}
            className=" text-center text-light position-absolute "
          >
            <b>Specialize <br /> in all INDIAN Courts </b>
          </p>
        </div>
       
      </div>
    </div>
  );
}

export default Specialization;
