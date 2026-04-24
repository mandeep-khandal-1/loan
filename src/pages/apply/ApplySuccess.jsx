import { Link } from 'react-router-dom';
import { useApplicationContext } from '../../context/ApplicationContext';
import { CheckCircle, Copy, Home, Calculator } from 'lucide-react';
import './ApplyFlow.css';
import { useState } from 'react';

function ApplySuccess() {
  const { data, resetData } = useApplicationContext();
  const [copied, setCopied] = useState(false);

  const copyRef = () => {
    navigator.clipboard.writeText(data.referenceId || '');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="apply-form" style={{ textAlign: 'center' }}>
      <div className="success-icon-wrap">
        <CheckCircle size={48} />
      </div>

      <h2 className="apply-form__title" style={{ color: 'var(--green-900)' }}>Application Submitted!</h2>
      <p className="apply-form__desc">
        Thank you, <strong>{data.fullName || 'applicant'}</strong>. Your application has been forwarded to <strong>{data.selectedOffer?.lender || 'the lender'}</strong>.
      </p>

      <div className="success-ref" onClick={copyRef} title="Click to copy">
        <span>Reference ID</span>
        <strong>{data.referenceId || 'SL00000000'}</strong>
        <Copy size={14} />
        {copied && <span className="success-copied">Copied!</span>}
      </div>

      <div className="success-timeline">
        <h3>What happens next?</h3>
        <div className="success-step"><span className="success-step__num">1</span><p>Our lending partner will review your application within <strong>30 minutes</strong>.</p></div>
        <div className="success-step"><span className="success-step__num">2</span><p>You'll receive a call on <strong>+91 {data.mobile || '••••••••••'}</strong> for final verification.</p></div>
        <div className="success-step"><span className="success-step__num">3</span><p>Upon approval, funds will be disbursed to your bank account within <strong>2-24 hours</strong>.</p></div>
      </div>

      <div style={{ display: 'flex', gap: 'var(--sp-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/" className="btn btn--cta btn--lg" onClick={resetData}><Home size={18} /> Back to Home</Link>
        <Link to="/emi-calculator" className="btn btn--outline btn--lg"><Calculator size={18} /> EMI Calculator</Link>
      </div>
    </div>
  );
}

export default ApplySuccess;
