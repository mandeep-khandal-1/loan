import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, FileText, ShieldCheck, Users, IndianRupee, Building2, Star } from 'lucide-react';
import { formatINR } from '../utils/financial';
import { COMPANY } from '../config/company';
import './Hero.css';

function Hero() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    loanAmount: '200000',
    employmentType: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!/^[6-9]\d{9}$/.test(formData.mobile)) errs.mobile = 'Enter valid 10-digit mobile';
    if (!formData.employmentType) errs.employmentType = 'Select your employment type';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Navigate to apply — the apply form will collect this data fresh
      // We pass minimal non-sensitive data via URL state (NOT sessionStorage)
      navigate('/apply', {
        state: {
          fullName: formData.fullName,
          mobile: formData.mobile,
          loanAmount: formData.loanAmount,
          employmentType: formData.employmentType,
        },
      });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-dot" />
            Trusted by {COMPANY.stats.customers} Indians
          </div>

          <h1 className="hero__title">
            Get Instant Personal Loans
            <span className="hero__title--accent"> up to ₹10 Lakhs</span>
          </h1>

          <p className="hero__subtitle">
            We compare offers from {COMPANY.stats.partners} RBI-registered NBFCs to find you the
            lowest rates. 100% digital. Approval in minutes. Funds same day.
          </p>

          <div className="hero__badges">
            <div className="hero__badge-item">
              <Zap size={15} />
              <span>10-Min Approval</span>
            </div>
            <div className="hero__badge-item">
              <FileText size={15} />
              <span>Zero Paperwork</span>
            </div>
            <div className="hero__badge-item">
              <ShieldCheck size={15} />
              <span>No Hidden Fees</span>
            </div>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-val"><Users size={18} /> {COMPANY.stats.customersShort}</span>
              <span className="hero__stat-label">Customers</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-val"><IndianRupee size={18} /> {COMPANY.stats.disbursed.replace('₹', '')}</span>
              <span className="hero__stat-label">Disbursed</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-val"><Building2 size={18} /> {COMPANY.stats.partners}</span>
              <span className="hero__stat-label">NBFC Partners</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-val"><Star size={18} /> {COMPANY.stats.rating}</span>
              <span className="hero__stat-label">User Rating</span>
            </div>
          </div>
        </div>

        <div className="hero__form-wrap" id="hero-form">
          <form className="hero__form" onSubmit={handleSubmit} id="lead-form" noValidate>
            <h2 className="hero__form-title">Check Your Eligibility</h2>
            <p className="hero__form-desc">Get personalized loan offers in 2 minutes</p>

            <div className="form-group">
              <label htmlFor="lead-name" className="form-label">Full Name</label>
              <input
                id="lead-name"
                type="text"
                className={`form-input ${errors.fullName ? 'form-input--error' : ''}`}
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                autoComplete="name"
              />
              {errors.fullName && <span className="form-error" role="alert">{errors.fullName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="lead-mobile" className="form-label">Mobile Number</label>
              <input
                id="lead-mobile"
                type="tel"
                className={`form-input ${errors.mobile ? 'form-input--error' : ''}`}
                placeholder="10-digit mobile number"
                maxLength={10}
                value={formData.mobile}
                onChange={(e) => handleChange('mobile', e.target.value.replace(/\D/g, ''))}
                autoComplete="tel"
              />
              {errors.mobile && <span className="form-error" role="alert">{errors.mobile}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="lead-amount" className="form-label">
                Loan Amount: <strong>{formatINR(formData.loanAmount)}</strong>
              </label>
              <input
                id="lead-amount"
                type="range"
                className="hero__slider"
                min="10000"
                max="1000000"
                step="10000"
                value={formData.loanAmount}
                onChange={(e) => handleChange('loanAmount', e.target.value)}
              />
              <div className="hero__slider-range">
                <span>₹10K</span>
                <span>₹10L</span>
              </div>
            </div>

            <div className="form-group">
              <span className="form-label">Employment Type</span>
              <div className={`hero__emp-grid ${errors.employmentType ? 'hero__emp-grid--error' : ''}`}>
                {[
                  { value: 'salaried', label: 'Salaried', icon: '💼' },
                  { value: 'self-employed', label: 'Self-Employed', icon: '🏢' },
                  { value: 'business', label: 'Business', icon: '📊' },
                  { value: 'freelancer', label: 'Freelancer', icon: '💻' },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    className={`hero__emp-card ${formData.employmentType === opt.value ? 'hero__emp-card--active' : ''}`}
                    onClick={() => handleChange('employmentType', opt.value)}
                    aria-pressed={formData.employmentType === opt.value}
                  >
                    <span className="hero__emp-icon">{opt.icon}</span>
                    <span className="hero__emp-label">{opt.label}</span>
                  </button>
                ))}
              </div>
              {errors.employmentType && <span className="form-error" role="alert">{errors.employmentType}</span>}
            </div>

            <button type="submit" className="btn btn--cta btn--lg btn--full" id="lead-submit">
              Check My Eligibility
            </button>

            <p className="hero__form-safe">
              <ShieldCheck size={13} /> Your information is 100% safe. We never share your data.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Hero;
