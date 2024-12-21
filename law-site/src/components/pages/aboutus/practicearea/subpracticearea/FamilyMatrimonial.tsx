import famimg from "../../../../../assets/aboutus/famandmat.jpg";
function FamilyMatrimonial() {
  return (
    <div className="container-fluid">
      <div className="row">
        <p style={{ fontSize: "30px" }}>
          <b>Family And Matrimonial Law</b>{" "}
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
            <img className="img-thumbnail" src={famimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FamilyMatrimonial;
