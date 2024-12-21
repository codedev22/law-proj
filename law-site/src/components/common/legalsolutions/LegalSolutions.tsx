import '../../style/common-styles/Common.css'
function LegalSolutions() {
  return (
    <div  className="container-fluid d-flex justify-content-center align-items-center p-0  mt-5 ">
        <div style={{width:'100%',borderRadius:'15px'}} className="legal-parent p-4">
            <h3 style={{color:'#BF976C'}} className='text-center'>WE OFFER YOU</h3>
            <div className="text-center  legal-text-div " style={{ borderRadius:"30px"}}>
                <p  style={{fontSize:'35px',color:"#BF976C"}}> <b>EFFECTIVE LEGAL SOLUTIONS</b> </p>
            </div>
            <div className="text-center ">
                <button className="btn btn-lg btn-light">Call Us Now</button>
            </div>
        </div>
      
    </div>
  )
}

export default LegalSolutions
