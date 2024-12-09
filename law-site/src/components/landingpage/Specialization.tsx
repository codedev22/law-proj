import '../style/landingpage-styles/LandingPage.css'
function Specialization() {
  return (
    <div className="container-fluid p-5">
      <div style={{gap:30}} className="row ">
        <div style={{height:"300px" ,border:'1px solid'}} className=" adv-talk-div col d-flex justify-content-center align-items-center">
            <p style={{fontSize:'25px',color:'#C7B480'}} className=" text-center  ">+Thousand of Trusted Client</p>
        </div>
        <div style={{height:"300px", border:'1px solid'}} className="hammer-div col d-flex justify-content-center align-items-center">
        <p style={{fontSize:'25px',color:'#C7B480'}} className=" text-center">+Thousand of Successful Cases</p>
        </div>
        <div style={{height:"300px", border:'1px solid'}} className="money-div col d-flex justify-content-center align-items-center">
        <p style={{fontSize:'25px',color:'#C7B480'}} className="text-center "><b>+Thousand of Trusted Client</b></p>
        </div>
        <div style={{height:"300px", border:'1px solid'}} className="adv-grp-div col d-flex justify-content-center align-items-center">
        <p style={{fontSize:'25px',color:'#C7B480'}} className="text-center "><b>+Thousand of Trusted Client</b></p>
        </div>

      </div>
    </div>
  )
}

export default Specialization
