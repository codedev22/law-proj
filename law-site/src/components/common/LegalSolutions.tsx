import '../style/common-styles/Common.css'
function LegalSolutions() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center p-3  ">
        <div style={{width:'100%'}} className="legal-parent p-5">
            <h2 style={{color:'#C7B480'}} className='text-center'>WE PROVIDE YOU</h2>
            <div className="text-center legal-text-div " style={{border:'1px solid', borderRadius:"30px"}}>
                <h1 style={{fontSize:'46px',color:'#C7B480'}}>BEST LEGAL SOLUTIONS</h1>
            </div>
            <div className="text-center p-3">
                <button className="btn btn-lg btn-light">Call Us Now</button>
            </div>
        </div>
      
    </div>
  )
}

export default LegalSolutions
