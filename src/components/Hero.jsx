import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, FileText, ShieldCheck, Users, IndianRupee, Building2, Star } from 'lucide-react';
import './Hero.css';

function Hero() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    loanAmount: '200000',
    employment: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!/^[6-9]\d{9}$/.test(formData.mobile)) errs.mobile = 'Enter valid 10-digit mobile';
    if (!formData.employment) errs.employment = 'Select your employment type';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Store initial lead data and navigate to full application
      try {
        sessionStorage.setItem('sabkaloan_application', JSON.stringify({
          fullName: formData.name,
          mobile: formData.mobile,
          loanAmount: formData.loanAmount,
          employmentType: formData.employment,
        }));
      } catch { /* ignore */ }
      navigate('/apply');
    }
  };

  const formatAmount = (val) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

  return (
    <section className="hero" id="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-dot" />
            Trusted by 2,00,000+ Indians
          </div>

          <h1 className="hero__title">
            Get Instant Personal Loans
            <span className="hero__title--accent"> up to ₹10 Lakhs</span>
          </h1>

          <p className="hero__subtitle">
            We compare offers from 50+ RBI-registered NBFCs to find you the
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
              <span className="hero__stat-val"><Users size={18} /> 2L+</span>
              <span className="hero__stat-label">Customers</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-val"><IndianRupee size={18} /> 500Cr+</span>
              <span className="hero__stat-label">Disbursed</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-val"><Building2 size={18} /> 50+</span>
              <span className="hero__stat-label">NBFC Partners</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-val"><Star size={18} /> 4.5</span>
              <span className="hero__stat-label">User Rating</span>
            </div>
          </div>
        </div>

        <div className="hero__form-wrap" id="hero-form">
          <form className="hero__form" onSubmit={handleSubmit} id="lead-form">
            <h2 className="hero__form-title">Check Your Eligibility</h2>
            <p className="hero__form-desc">Get personalized loan offers in 2 minutes</p>

            <div className="form-group">
              <label htmlFor="lead-name" className="form-label">Full Name</label>
              <input
                id="lead-name"
                type="text"
                className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
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
              />
              {errors.mobile && <span className="form-error">{errors.mobile}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="lead-amount" className="form-label">
                Loan Amount: <strong>{formatAmount(formData.loanAmount)}</strong>
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
              <label htmlFor="lead-employment" className="form-label">Employment Type</label>
              <select
                id="lead-employment"
                className={`form-select ${errors.employment ? 'form-input--error' : ''}`}
                value={formData.employment}
                onChange={(e) => handleChange('employment', e.target.value)}
              >
                <option value="">Select type</option>
                <option value="salaried">Salaried</option>
                <option value="self-employed">Self-Employed</option>
                <option value="business">Business Owner</option>
                <option value="freelancer">Freelancer</option>
              </select>
              {errors.employment && <span className="form-error">{errors.employment}</span>}
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
