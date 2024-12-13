import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './components/landingpage/LandingPage'
import AboutFirm from './components/landingpage/aboutfirm/AboutFirm';
import Banner from './components/common/Banner';
function App() {

  return (
    <>
      <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/test" element={<AboutFirm/>}></Route>
            <Route path="/testt" element={<Banner/>}></Route>
          
          </Routes>
        </BrowserRouter>
      </div>
      
    
    </>
  )
}

export default App
