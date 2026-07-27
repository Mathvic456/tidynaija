import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Illustration from './components/sections/Illustration';
import TrustBar from './components/ui/TrustBar';
import RealitySection from './components/sections/RealitySection';
import MarketOpportunity from './components/sections/MarketOppurtunity';
import OfferSection from './components/sections/OfferSection';
import ProcessSection from './components/sections/ProcessSection';
import WhyUsSection from './components/sections/WhyUsSection';
import RoadmapSection from './components/sections/RoadmapSection';
import ComingSoonSection from './components/sections/ComingSoonSection';
import Container from './components/shared/Container';

function App() {
  return (
    <>
      <Container>
        <Header />
      </Container>
      
      <Container>
        <Hero />
      </Container>
      
      {/* <Container> */}
        <Illustration />
      {/* </Container> */}
      
      <TrustBar />
      
      <RealitySection id="about" />
      
      <MarketOpportunity id="investors" />
      
      <OfferSection id="services" />
      
      <ProcessSection id="process" />
      
      <WhyUsSection />
      
      <RoadmapSection />
      
      <ComingSoonSection />
      
      <div className="dark-section">
        <Container>
          <div className="cta-section">
            <h2 className="serif">
              <span className="white">Ready</span> to be<br />
              <span className="white">part of a</span> <span className="accent">cleaner</span><br />
              <span className="white">Nigeria?</span>
            </h2>
          </div>
          <Footer />
        </Container>
      </div>
    </>
  );
}

export default App;