import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, FileText, ShieldCheck } from 'lucide-react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { COMPANY } from '../config/company';
import './Hero.css';

const APPROVAL_TEXTS = [
  "get approved.",        // English
  "मंज़ूर होते हैं।",         // Hindi
  "ਪਾਸ ਹੁੰਦੇ ਨੇ।",            // Punjabi
  "मंजूर होतात.",          // Marathi
  "મંજૂર થાય છે.",           // Gujarati
  "ఆమోదించబడతాయి.",    // Telugu
  "அனுமதிக்கப்படும்."      // Tamil
];

function Hero() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
  });
  const [errors, setErrors] = useState({});
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % APPROVAL_TEXTS.length);
    }, 2500); // Change text every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  // Mouse tracking for interactive background
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  const handleMouseMove = (e) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!/^[6-9]\d{9}$/.test(formData.mobile)) errs.mobile = 'Enter valid 10-digit mobile';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate('/apply', {
        state: {
          fullName: formData.fullName,
          mobile: formData.mobile,
        },
      });
    }
  };

  return (
    <section className="hero" id="hero" onMouseMove={handleMouseMove}>
      {/* Interactive Background */}
      <div className="hero__grid-bg"></div>
      <motion.div
        className="hero__mouse-glow"
        style={{ x: smoothX, y: smoothY }}
      />
      <div className="hero__shapes">
        <div className="hero__shape hero__shape--1"></div>
        <div className="hero__shape hero__shape--2"></div>
        <div className="hero__shape hero__shape--3"></div>
      </div>

      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.1 }
            }
          }}
        >
          <motion.h1
            className="hero__title"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { type: 'spring', damping: 25, stiffness: 100 } }
            }}
          >
            Loans that actually<br />
            <span className="hero__title--rotator">
              <AnimatePresence mode="wait">
                <motion.span
                  key={textIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="hero__title--accent"
                >
                  {APPROVAL_TEXTS[textIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            className="hero__subtitle"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { type: 'spring', damping: 25, stiffness: 100 } }
            }}
          >
            We compare offers from {COMPANY.stats.partners} RBI-registered NBFCs to find you the
            lowest rates. 100% digital. Approval in minutes. Funds same day.
          </motion.p>
        </motion.div>

        <motion.div
          className="hero__form-wrap" id="hero-form"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, type: 'spring', damping: 25 }}
        >
          <form className="hero__form" onSubmit={handleSubmit} id="lead-form" noValidate>

            <h2 className="hero__form-title">Check Your Eligibility</h2>
            <p className="hero__form-desc">Get personalized loan offers in 2 minutes</p>

            <div className="form-group hero-mobile-hide">
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

            <div className="form-group" style={{ marginBottom: 'var(--sp-2)' }}>
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

            <button type="submit" className="btn btn--cta btn--lg btn--full" id="lead-submit">
              <ShieldCheck size={18} /> Check My Eligibility
            </button>

            <p className="hero__form-safe">
              <ShieldCheck size={13} /> Your information is 100% safe. We never share your data.
            </p>
          </form>
        </motion.div>

        {/* Badges — separate grid child for mobile reordering */}
        <motion.div
          className="hero__badges"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6, type: 'spring', damping: 25 }}
        >
          <div className="hero__badge-item">
            <div className="hero__badge-icon-wrap">
              <Zap size={20} />
            </div>
            <div className="hero__badge-text">
              <span className="hero__badge-title">10-Minute Approval</span>
              <span className="hero__badge-desc">AI-powered instant eligibility check</span>
            </div>
          </div>
          <div className="hero__badge-item">
            <div className="hero__badge-icon-wrap">
              <FileText size={20} />
            </div>
            <div className="hero__badge-text">
              <span className="hero__badge-title">Zero Paperwork</span>
              <span className="hero__badge-desc">100% digital with Aadhaar eKYC</span>
            </div>
          </div>
          <div className="hero__badge-item">
            <div className="hero__badge-icon-wrap">
              <ShieldCheck size={20} />
            </div>
            <div className="hero__badge-text">
              <span className="hero__badge-title">No Hidden Fees</span>
              <span className="hero__badge-desc">Transparent rates, no surprises</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
