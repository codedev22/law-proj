import '../style/common-styles/Common.css'
import banimg from '../../assets/images/banner.png'
function Banner() {
  return (
    <div className='container-fluid p-0'>
        <img src={banimg} className="banner-img border">
    
        </img>
    </div>
  )
}

export default Banner