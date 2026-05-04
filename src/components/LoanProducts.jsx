import { Link } from 'react-router-dom';
import { CreditCard, Building, GraduationCap, HeartPulse, PartyPopper, Home } from 'lucide-react';
import ScrollReveal, { StaggerChildren } from './ScrollReveal';
import './LoanProducts.css';

const products = [
  { icon: CreditCard, title: 'Personal Loan', rate: '10.49%', limit: '₹10 Lakhs', desc: 'For medical, travel, wedding, or any personal need.', link: '/personal-loan' },
  { icon: Building, title: 'Business Loan', rate: '12.00%', limit: '₹50 Lakhs', desc: 'Working capital and expansion for SMEs and startups.', link: '/business-loan' },
  { icon: GraduationCap, title: 'Education Loan', rate: '8.50%', limit: '₹20 Lakhs', desc: 'Fund your higher education in India or abroad.', link: '/education-loan' },
  { icon: HeartPulse, title: 'Medical Loan', rate: '10.99%', limit: '₹5 Lakhs', desc: 'Immediate funds for medical emergencies and treatments.', link: '/apply' },
  { icon: PartyPopper, title: 'Wedding Loan', rate: '11.49%', limit: '₹15 Lakhs', desc: 'Make your special day memorable without financial stress.', link: '/apply' },
  { icon: Home, title: 'Home Renovation', rate: '10.99%', limit: '₹10 Lakhs', desc: 'Transform your home with easy financing options.', link: '/apply' },
];

function LoanProducts() {
  return (
    <section className="products section section--warm" id="products">
      <div className="container">
        <ScrollReveal direction="up" distance={50}>
          <div className="section-header">
            <span className="section-badge">Loan Products</span>
            <h2 className="section-title">Find the Right Loan for You</h2>
            <p className="section-subtitle">
              We offer a wide range of loan products through our NBFC partners.
              Competitive rates, flexible tenures.
            </p>
          </div>
        </ScrollReveal>

        <StaggerChildren stagger={0.08} direction="up" distance={40} className="products__grid">
          {products.map((p, i) => (
            <div className="products__card" key={i} id={`product-${i}`}>
              <div className="products__card-icon-wrap">
                <p.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="products__card-title">{p.title}</h3>
              <p className="products__card-desc">{p.desc}</p>
              <div className="products__card-meta">
                <div className="products__card-meta-item">
                  <span className="products__card-meta-label">Starting</span>
                  <span className="products__card-meta-val">{p.rate} p.a.</span>
                </div>
                <div className="products__card-meta-item">
                  <span className="products__card-meta-label">Up to</span>
                  <span className="products__card-meta-val">{p.limit}</span>
                </div>
              </div>
              <Link to={p.link} className="products__card-link">Learn More →</Link>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

export default LoanProducts;
