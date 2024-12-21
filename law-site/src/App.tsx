import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './components/pages/landingpage/LandingPage'
import OurTeam from './components/common/ourteam/OurTeam';
import Contact from './components/pages/contact/Contact';
import AboutUs from './components/pages/aboutus/AboutUs';
import CorporateLegalServices from './components/pages/practiceareas/corporatelegalservices/CorporateLegalServices';
import IPR from './components/pages/practiceareas/intellectualpropertyrights/IPR';
import FamilyAndMat from './components/pages/practiceareas/familyandmatrimoniallaw/FamilyAndMat';
import CivilAndCommerical from './components/pages/practiceareas/civilandcommerciallaw/CivilAndCommerical';

function App() {

  return (
    <>
      <div>
      <Router>
          <Routes>
            <Route path="/" element={<LandingPage/>}></Route>
            <Route path="/test" element={<OurTeam/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/aboutus" element={<AboutUs/>}></Route>
            <Route path="/corporate-legal-service" element={<CorporateLegalServices/>}></Route>
            <Route path="/intellectual-property-rights" element={<IPR/>}></Route>
            <Route path="/family-matrimonial" element={<FamilyAndMat/>}></Route>
            <Route path="/civil-commercial" element={<CivilAndCommerical/>}></Route>
          </Routes>
        </Router>
      </div>
      
    
    </>
  )
}

export default App
