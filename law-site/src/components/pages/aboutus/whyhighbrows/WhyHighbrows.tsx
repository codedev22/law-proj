import bglogo from '../../../../assets/images/smalllogo.svg'

const WhyHighbrows = () => {
  return (
       <div style={{borderRadius:'15px'}} className="row px-lg-0 px-3 subcolor p-lg-2 mt-5 d-flex flex-column flex-lg-row">
          <div className="col  d-flex align-items-center justify-content-center">
            <img className="img-fluid position-relative opacity-25" src={bglogo} alt="sublogo" />
             <p
              className="maincolor1 px-3 py-3 position-absolute text-center"
              style={{ fontSize: "30px" }}
            >
              {" "}
              <b>
                Why  Choose <br />
              <p style={{ fontSize: "50px" }} className="maincolor"> Highbrows Legal?</p>  
              </b>{" "}
            </p> 
          </div>
          <div className="col px-3">
            <div>
              <p style={{ fontSize: "30px" }} className="maincolor">
                {" "}
                <b>Expertise</b>{" "}
              </p>
              <p style={{textAlign:'justify'}}>
                Our team is comprised of seasoned professionals with a proven
                record of success across diverse legal fields.
              </p>
            </div>
            <hr
              className="mainbgcolor  "
              style={{ boxShadow: "0px 0px 10px 1px" }}
            />
            <div>
              <p style={{ fontSize: "30px" }}  className="maincolor">
                {" "}
                <b>Integrity</b>{" "}
              </p>
              <p style={{textAlign:'justify'}}>
                Upholding the highest ethical standards, we ensure complete
                transparency and fairness in every matter.
              </p>
            </div>
            <hr
              className="mainbgcolor"
              style={{ boxShadow: "0px 0px 10px 1px" }}
            />

            <div>
              <p style={{ fontSize: "30px" }} className="maincolor">
                {" "}
                <b>Dedication</b>{" "}
              </p>
              <p style={{textAlign:'justify'}}>
                Your case isn’t just another file—it’s our priority. We’re
                committed to achieving the best outcomes for you.
              </p>
            </div>
            <hr
              className="mainbgcolor"
              style={{ boxShadow: "0px 0px 10px 1px" }}
            />

            <div>
              <p style={{ fontSize: "30px" }} className="maincolor">
                {" "}
                <b>Excellence</b>{" "}
              </p>
              <p style={{textAlign:'justify'}}>
                We go above and beyond to set new benchmarks in legal
                representation and client service.
              </p>
            </div>
            <hr
              className="mainbgcolor"
              style={{ boxShadow: "0px 0px 10px 1px" }}
            />

            <div>
              <p style={{ fontSize: "30px" }} className="maincolor">
                {" "}
                <b>Reliability</b>
              </p>
              <p style={{textAlign:'justify'}}>
                Count on us for steadfast support, timely communication, and
                unwavering focus on your success.
              </p>
            </div>
          </div>
        </div>
  )
}

export default WhyHighbrows
