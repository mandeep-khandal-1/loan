import { ClipboardEdit, Handshake, Banknote } from 'lucide-react';
import './HowItWorks.css';

const steps = [
  { icon: ClipboardEdit, title: 'Apply Online', desc: 'Fill a simple form in 2 minutes. No physical documents needed. Just your PAN and Aadhaar.' },
  { icon: Handshake, title: 'Instant Matching', desc: 'Our system compares your profile across 50+ NBFCs to find the best rates and highest approval chances.' },
  { icon: Banknote, title: 'Get Funded', desc: 'Choose your offer, complete e-KYC, and receive funds directly in your bank account within hours.' },
];

function HowItWorks() {
  return (
    <section className="how section" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">How It Works</span>
          <h2 className="section-title">Get Your Loan in 3 Simple Steps</h2>
          <p className="section-subtitle">
            No queues, no branch visits. Our entire process is 100% digital
            and takes less than 10 minutes.
          </p>
        </div>

        <div className="how__grid">
          {steps.map((step, i) => (
            <div className="how__card" key={i} id={`step-${i + 1}`}>
              <div className="how__card-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="how__card-icon-wrap">
                <step.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="how__card-title">{step.title}</h3>
              <p className="how__card-desc">{step.desc}</p>
              {i < steps.length - 1 && <div className="how__connector" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
