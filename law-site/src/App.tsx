import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './components/landingpage/LandingPage'
import OurTeam from './components/common/ourteam/OurTeam';
import Contact from './components/pages/contact/Contact';
function App() {

  return (
    <>
      <div>
      <Router>
          <Routes>
            <Route path="/" element={<LandingPage/>}></Route>
            <Route path="/test" element={<OurTeam/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
          </Routes>
        </Router>
      </div>
      
    
    </>
  )
}

export default App
