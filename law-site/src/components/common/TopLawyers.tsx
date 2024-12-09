import img from "../../assets/images/AdvocateTalk.jpg";
import '../style/common-styles/Common.css'
import { DoubleRightOutlined } from "@ant-design/icons";
function TopLawyers() {
  return (
    <div>
      <div className="top-law-div container-fluid d-flex justify-content-center ">
        <div className="img-div p-4 ">
          <img style={{ maxWidth: '100%', display: 'block', height: 'auto', boxSizing: 'border-box' }} src={img} alt="" />
        </div>
        <div className="d-flex flex-wrap top-law-subdiv   ">
          <p style={{fontSize:'40px',textAlign:'justify'}}> <b>Top Recommended</b>  <br /> <b> Lawyers in</b> <br /><b style={{color: "#C7B480"}}>India</b></p>
          <p style={{fontSize:'20px'}}>
            Our clients are our first priority! Our legal services are
            client-focused and client-oriented. We treat our Client’s cases with
            the utmost  professionalism. Focus on achieving the best possible
            results for our clients.
          </p>

          <div className="col">
            <div className="d-flex flex-column">
              <ul
                style={{ fontSize: "20px" }}
                className=" text-start list-unstyled   "
              >
                <li >
                  <DoubleRightOutlined style={{ color: "#C7B480" }} className="mx-1" />
                  Get Your Legal Advice
                </li>
                <li >
                  <DoubleRightOutlined style={{ color: "#C7B480" }} className="mx-1" />
                  Experts Lawyers
                </li>
                <li >
                  <DoubleRightOutlined style={{ color: "#C7B480" }} className="mx-1" />
                  Competitive Fees Rates
                </li>

              </ul>
            </div>
          </div>
          <div className="col">
            <div className=" d-flex flex-column">
              <ul
                style={{ fontSize: "20px" }}
                className=" text-start list-unstyled   "
              >
                <li >
                  <DoubleRightOutlined style={{ color: "#C7B480" }} className="mx-1" />
                  Fighting For Deserved Money
                </li>
                <li >
                  <DoubleRightOutlined style={{ color: "#C7B480" }} className="mx-1" />
                  Get Your Rights Back
                </li>
                <li >
                  <DoubleRightOutlined style={{ color: "#C7B480" }} className="mx-1" />
                  Justice For All

                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopLawyers;
