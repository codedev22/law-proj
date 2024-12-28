import recimg1 from '../../../assets/recognized/akkaretty.svg'
import recimg2 from '../../../assets/recognized/nyle.svg'
import recimg3 from '../../../assets/recognized/tp-logo.svg'
import recimg4 from '../../../assets/recognized/web_black-13.svg'
import recimg5 from '../../../assets/recognized/leaf.svg'

const Recongnized = () => {
  return (
    <div className='container mt-3 px-0'>

    <div style={{borderRadius:'15px'}} className="row   gap-5 d-flex  flex-column justify-content-lg-center  flex-lg-row py-3 px-3">
       <div>
       <h4 className='text-center opacity-50'>Our Most</h4>
       <h1 className='text-center maincolor'>Trusted Clients</h1>
       </div>
       
         <div className="col col-lg-2">
            <img className='img-fluid' src={recimg1} alt="rec1" />
        </div> 
         <div className="col py-lg-5 ">
            <img className='img-fluid' src={recimg2} alt="rec2" />
        </div> 
        <div className="col col-lg-2 ">
            <img className='img-fluid' src={recimg3} alt="rec3" />
        </div>
        <div className="col col-lg-2 ">
            <img className='img-fluid' src={recimg4} alt="rec4" />
        </div>
        <div className="col col-lg-2  py-lg-5 px-md-5">
            <img className='img-fluid ' src={recimg5} alt="rec4" />
        </div>
    </div>
    </div>

  )
}

export default Recongnized
