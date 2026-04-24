import './Partners.css';

const partners = [
  { name: 'Bajaj Finserv', initials: 'BF', color: '#003B71' },
  { name: 'Tata Capital', initials: 'TC', color: '#00235B' },
  { name: 'ICICI Bank', initials: 'IC', color: '#B02A30' },
  { name: 'HDFC Bank', initials: 'HD', color: '#004B87' },
  { name: 'Poonawalla', initials: 'PF', color: '#7B2D8E' },
  { name: 'Muthoot', initials: 'MF', color: '#D4A843' },
  { name: 'L&T Finance', initials: 'LT', color: '#0066B3' },
  { name: 'Axis Bank', initials: 'AX', color: '#800020' },
];

function Partners() {
  return (
    <section className="partners" id="partners">
      <div className="container">
        <p className="partners__label">Trusted by India's Leading Banks & NBFCs</p>
        <div className="partners__track">
          <div className="partners__list">
            {[...partners, ...partners].map((p, i) => (
              <div className="partners__item" key={i}>
                <div className="partners__mark" style={{ backgroundColor: p.color }}>
                  {p.initials}
                </div>
                <span className="partners__name">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
