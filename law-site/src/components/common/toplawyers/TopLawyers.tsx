import "../../style/common-styles/Common.css";
import { DoubleRightOutlined } from "@ant-design/icons";
function TopLawyers() {
  return (
    <div>
      <div className="container-fluid  p-0   ">
        <div className="row px-lg-1 px-3 mt-5 ">
          <h1>
            {" "}
            <b>
              Recognized <b style={{ color: "#BF976C" }}>Advocates</b> and{" "}
              <b className="text-danger">
                {" "}
                <b style={{ color: "#BF976C" }}>Lawyers</b>
              </b>
            </b>{" "}
            <b> for Excellence in</b> <br />
            <b>Tamil Nadu and All over India</b>
          </h1>
          <p style={{ fontSize: "20px", textAlign: "justify" }}>
            With professionalism at our core, we prioritize our clients' welfare
            through trust, transparency, and personalized attention. Our
            tailored legal strategies are designed to protect your rights and
            deliver the best outcomes. Your success is not just our goal— it’s
            our mission.
          </p>
        </div>
        <div className="row px-lg-1 px-3 d-flex flex-column justify-content-lg-center flex-lg-row flex-md-column ">
          <div className="col col-lg-4 ">
            <ul
              style={{ fontSize: "20px" }}
              className=" text-start list-unstyled   "
            >
              <li>
                <DoubleRightOutlined
                  style={{ color: "#BF976C" }}
                  className="mx-1"
                />
                Trusted Legal Guidance Here
              </li>
              <li>
                <DoubleRightOutlined
                  style={{ color: "#BF976C" }}
                  className="mx-1"
                />
                Experienced Advocates for You
              </li>
              <li>
                <DoubleRightOutlined
                  style={{ color: "#BF976C" }}
                  className="mx-1"
                />
                Affordable Legal Solutions
              </li>
            </ul>
          </div>
          <div className="col col-lg-4">
            <ul
              style={{ fontSize: "20px" }}
              className=" text-start list-unstyled   "
            >
              <li>
                <DoubleRightOutlined
                  style={{ color: "#BF976C" }}
                  className="mx-1"
                />
                Claim What's Rightfully Yours
              </li>
              <li>
                <DoubleRightOutlined
                  style={{ color: "#BF976C" }}
                  className="mx-1"
                />
                Restoring Justice, Securing Rights
              </li>
              <li>
                <DoubleRightOutlined
                  style={{ color: "#BF976C" }}
                  className="mx-1"
                />
                Defenders of Fair Justice
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopLawyers;
