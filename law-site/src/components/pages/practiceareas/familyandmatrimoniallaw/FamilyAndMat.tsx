import FamilyAndMatContent from "./FamilyAndMatContent";
import fambanner from '../../../../assets/mainpracticearea/banner/fambanner.png'
const FamilyAndMat = () => {
  return (
    <div>
      <div className="w-100">
        <img src={fambanner} className="img-fluid w-100" alt="" />
      </div>
      <div className=" container-lg container-fluid py-lg-5 py-4 ">
        <div className="row px-lg-0 px-3">
          <p className="px-3" style={{ fontSize: "35px" }}>
            {" "}
           <b>Family and Matrimonial Law: Compassionate Guidance Through Life’s
           Challenges</b> 
          </p>
          <div className="col px-3">
            <p style={{fontSize:"19px",textAlign:'justify'}}>
              At Highbrows Legal, we understand that family matters are deeply
              personal and often emotional. Whether dealing with marriage,
              divorce, child custody, or inheritance, legal issues within
              families require not only legal expertise but also empathy and
              sensitivity. Our team specializes in family and matrimonial law,
              providing strong support to individuals and families as they
              navigate complex and often difficult situations. We are committed
              to protecting your rights and finding practical solutions that
              align with your family’s best interests.
            </p>
          </div>
        </div>
        <FamilyAndMatContent />
      </div>
    </div>
  );
};

export default FamilyAndMat;
