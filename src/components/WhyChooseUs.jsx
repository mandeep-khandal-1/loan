import { Building2, Zap, Smartphone, BadgeCheck } from 'lucide-react';
import ScrollReveal, { StaggerChildren } from './ScrollReveal';
import './WhyChooseUs.css';

const reasons = [
  { icon: Building2, title: '50+ NBFC Partners', desc: "We compare across India's top lenders — Bajaj, Tata Capital, ICICI, and more — to get you the best deal." },
  { icon: Zap, title: '10-Minute Approval', desc: 'Our AI pre-screens your profile for instant matching. No waiting, no branch visits required.' },
  { icon: Smartphone, title: 'Zero Paperwork', desc: '100% digital process. Aadhaar-based eKYC, instant document verification, and e-sign.' },
  { icon: BadgeCheck, title: 'No Hidden Fees', desc: 'Transparent processing fee disclosure upfront. What you see in the offer is exactly what you pay.' },
];

function WhyChooseUs() {
  return (
    <section className="why section" id="why-us">
      <div className="container">
        <ScrollReveal direction="up" distance={50}>
          <div className="section-header">
            <span className="section-badge">Why SabkaLoan</span>
            <h2 className="section-title">Why 2 Lakh+ Indians Trust Us</h2>
            <p className="section-subtitle">
              We're not a lender — we're your loan comparison partner.
              We work for you, not the banks.
            </p>
          </div>
        </ScrollReveal>

        <StaggerChildren stagger={0.12} direction="up" distance={45} className="why__grid">
          {reasons.map((r, i) => (
            <div className="why__card" key={i} id={`why-${i}`}>
              <div className="why__card-icon-wrap">
                <r.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="why__card-title">{r.title}</h3>
              <p className="why__card-desc">{r.desc}</p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

export default WhyChooseUs;
