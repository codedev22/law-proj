import realimg from "../../../../../assets/aboutus/aboutrealestate.jpg";
function RealEstate() {
  return (
    <div className="container-fluid">
      <div className="row">
        <p style={{ fontSize: "30px" }}>
          <b>Real Estate Law</b>{" "}
        </p>
      </div>
      <div className="row d-flex flex-column  ">
        <div className="col">
          <p style={{ fontSize: "17px", textAlign: "justify" }}>
          Guiding clients through property transactions, leases, disputes, and
          regulatory challenges with precision.
          </p>
        </div>
        <div className="col">
          <div className="">
            <img className="img-thumbnail" src={realimg} alt="realestate" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RealEstate;
