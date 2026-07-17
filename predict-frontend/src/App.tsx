import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import PredictPage from "./pages/PredictPage";
import "./index.css"
// import DemoSection from "./components/LandingSections/DemoSection";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-[#0b0f19]">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />}/>
              {/* <Route path="feature" element={<FeaturesSection />} />
              <Route path="how-it-works" element={<HowItWorksSection />} /> */}
              {/* <Route path="demo" element={<DemoSection />} /> */}
            {/* </Route> */}
            <Route path="/predict" element={<PredictPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;