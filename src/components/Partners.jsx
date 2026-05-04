import ScrollReveal from './ScrollReveal';
import './Partners.css';

const row1 = [
  { name: 'Bajaj Finserv', initials: 'BF', color: '#003B71' },
  { name: 'Kotak Bank', initials: 'KB', color: '#ED1C24' },
  { name: 'Tata Capital', initials: 'TC', color: '#00235B' },
  { name: 'ICICI Bank', initials: 'IC', color: '#B02A30' },
  { name: 'FlexiLoans', initials: 'FL', color: '#0066B3' },
  { name: 'IndusInd Bank', initials: 'IB', color: '#8B1A4A' },
  { name: 'NeoGrowth', initials: 'NG', color: '#2E7D32' },
  { name: 'Freo', initials: 'FR', color: '#1A237E' },
];

const row2 = [
  { name: 'HDFC Bank', initials: 'HD', color: '#004B87' },
  { name: 'Poonawalla', initials: 'PF', color: '#7B2D8E' },
  { name: 'Muthoot Finance', initials: 'MF', color: '#D4A843' },
  { name: 'L&T Finance', initials: 'LT', color: '#0066B3' },
  { name: 'Axis Bank', initials: 'AX', color: '#800020' },
  { name: 'CreditSea', initials: 'CS', color: '#00897B' },
  { name: 'Kissht', initials: 'KS', color: '#FF5722' },
  { name: 'Protium', initials: 'PT', color: '#1565C0' },
];

function Partners() {
  return (
    <section className="partners" id="partners">
      <div className="container">
        <ScrollReveal direction="up" distance={40}>
          <h2 className="partners__title">Our Trusted Partners</h2>
          <p className="partners__subtitle">
            We work with India's leading RBI-registered banks & NBFCs
          </p>
        </ScrollReveal>
      </div>

      {/* Row 1 — moves LEFT */}
      <div className="partners__track">
        <div className="partners__list partners__list--left">
          {[...row1, ...row1].map((p, i) => (
            <div className="partners__item" key={`r1-${i}`}>
              <div className="partners__mark" style={{ backgroundColor: p.color }}>
                {p.initials}
              </div>
              <span className="partners__name">{p.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — moves RIGHT */}
      <div className="partners__track">
        <div className="partners__list partners__list--right">
          {[...row2, ...row2].map((p, i) => (
            <div className="partners__item" key={`r2-${i}`}>
              <div className="partners__mark" style={{ backgroundColor: p.color }}>
                {p.initials}
              </div>
              <span className="partners__name">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
