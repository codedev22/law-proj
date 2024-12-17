import "../../style/common-styles/Common.css";
import banimg from "../../../assets/images/banner.png";
import { Image } from "react-bootstrap";
function Banner() {
  return (
    <div className=" w-100">
      <div className="w-100">
        <Image src={banimg} className="banner-img w-100" alt="" />
      </div>
    </div>
  );
}

export default Banner;
