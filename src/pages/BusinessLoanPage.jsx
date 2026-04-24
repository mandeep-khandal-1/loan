import { Link } from 'react-router-dom';
import { Building, CheckCircle, FileText, Clock, IndianRupee, ArrowRight } from 'lucide-react';
import './ProductPage.css';

const features = ['Loan amounts from ₹1,00,000 to ₹50,00,000', 'Interest rates starting at 12% p.a.', 'Flexible tenure: 12 to 60 months', 'Collateral-free up to ₹25 Lakhs', 'Minimal documentation', 'Working capital and expansion funding'];
const eligibility = [{ label: 'Age', value: '25 - 65 years' }, { label: 'Business Vintage', value: 'Min. 2 years' }, { label: 'Annual Turnover', value: '₹10 Lakhs+' }, { label: 'Credit Score', value: '680+ (CIBIL)' }, { label: 'Business Type', value: 'Proprietorship, Partnership, Pvt Ltd' }];
const documents = ['Business registration / GST certificate', 'PAN Card of business & proprietor', 'Last 2 years ITR with computation', 'Last 6 months bank statements', 'Office address proof'];

function BusinessLoanPage() {
  return (
    <div className="product-page">
      <section className="product-hero">
        <div className="container product-hero__inner">
          <div className="product-hero__content">
            <span className="section-badge">Business Loan</span>
            <h1 className="product-hero__title">Business Loans up to ₹50 Lakhs</h1>
            <p className="product-hero__subtitle">Fuel your business growth with collateral-free loans. Quick approval, minimal documentation, and flexible repayment options for SMEs and startups.</p>
            <div className="product-hero__actions">
              <Link to="/apply" className="btn btn--cta btn--lg">Apply Now <ArrowRight size={18} /></Link>
              <Link to="/emi-calculator" className="btn btn--outline btn--lg">Calculate EMI</Link>
            </div>
          </div>
          <div className="product-hero__highlights">
            <div className="product-hero__highlight-card"><IndianRupee size={20} /><div><strong>12%</strong><br /><span>Starting interest rate</span></div></div>
            <div className="product-hero__highlight-card"><Clock size={20} /><div><strong>48 Hours</strong><br /><span>Disbursement time</span></div></div>
            <div className="product-hero__highlight-card"><Building size={20} /><div><strong>₹50 Lakhs</strong><br /><span>Maximum amount</span></div></div>
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
          <div className="product-cta-block"><h3>Ready to grow your business?</h3><p>Check eligibility in 2 minutes. No impact on your credit score.</p><Link to="/apply" className="btn btn--cta btn--lg">Start Application <ArrowRight size={18} /></Link></div>
        </div>
      </section>
    </div>
  );
}

export default BusinessLoanPage;
