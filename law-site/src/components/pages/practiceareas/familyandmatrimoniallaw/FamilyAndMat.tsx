import Footer from "../../../Shared/Footer/Footer";
import NavBar from "../../../Shared/NavBar/NavBar";
import FamilyAndMatContent from "./FamilyAndMatContent";
const FamilyAndMat = () => {
  return (
    <div>
      <NavBar />
      <div className=" container-lg container-fluid p-lg-5 p-3">
        <div className="row">
          <p className="px-3" style={{ fontSize: "35px" }}>
            {" "}
            Family and Matrimonial Law: Compassionate Guidance Through Life’s
            Challenges
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
      <Footer />
    </div>
  );
};

export default FamilyAndMat;
