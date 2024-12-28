import empimg from "../../../../../assets/aboutus/empandlabour.jpg";
function EmploymentLabour() {
  return (
    <div className="container-fluid">
      <div className="row">
        <p style={{ fontSize: "30px" }}>
          <b>Employment And Labour Law</b>{" "}
        </p>
      </div>
      <div className="row d-flex flex-column  ">
        <div className="col">
          <p style={{ fontSize: "17px", textAlign: "justify" }}>
            Ensuring harmonious employer-employee relations while safeguarding
            statutory compliance and rights.
          </p>
        </div>
        <div className="col">
          <div className="">
            <img className="img-thumbnail" src={empimg} alt="labourlaw" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmploymentLabour;
