import "../style/landingpage-styles/LandingPage.css";
import Floatbtn from "./Floatbtn";
import Footer from "../common/Footer";
import TopLawyers from "../common/TopLawyers";
import Specialization from "./Specialization";
import LegalSolutions from "../common/LegalSolutions";
import CaseForm from "../common/CaseForm";
import OurPracticeArea from "../common/OurPracticeArea";
import Banner from "../common/Banner";
import AboutFirm from "./aboutfirm/AboutFirm";
import NavBar from "../Shared/NavBar/NavBar";


function LandingPage() {
  return (
    <div>
      <NavBar />
      <div className=" main-body-div">
        <Banner/> 
        <div className="px-lg-4 px-3">
        <Specialization />
        <TopLawyers />
        <LegalSolutions />
        <OurPracticeArea />
        <AboutFirm/>
        <CaseForm />
        </div>
      </div>
      {/* Footer */}
      <Footer />
      {/* Footer */}
      <Floatbtn />
    </div>
  );
}

export default LandingPage;
