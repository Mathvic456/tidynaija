import React from 'react';
import Container from '../shared/Container';

const ProcessSection = ({ id }) => {
  const steps = [
    {
      number: '01',
      title: 'Book',
      description: 'Choose your service, select your date, and confirm your address.',
      link: '#book'
    },
    {
      number: '02',
      title: 'We Dispatch',
      description: 'A verified Tidy Naija collector is assigned to your job. You receive their name, rating, and estimated arrival time.'
    },
    {
      number: '03',
      title: 'Done. Documented.',
      description: 'Your collector completes the job and submits a photo as proof of service. You rate the experience. Your history is saved.'
    }
  ];

  return (
    <section className="process-section" id={id}>
      <Container>
        <p className="eyebrow center" style={{ marginBottom: '12px' }}>— The Process</p>
        <h2 className="section-title serif" style={{ textAlign: 'center', margin: '0 auto 56px' }}>
          Up and running<br />in <span className="accent">three steps.</span>
        </h2>
        
        <div className="process-grid">
          <div className="steps">
            {steps.map((step, index) => (
              <div key={index} className="step">
                <div className="num">{step.number}</div>
                <div>
                  <h4>{step.title}</h4>
                  <p>
                    {step.description}
                    {step.link && (
                      <><br /><a href={step.link} style={{ color: 'var(--green)', fontWeight: 600 }}>Book online →</a></>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="">
            {/* SVG mockup - you can move this to a separate component if needed */}
            <img src="../../steps.png" alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProcessSection;