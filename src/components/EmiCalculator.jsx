import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { calculateEMI, formatINR } from '../utils/financial';
import ScrollReveal from './ScrollReveal';
import './EmiCalculator.css';

function EmiCalculator() {
  const [amount, setAmount] = useState(300000);
  const [rate, setRate] = useState(12);
  const [tenure, setTenure] = useState(24);

  const emi = Math.round(calculateEMI(amount, rate, tenure));
  const totalPayable = emi * tenure;
  const totalInterest = totalPayable - amount;

  const circumference = 2 * Math.PI * 50;
  const principalArc = (amount / totalPayable) * circumference;
  const interestArc = circumference - principalArc;

  return (
    <section className="calc section section--light" id="calculator">
      <div className="container">
        <ScrollReveal direction="up" distance={50}>
          <div className="section-header">
            <span className="section-badge">EMI Calculator</span>
            <h2 className="section-title">Plan Your Loan Repayment</h2>
            <p className="section-subtitle">
              Adjust the sliders to see how different amounts, rates, and tenures affect your monthly EMI.
            </p>
          </div>
        </ScrollReveal>

        <div className="calc__body">
          <ScrollReveal direction="left" distance={60} delay={0.1}>
            <div className="calc__controls">
              <div className="calc__slider-group">
                <div className="calc__slider-header">
                  <label htmlFor="calc-amount" className="calc__slider-label">Loan Amount</label>
                  <span className="calc__slider-value">{formatINR(amount)}</span>
                </div>
                <input type="range" className="calc__range" min="10000" max="1000000" step="10000" value={amount} onChange={(e) => setAmount(Number(e.target.value))} id="calc-amount" />
                <div className="calc__range-labels"><span>₹10K</span><span>₹10L</span></div>
              </div>

              <div className="calc__slider-group">
                <div className="calc__slider-header">
                  <label htmlFor="calc-rate" className="calc__slider-label">Interest Rate (% p.a.)</label>
                  <span className="calc__slider-value">{rate}%</span>
                </div>
                <input type="range" className="calc__range" min="8" max="36" step="0.5" value={rate} onChange={(e) => setRate(Number(e.target.value))} id="calc-rate" />
                <div className="calc__range-labels"><span>8%</span><span>36%</span></div>
              </div>

              <div className="calc__slider-group">
                <div className="calc__slider-header">
                  <label htmlFor="calc-tenure" className="calc__slider-label">Tenure (Months)</label>
                  <span className="calc__slider-value">{tenure} mo</span>
                </div>
                <input type="range" className="calc__range" min="3" max="60" step="1" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} id="calc-tenure" />
                <div className="calc__range-labels"><span>3 mo</span><span>60 mo</span></div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" distance={60} delay={0.2}>
            <div className="calc__results">
              <div className="calc__emi-box">
                <span className="calc__emi-label">Monthly EMI</span>
                <span className="calc__emi-value">{formatINR(emi)}</span>
              </div>

              <div className="calc__donut">
                <svg viewBox="0 0 120 120" className="calc__donut-svg" aria-label={`Principal: ${formatINR(amount)}, Interest: ${formatINR(totalInterest)}`} role="img">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="var(--gray-100)" strokeWidth="14" />
                  <circle
                    cx="60" cy="60" r="50"
                    fill="none"
                    stroke="var(--emerald-500)"
                    strokeWidth="14"
                    strokeDasharray={`${principalArc} ${interestArc}`}
                    strokeDashoffset="0"
                    strokeLinecap="round"
                    transform="rotate(-90 60 60)"
                    style={{ transition: 'stroke-dasharray 0.3s ease' }}
                  />
                </svg>
                <div className="calc__donut-legend">
                  <div className="calc__donut-legend-item">
                    <span className="calc__dot calc__dot--principal"></span>
                    <span>Principal</span>
                    <strong>{formatINR(amount)}</strong>
                  </div>
                  <div className="calc__donut-legend-item">
                    <span className="calc__dot calc__dot--interest"></span>
                    <span>Interest</span>
                    <strong>{formatINR(totalInterest)}</strong>
                  </div>
                </div>
              </div>

              <div className="calc__summary">
                <div className="calc__summary-item">
                  <span>Total Interest</span>
                  <strong>{formatINR(totalInterest)}</strong>
                </div>
                <div className="calc__summary-item">
                  <span>Total Payable</span>
                  <strong>{formatINR(totalPayable)}</strong>
                </div>
              </div>

              <Link to="/apply" className="btn btn--cta btn--lg btn--full">
                Apply for This Loan <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default EmiCalculator;
