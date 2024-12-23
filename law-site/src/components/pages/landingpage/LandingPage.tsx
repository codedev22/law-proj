import "../../../components/style/landingpage-styles/LandingPage.css";
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
      <div className=" main-body-div container-lg container-fluid px-lg-0 ">
        <Specialization />
        <TopLawyers />
        <LegalSolutions />
        <OurPracticeArea />
        <AboutFirm/>
        <Testimonials/>
        <CaseForm />
      </div>
      {/* Footer */}
      <Footer />
      {/* Footer */}
    </div>
  );
}

export default LandingPage;
