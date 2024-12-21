import iprimg from "../../../../../assets/aboutus/ipr.jpg";
function IntellectualPropertyRights() {
  return (
    <div className="container-fluid">
      <div className="row">
        <p style={{ fontSize: "30px" }}>
          <b>Intellectual Property Rights (IPR)</b>{" "}
        </p>
      </div>
      <div className="row d-flex flex-column ">
        <div className="col">
          <p style={{ fontSize: "17px", textAlign: "justify" }}>
            Protecting creativity and innovation by securing patents,
            trademarks, copyrights, and trade secrets.
          </p>
        </div>
        <div className="col mt-lg-4">
          <div className="">
            <img className="img-thumbnail" src={iprimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntellectualPropertyRights;
