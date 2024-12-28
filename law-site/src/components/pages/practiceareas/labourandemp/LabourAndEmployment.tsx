import LabourAndEmploymentContent from "./LabourAndEmploymentContent";
import labourempbanner from '../../../../assets/mainpracticearea/banner/labourandempbanner.png'
const LabourAndEmployment = () => {
  return (
    <div>
      <div className="w-100">
        <img src={labourempbanner} className="img-fluid w-100" alt="" />
      </div>
      <div className=" container-lg container-fluid py-lg-5 py-4">
        <div className="row px-lg-0 px-3">
          <p className="px-3" style={{ fontSize: "35px" }}>
            {" "}
           <b> Labour and Employment Law: Comprehensive Legal Assistance for
           Workplaces and Workforce Rights.</b>
          </p>
          <div className="col px-3">
            <p style={{ fontSize: "19px", textAlign: "justify" }}>
              We, at Highbrows Legal, offer expert legal guidance and
              representation in all aspects of labour and employment laws.
              Whether you are an employer seeking compliance solutions or an
              employee fighting for your rights, our team is dedicated to
              delivering practical and efficient resolutions. With a strong
              presence in Tamil Nadu and across India, we handle the full
              spectrum of employment-related disputes and regulatory matters,
              ensuring fair outcomes and adherence to the law
            </p>
          </div>
        </div>
        <LabourAndEmploymentContent />
      </div>
    </div>
  );
};

export default LabourAndEmployment;
