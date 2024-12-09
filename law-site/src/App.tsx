import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './components/landingpage/LandingPage'
import LegalSolutions from './components/common/LegalSolutions';
function App() {

  return (
    <>
      <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/Test" element={<LegalSolutions/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      
    
    </>
  )
}

export default App
