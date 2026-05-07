import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApplicationContext } from '../../context/ApplicationContext';
import { ArrowLeft, CheckCircle, IndianRupee, Percent, Calendar, BadgeCheck } from 'lucide-react';
import { calculateEMI, formatINR } from '../../utils/financial';
import './ApplyFlow.css';

/**
 * Generate indicative loan offers based on user profile.
 * NOTE: These are illustrative offers only. Real offers come from the backend
 * after credit assessment by our NBFC partners.
 */
const generateOffers = (income, amount) => {
  const amt = Number(amount) || 300000;
  return [
    { id: 1, lender: 'Partner A', rate: 10.49, tenure: 36, fee: '1.5%', color: '#0369a1' },
    { id: 2, lender: 'Partner B', rate: 11.25, tenure: 24, fee: '2.0%', color: '#4338ca' },
    { id: 3, lender: 'Partner C', rate: 12.00, tenure: 48, fee: '1.0%', color: '#059669' },
  ].map((offer) => ({
    ...offer,
    emi: Math.round(calculateEMI(amt, offer.rate, offer.tenure)),
    rateDisplay: `${offer.rate}%`,
    tenureDisplay: `${offer.tenure} months`,
  }));
};

function ApplyOffers() {
  const navigate = useNavigate();
  const { data, updateData } = useApplicationContext();
  const [selected, setSelected] = useState(null);
  const offers = generateOffers(data.monthlyIncome, data.loanAmount);

  const handleProceed = () => {
    if (!selected) return;
    const ref = `SL${Date.now().toString().slice(-8)}`;
    updateData({ selectedOffer: offers.find((o) => o.id === selected), referenceId: ref });
    navigate('/apply/success');
  };

  return (
    <div className="apply-form">
      <h2 className="apply-form__title">Your Matched Offers</h2>
      <p className="apply-form__desc">Based on your profile, here are the best indicative offers from our partners.</p>
      <p className="apply-form__disclaimer">
        <em>Rates shown are indicative. Final offer, interest rate, and terms are subject to lender approval and your credit profile.</em>
      </p>

      <div className="offers-list">
        {offers.map((offer) => (
          <button
            key={offer.id}
            className={`offer-card ${selected === offer.id ? 'offer-card--selected' : ''}`}
            onClick={() => setSelected(offer.id)}
            type="button"
            aria-pressed={selected === offer.id}
          >
            <div className="offer-card__header">
              <div className="offer-card__lender">
                <div className="offer-card__mark" style={{ backgroundColor: offer.color }}>{offer.lender.charAt(0)}</div>
                <strong>{offer.lender}</strong>
              </div>
              {selected === offer.id && <CheckCircle size={20} className="offer-card__check" />}
            </div>
            <div className="offer-card__grid">
              <div className="offer-card__stat">
                <Percent size={14} /><span>{offer.rateDisplay}</span><small>Interest Rate</small>
              </div>
              <div className="offer-card__stat">
                <IndianRupee size={14} /><span>{formatINR(offer.emi)}</span><small>Monthly EMI</small>
              </div>
              <div className="offer-card__stat">
                <Calendar size={14} /><span>{offer.tenureDisplay}</span><small>Tenure</small>
              </div>
              <div className="offer-card__stat">
                <BadgeCheck size={14} /><span>{offer.fee}</span><small>Processing Fee</small>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="apply-form__actions">
        <button type="button" className="btn btn--ghost btn--lg" onClick={() => navigate('/apply/verification')}><ArrowLeft size={16} /> Back</button>
        <button type="button" className={`btn btn--cta btn--lg ${!selected ? 'btn--disabled' : ''}`} style={{ flex: 1 }} onClick={handleProceed} disabled={!selected}>
          Accept & Proceed
        </button>
      </div>
    </div>
  );
}

export default ApplyOffers;
