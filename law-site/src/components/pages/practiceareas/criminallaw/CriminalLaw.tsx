import CriminalLawContent from "./CriminalLawContent";
import criminalbanner from '../../../../assets/mainpracticearea/banner/criminalbanner.png'
const CriminalLaw = () => {
  return (
    <div>
      <div className="w-100">
        <img src={criminalbanner} className="img-fluid w-100" alt="" />
      </div>
      <div className="container-lg container-fluid py-lg-5 py-4">
        <div className="row px-3">
          <p className="" style={{ fontSize: "35px" }}>
            {" "}
          <b>Criminal Law: Expert Legal Representation and Defense for Individuals and Businesses.</b>
          </p>
          <div className="col px-3">
            <p style={{ fontSize: "19px", textAlign: "justify" }}>
              The intricacies and gravity of criminal law proceedings in Tamil
              Nadu and India will be analysed nook and corner for the benefit of
              client at our Highbrows Legal. With a dedicated team of legal
              professionals, we offer comprehensive criminal defense services
              tailored to the complexities of the Indian legal system. Our
              expertise spans across Tamil Nadu and the rest of India, ensuring
              effective representation at every stage of a criminal case.
            </p>
          </div>
        </div>
        <CriminalLawContent />
      </div>
    </div>
  );
};

export default CriminalLaw;
