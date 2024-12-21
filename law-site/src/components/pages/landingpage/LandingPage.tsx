import "../../../components/style/landingpage-styles/LandingPage.css";
import Floatbtn from "../../common/Floatbtn";
import Footer from "../../Shared/Footer/Footer";
import TopLawyers from "../../common/toplawyers/TopLawyers";
import Specialization from "../../common/specialization/Specialization";
import LegalSolutions from "../../common/legalsolutions/LegalSolutions";
import CaseForm from "../../common/caseform/CaseForm";
import OurPracticeArea from "../../common/practicearea/OurPracticeArea";
import Banner from "../../common/banner/Banner";
import AboutFirm from "../../common/aboutfirm/AboutFirm";
import NavBar from "../../Shared/NavBar/NavBar";
import Testimonials from "../../common/testimonials/Testimonials";

function LandingPage() {
  return (
    <div>
      <NavBar />
      <Banner/> 
      <div className=" main-body-div px-lg-5">
        <div className="px-lg-5 px-3 ">
        <Specialization />
        <TopLawyers />
        <LegalSolutions />
        <OurPracticeArea />
        <AboutFirm/>
        <Testimonials/>
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
