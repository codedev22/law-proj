import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass,faPaperPlane,faBank,faPeopleRoof,faPeopleGroup,faAward} from '@fortawesome/free-solid-svg-icons';

import "../../style/landingpage-styles/AboutFirm.css";
function AboutFirm() {
  return (
    <div className="container-fluid p-3 d-flex flex-wrap ">
      <div style={{boxShadow:'0px 0px 5px 0px'}} className='row d-flex '>

      <div className="col p-5">
        <p style={{fontSize:'20px'}}>Start New Case</p>
        <p style={{fontSize:'35px'}}> <b>How it Works?</b> </p>
        <div className="case-div ">
          <ul style={{ listStyle: "none" }}>
            <li className="p-2 ">
            <FontAwesomeIcon className='plane-icon1' style={{height:'60px',opacity:'0.1'}} icon={faPaperPlane}/>
            <FontAwesomeIcon className='plane-icon2' style={{height:'25px'}} icon={faPaperPlane}/>
                
              
             <p style={{fontSize:'20px'}}> Send Your Request</p>
              <p className='' style={{ opacity: "0.4" }}>
                {" "}
                Complete the consultation form and share your details.{" "}
              </p>
            </li>
            <li className="p-2 request-list ">
            <FontAwesomeIcon className='glass-icon1' style={{height:'60px',opacity:'0.1'}} icon={faMagnifyingGlass}/>
            <FontAwesomeIcon className='glass-icon2' style={{height:'25px'}} icon={faMagnifyingGlass}/>
              <p style={{fontSize:'20px'}}>Case Analysis</p>
              <p style={{ opacity: "0.4" }}>
                Research and prepare case details
              </p>
            </li>
            <li className="p-2 ">
            <FontAwesomeIcon className='bank-icon1' style={{height:'60px',opacity:'0.1'}} icon={faBank}/>
            <FontAwesomeIcon className='bank-icon2' style={{height:'25px'}} icon={faBank}/>
             <p style={{fontSize:'20px'}}> Case Filing</p>
            
              <p style={{ opacity: "0.4" }}>
                Initiate legal proceedings in Tamil Nadu and other state courts.{" "}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="col p-5">
        <p style={{fontSize:'20px'}}>About the Firm </p>
        <p style={{fontSize:'35px'}}> <b>Our History</b> </p>

        <div className="case-div">
          <ul style={{ listStyle: "none" }}>
            <li className="p-2 ">
            <FontAwesomeIcon className='found-icon' style={{height:'60px'}}  icon={faPeopleRoof}/>

             <p style={{fontSize:'20px'}}>2017 – Founded with a Vision</p> 
              <p>
                We began our journey in 2017, dedicated to providing
                comprehensive legal solutions for individuals and businesses,
                building a foundation of trust and integrity.{" "}
              </p>
            </li>
            <li className="p-2 ">
            <FontAwesomeIcon className='legacy-icon' style={{height:'60px'}}  icon={faPeopleGroup}/>
            
              <p style={{fontSize:'20px'}}>2020 – A Growing Legacy</p>
              <p>
                With years of experience, we proudly served hundreds of
                satisfied clients, offering personalized legal assistance and
                fostering long-term relationships.{" "}
              </p>
            </li>
            <li className="p-2 ">
            <FontAwesomeIcon className='award-icon' style={{height:'60px'}}  icon={faAward}/>
            
             <p style={{fontSize:'20px'}}>2024 – Excellence in Every Case</p> 
              <p>
                Having achieved numerous successful outcomes, our efficient
                processes and meticulous approach ensure smooth case handling
                and client satisfaction.
              </p>
            </li>
          </ul>
        </div>
      </div>
      </div>

    </div>
  );
}

export default AboutFirm;
