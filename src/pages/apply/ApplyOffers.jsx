import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApplicationContext } from '../../context/ApplicationContext';
import { ArrowLeft, CheckCircle, IndianRupee, Percent, Calendar, BadgeCheck } from 'lucide-react';
import './ApplyFlow.css';

const generateOffers = (income, amount) => {
  const inc = Number(income) || 50000;
  const amt = Number(amount) || 300000;
  return [
    { id: 1, lender: 'Bajaj Finserv', rate: '10.49%', tenure: '36 months', emi: Math.round(amt / 36 * 1.18), fee: '1.5%', color: '#003B71' },
    { id: 2, lender: 'Tata Capital', rate: '11.25%', tenure: '24 months', emi: Math.round(amt / 24 * 1.2), fee: '2.0%', color: '#00235B' },
    { id: 3, lender: 'ICICI Bank', rate: '12.00%', tenure: '48 months', emi: Math.round(amt / 48 * 1.22), fee: '1.0%', color: '#B02A30' },
  ];
};

function ApplyOffers() {
  const navigate = useNavigate();
  const { data, updateData } = useApplicationContext();
  const [selected, setSelected] = useState(null);
  const offers = generateOffers(data.monthlyIncome, data.loanAmount);

  const fmt = (v) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(v);

  const handleProceed = () => {
    if (!selected) return;
    const ref = `SL${Date.now().toString().slice(-8)}`;
    updateData({ selectedOffer: offers.find(o => o.id === selected), referenceId: ref });
    navigate('/apply/success');
  };

  return (
    <div className="apply-form">
      <h2 className="apply-form__title">Your Matched Offers</h2>
      <p className="apply-form__desc">Based on your profile, here are the best offers from our partners.</p>

      <div className="offers-list">
        {offers.map((offer) => (
          <button
            key={offer.id}
            className={`offer-card ${selected === offer.id ? 'offer-card--selected' : ''}`}
            onClick={() => setSelected(offer.id)}
            type="button"
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
                <Percent size={14} /><span>{offer.rate}</span><small>Interest Rate</small>
              </div>
              <div className="offer-card__stat">
                <IndianRupee size={14} /><span>{fmt(offer.emi)}</span><small>Monthly EMI</small>
              </div>
              <div className="offer-card__stat">
                <Calendar size={14} /><span>{offer.tenure}</span><small>Tenure</small>
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
