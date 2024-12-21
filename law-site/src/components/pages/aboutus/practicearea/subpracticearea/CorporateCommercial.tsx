import corpandcomimg from "../../../../../assets/aboutus/corpandcom.jpeg";
function CorporateCommercial() {
  return (
    <div className="container-fluid">
      <div className="row">
        <p style={{ fontSize: "30px" }}>
          <b>Corporate and Commercial Law</b>{" "}
        </p>
      </div>
      <div className="row d-flex flex-column  flex-md-column ">
        <div className="col">
          <p style={{ fontSize: "19px", textAlign: "justify" }}>
            Providing strategic counsel on mergers, acquisitions, contract
            negotiations, regulatory compliance, and more 
          </p>
        </div>
        <div className="col mt-lg-5 ">
          <div className="">
            <img className="img-thumbnail" src={corpandcomimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CorporateCommercial;
