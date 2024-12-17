import '../../style/landingpage-styles/LandingPage.css'
function Specialization() {
  return (
    <div className="container-fluid mt-4 ">
      <div style={{gap:30}} className="row d-flex ">
        <div 
        style={{height:"300px" ,border:'1px solid'}} 
        className="adv-talk-div col d-flex justify-content-center align-items-center">
            <p style={{fontSize:'25px'}} className=" text-center text-light  "> <b>+Thousand of Trusted Client</b></p>
        </div>
        <div style={{height:"300px", border:'1px solid'}} className="hammer-div col d-flex justify-content-center align-items-center">
        <p style={{fontSize:'25px'}} className=" text-light text-center"><b>+Thousand of Successful Cases</b></p>
        </div>
        <div style={{height:"300px", border:'1px solid'}} className="money-div col  d-flex justify-content-center align-items-center">
        <p style={{fontSize:'25px'}} className="text-center text-light "><b>+Millions of Recovered Money</b></p>
        </div>
        <div style={{height:"300px", border:'1px solid'}} className="adv-grp-div col d-flex justify-content-center align-items-center">
        <p style={{fontSize:'25px'}} className="text-center text-light "><b>Specialize in all INDIAN Courts  </b></p>
        </div>

      </div>
    </div>
  )
}

export default Specialization
