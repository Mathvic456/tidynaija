import React, { useState } from 'react';
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
import MissionModal from './components/sections/MissionModal';
import ServiceModal from './components/sections/ServiceModal';
import InvestorBriefModal from './components/sections/InvestorBriefModal';
import Container from './components/shared/Container';

function App() {
  const [isMissionOpen, setIsMissionOpen] = useState(false);

  const openMissionModal = () => setIsMissionOpen(true);
  const closeMissionModal = () => setIsMissionOpen(false);
  const [serviceModal, setServiceModal] = useState({ open: false, service: null });
  const [isInvestorModalOpen, setIsInvestorModalOpen] = useState(false);

  const openServiceModal = (serviceName) => setServiceModal({ open: true, service: serviceName });
  const closeServiceModal = () => setServiceModal({ open: false, service: null });
  const openInvestorModal = () => setIsInvestorModalOpen(true);
  const closeInvestorModal = () => setIsInvestorModalOpen(false);

  return (
    <>
      <Container>
        <Header />
      </Container>

      <Container>
        <Hero onServiceClick={openServiceModal} />
      </Container>

      {/* <Container> */}
      <Illustration />
      {/* </Container> */}

      <TrustBar />

      <RealitySection id="about" />

      <MarketOpportunity id="investors" onDownloadClick={openInvestorModal} />

      <OfferSection id="services" onServiceClick={openServiceModal} />

      <ProcessSection id="process" />

      <WhyUsSection />

      <RoadmapSection />

      <ComingSoonSection />

      {isMissionOpen && <MissionModal onClose={closeMissionModal} />}
      {serviceModal.open && (
        <ServiceModal serviceName={serviceModal.service} onClose={closeServiceModal} />
      )}
      {isInvestorModalOpen && <InvestorBriefModal onClose={closeInvestorModal} />}

      <div className="dark-section">
        <Container>
          <div className="cta-section">
            <h2 className="serif">
              <span className="grey">Ready</span> <span className='white'> to be </span><br />
              <span className="white">part of a</span> <span className="accent">cleaner</span><br />
              <span className="accent">Nigeria?</span>
            </h2>
          </div>
          <Footer onMissionClick={openMissionModal} onServiceClick={openServiceModal} />
        </Container>
      </div>
    </>
  );
}

export default App;