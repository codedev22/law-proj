import crimimg from "../../../../../assets/aboutus/aboutuscriminallaw.jpg";
function CriminalDefence() {
  return (
    <div className="container-fluid">
      <div className="row">
        <p style={{ fontSize: "30px" }}>
          <b>Criminal Defense</b>{" "}
        </p>
      </div>
      <div className="row d-flex flex-column  ">
        <div className="col">
          <p style={{ fontSize: "17px", textAlign: "justify" }}>
          Providing staunch representation for individuals facing criminal
          allegations.
          </p>
        </div>
        <div className="col">
          <div className="">
            <img className="img-thumbnail" src={crimimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CriminalDefence;
