import "../../style/practice-area-styles/PracticeCommon.css";
function RealEstateLaw() {
  return (
    <div className="">
      <div className="d-flex flex-wrap justify-content-between row">
        <p className="mx-2" style={{ fontSize: "30px" }}>
          <b>Real Estate Law</b>{" "}
        </p>
        <div className="container-fluid d-flex flex-wrap col">
          <div className="mb-3 mx-2">
            <div
              className="estate-img"
              style={{ width: "250px", height: "150px" ,  boxShadow:'0px 0px 10px 1px'}}
            ></div>
          </div>
          <div className="col mx-2">
            <p style={{fontSize:"20px"}}>
              Real estate transactions in India and Tamil Nadu can be complex,
              involving numerous legal considerations. Our firm offers expert
              services in property matters, including drafting and reviewing
              agreements, handling disputes over ownership, title verification,
              and ensuring compliance with local laws. Whether you are buying,
              selling, leasing or renting property, we guide you through the
              entire process, providing clear and reliable legal advice to
              safeguard your investment and resolve any issues efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RealEstateLaw;
