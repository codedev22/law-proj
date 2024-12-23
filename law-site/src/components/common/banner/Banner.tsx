import "../../style/common-styles/Common.css";
import banimg from "../../../assets/images/banner.png";
import { Image } from "react-bootstrap";
function Banner() {
  return (
    <div>
      <div>
        <Image src={banimg} className="img-fluid" alt="" />
      </div>
    </div>
  );
}

export default Banner;
