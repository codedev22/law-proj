import bankimg from "../../../../../assets/aboutus/BankingFinanceLaw.jpg";
function BankingFinance() {
  return (
    <div className="container-fluid">
      <div className="row">
        <p style={{ fontSize: "30px" }}>
          <b>Banking and Finance</b>{" "}
        </p>
      </div>
      <div className="row d-flex flex-column  ">
        <div className="col">
          <p style={{ fontSize: "17px", textAlign: "justify" }}>
            Advising on loans, financial structuring, and compliance for both
            institutions and borrowers.
          </p>
        </div>
        <div className="col">
          <div className="">
            <img className="img-thumbnail" src={bankimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BankingFinance;
