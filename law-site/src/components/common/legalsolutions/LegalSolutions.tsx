import '../../style/common-styles/Common.css'
function LegalSolutions() {
  const phoneNumber = "+918110011188";
  return (
    <div  className="container-fluid d-flex justify-content-center align-items-center p-0  px-lg-0 px-3  mt-5 ">
        <div style={{width:'100%',borderRadius:'15px'}} className="legal-parent p-4">
            <h3 style={{color:'#BF976C'}} className='text-center'>WE OFFER YOU</h3>
            <div className="text-center  legal-text-div " style={{ borderRadius:"30px"}}>
                <h1  style={{color:"#BF976C"}}> <b>EFFECTIVE LEGAL SOLUTIONS</b> </h1>
            </div>
            <div className="text-center ">
                <button 
                className="btn btn-lg btn-light"
                onClick={() => (window.location.href = `tel:${phoneNumber}`)}
                >Call Us Now</button>
            </div>
        </div>
      
    </div>
  )
}

export default LegalSolutions
