import { Link } from 'react-router-dom';
import { GraduationCap, CheckCircle, FileText, Clock, IndianRupee, ArrowRight } from 'lucide-react';
import './ProductPage.css';

const features = ['Loan amounts from ₹50,000 to ₹20,00,000', 'Interest rates starting at 8.50% p.a.', 'Moratorium period during study', 'Covers tuition, hostel, and living expenses', 'Both India and abroad courses', 'Tax benefit under Section 80E'];
const eligibility = [{ label: 'Age', value: '18 - 35 years' }, { label: 'Course', value: 'UG, PG, Professional, or Vocational' }, { label: 'Admission', value: 'Confirmed admission letter required' }, { label: 'Co-Applicant', value: 'Parent or guardian' }, { label: 'Academic Record', value: 'Min. 50% in last qualification' }];
const documents = ['Admission letter / offer letter', 'Fee structure from institution', 'PAN & Aadhaar of student and co-applicant', 'Income proof of co-applicant', 'Academic mark sheets'];

function EducationLoanPage() {
  return (
    <div className="product-page">
      <section className="product-hero">
        <div className="container product-hero__inner">
          <div className="product-hero__content">
            <span className="section-badge">Education Loan</span>
            <h1 className="product-hero__title">Education Loans up to ₹20 Lakhs</h1>
            <p className="product-hero__subtitle">Fund your dreams of higher education in India or abroad. Low interest rates, moratorium period, and tax benefits included.</p>
            <div className="product-hero__actions">
              <Link to="/apply" className="btn btn--cta btn--lg">Apply Now <ArrowRight size={18} /></Link>
              <Link to="/emi-calculator" className="btn btn--outline btn--lg">Calculate EMI</Link>
            </div>
          </div>
          <div className="product-hero__highlights">
            <div className="product-hero__highlight-card"><IndianRupee size={20} /><div><strong>8.50%</strong><br /><span>Starting interest rate</span></div></div>
            <div className="product-hero__highlight-card"><Clock size={20} /><div><strong>7 Days</strong><br /><span>Processing time</span></div></div>
            <div className="product-hero__highlight-card"><GraduationCap size={20} /><div><strong>₹20 Lakhs</strong><br /><span>Maximum amount</span></div></div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="product-grid">
            <div><h2 className="product-section-title">Key Features</h2><ul className="product-features">{features.map((f,i) => <li key={i} className="product-feature-item"><CheckCircle size={18} className="product-check" /><span>{f}</span></li>)}</ul></div>
            <div><h2 className="product-section-title">Eligibility Criteria</h2><table className="product-table"><tbody>{eligibility.map((e,i) => <tr key={i}><td className="product-table__label">{e.label}</td><td className="product-table__value">{e.value}</td></tr>)}</tbody></table></div>
          </div>
        </div>
      </section>
      <section className="section section--light">
        <div className="container">
          <h2 className="product-section-title">Documents Required</h2>
          <div className="product-docs">{documents.map((d,i) => <div key={i} className="product-doc-item"><FileText size={18} /><span>{d}</span></div>)}</div>
          <div className="product-cta-block"><h3>Invest in your future</h3><p>Check eligibility in 2 minutes. No impact on your credit score.</p><Link to="/apply" className="btn btn--cta btn--lg">Start Application <ArrowRight size={18} /></Link></div>
        </div>
      </section>
    </div>
  );
}

export default EducationLoanPage;
