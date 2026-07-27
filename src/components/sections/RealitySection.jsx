import Container from '../shared/Container';
import Card from '../ui/Card';
import { Clock, Document, Eye } from '../ui/Icon';

const RealitySection = ({ id }) => {
  const cards = [
    {
      icon: <Clock />,
      title: 'No one knows when the truck is coming',
      description: 'In most Nigerian cities, waste pickup runs on informal schedules that residents can\'t track, plan around, or hold anyone accountable for.'
    },
    {
      icon: <Document />,
      title: 'Missed pickups go unrecorded.',
      description: 'When a collector doesn\'t show, there\'s no report mechanism, no refund process, and no record that it happened. The waste stays. The problem compounds.'
    },
    {
      icon: <Eye />,
      title: 'We can\'t measure what it can\'t see.',
      description: 'Without data on collection rates, routes, or completion, state agencies have no basis for improvement and no proof of service delivery for funding.'
    }
  ];

  return (
    <section id={id}>
      <Container>
        <div className="reality-head">
          <p className="eyebrow">— The Reality</p>
          <h2 className="section-title serif">
            Waste collection in Nigeria is broken.<br />
            <span className="accent">Not for lack of trying.</span>
          </h2>
        </div>
        
        <div className="cards-3">
          {cards.map((card, index) => (
            <Card key={index} icon={card.icon} title={card.title}>
              <p>{card.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="quote-block">
          <p>
            "Nigerian cities deserve better infrastructure.<br />
            We're building it."
          </p>
        </div>
      </Container>
    </section>
  );
};

export default RealitySection;