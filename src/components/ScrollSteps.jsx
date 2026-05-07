import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, animate } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import './ScrollSteps.css';

/* ── Helper: Animated Number ── */
function AnimatedNumber({ value, active, format = Math.round, duration = 1.5 }) {
  const formatRef = useRef(format);
  formatRef.current = format;
  const [display, setDisplay] = useState(formatRef.current(0));
  
  useEffect(() => {
    if (active) {
      const controls = animate(0, value, {
        duration,
        ease: "easeOut",
        onUpdate(v) {
          setDisplay(formatRef.current(v));
        }
      });
      return () => controls.stop();
    } else {
      setDisplay(formatRef.current(0));
    }
  }, [active, value, duration]);

  return <>{display}</>;
}

const stepsData = [
  {
    label: 'Register',
    title: 'Register',
    desc: 'Sign up using your mobile number to register. Quick, simple, and 100% digital.',
    image: '/step-register.webp',
    cards: [
      { type: 'orange', title: 'Enter your phone number', body: '9**** 9****', position: 'top-left' },
      { type: 'pink', title: 'Enter OTP', body: 'otp', position: 'bottom-right' },
    ],
  },
  {
    label: 'Complete Profile',
    title: 'Complete Profile',
    desc: 'Provide personal, employment, and income information, complete KYC, and upload a selfie.',
    image: '/step-profile.webp',
    cards: [
      { type: 'green', title: 'Verify your account', body: 'Upload your PAN card / Aadhaar card', position: 'top-left', hasCheck: true },
      { type: 'pink', title: 'Upload Picture', body: 'progress', position: 'bottom-right' },
    ],
  },
  {
    label: 'Get Loan',
    title: 'Get Loan',
    desc: 'Select the loan amount and tenure, and get the loan credited to your bank within minutes.',
    image: '/step-funded.webp',
    cards: [
      { type: 'pink-white', title: 'Receive Money', body: 'amount', position: 'top-right' },
      { type: 'orange', title: 'Amount details', body: 'Customer ID\nCustomer Account', position: 'bottom-left' },
    ],
  },
];

/* ── Main Component ── */
function ScrollSteps() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  /*
   * Scroll map (0 → 1):
   *   0.00 – 0.10  → Section scrolls UP into view (entry animation)
   *   0.10 – 0.25  → Step 1: Register
   *   0.25 – 0.40  → Step 2: Complete Profile
   *   0.40 – 0.55  → Step 3: Get Loan
   *   0.55 – 0.65  → Hold final step
   *   0.65 – 0.75  → Section scrolls UP out of view (exit animation)
   *   0.75 – 1.00  → Gone
   */

  // Entry: fade in + slide up
  const entryOpacity = useTransform(scrollYProgress, [0.0, 0.05], [0, 1]);
  const entryY = useTransform(scrollYProgress, [0.0, 0.05], [100, 0]);

  // Quick transitions for less "heavy" scrolling.
  // In a 400vh container (300vh scrollable):
  // 0% - 25% (0-75vh): Step 1
  // 25% - 50% (75-150vh): Step 2
  // 50% - 100% (150-300vh): Step 3 (Fully visible 150-200vh, then covered by overlay 200-300vh)
  const step1Active = useTransform(scrollYProgress, (v) => v < 0.25);
  const step2Active = useTransform(scrollYProgress, (v) => v >= 0.25 && v < 0.50);
  const step3Active = useTransform(scrollYProgress, (v) => v >= 0.50);

  return (
    <section className="ss" id="scroll-steps" ref={containerRef}>
      <div className="ss__sticky">
        {/* Background shapes with parallax */}
        <BgShapes progress={scrollYProgress} />

        <motion.div
          className="container ss__inner"
          style={{
            opacity: useTransform(scrollYProgress, (p) => Math.min(1, p / 0.10)),
            y: useTransform(scrollYProgress, (p) => {
              if (p < 0.10) return 100 * (1 - p / 0.10);
              return 0;
            }),
          }}
        >
          {/* ── LEFT SIDE ── */}
          <div className="ss__left">
            <h2 className="ss__heading">
              Get your loan in
              <br />
              <span className="ss__heading-accent">3 simple steps</span>
            </h2>

            <div className="ss__steps-nav">
              {stepsData.map((step, i) => (
                <StepLabel key={i} step={step} isActive={[step1Active, step2Active, step3Active][i]} />
              ))}
            </div>
          </div>

          {/* ── RIGHT SIDE ── */}
          <div className="ss__right">
            <div className="ss__visual-stage">
              {stepsData.map((step, i) => (
                <StepVisual key={i} step={step} isActive={[step1Active, step2Active, step3Active][i]} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Background Shapes with Parallax ── */
function BgShapes({ progress }) {
  const y1 = useTransform(progress, [0, 1], [0, -150]);
  const y2 = useTransform(progress, [0, 1], [0, -80]);
  const rotate = useTransform(progress, [0, 1], [0, 30]);

  return (
    <div className="ss-bg-shapes" aria-hidden="true">
      <motion.div className="ss-bg-shape ss-bg-shape--1" style={{ y: y1, rotate }} />
      <motion.div className="ss-bg-shape ss-bg-shape--2" style={{ y: y2 }} />
      <motion.div className="ss-bg-shape ss-bg-shape--3" style={{ y: y1 }} />
    </div>
  );
}

/* ── Step Label (left side) ── */
function StepLabel({ step, isActive }) {
  const [active, setActive] = useState(() => isActive.get());

  useMotionValueEvent(isActive, "change", (latest) => {
    setActive(latest);
  });

  return (
    <motion.div className="ss__step-label" style={{ opacity: active ? 1 : 0.35 }}>
      <h3 className="ss__step-name" style={{ fontWeight: active ? 700 : 400 }}>{step.title}</h3>
      <motion.div
        initial={false}
        animate={{ height: active ? 'auto' : 0, opacity: active ? 1 : 0 }}
        style={{ overflow: 'hidden' }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <p className="ss__step-desc">{step.desc}</p>
      </motion.div>
    </motion.div>
  );
}

/* ── Step Visual (right side) ── */
function StepVisual({ step, isActive }) {
  const [active, setActive] = useState(() => isActive.get());

  useMotionValueEvent(isActive, "change", (latest) => setActive(latest));

  return (
    <motion.div
      className="ss__visual"
      initial={false}
      animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.95, y: active ? 0 : 30 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{ pointerEvents: active ? 'auto' : 'none' }}
    >
      <div className="ss__image-wrap">
        <img src={step.image} alt={step.title} className="ss__image" loading="lazy" width="400" height="500" />
      </div>
      {step.cards.map((card, j) => (
        <FloatingCard key={j} card={card} isActive={isActive} delay={j * 0.1} />
      ))}
    </motion.div>
  );
}

/* ── Floating Card ── */
function FloatingCard({ card, isActive, delay }) {
  const [active, setActive] = useState(() => isActive.get());
  const posClass = `ss-float-card--${card.position}`;

  useMotionValueEvent(isActive, "change", (latest) => setActive(latest));

  return (
    <motion.div
      className={`ss-float-card ss-float-card--${card.type} ${posClass}`}
      initial={false}
      animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.75, y: active ? 0 : 15 }}
      transition={{ duration: 0.3, delay: active ? delay : 0, ease: "easeOut" }}
    >
      <div className="ss-float-card__header">
        {card.hasCheck && <CheckCircle size={16} className="ss-float-card__check" />}
        <span className="ss-float-card__title">{card.title}</span>
      </div>
      <div className="ss-float-card__body">
        {card.body === 'otp' ? (
          <div className="ss-otp-row">
            {[1, 2, 3, 4].map((n) => <div key={n} className="ss-otp-box">*</div>)}
          </div>
        ) : card.body === 'progress' ? (
          <div className="ss-progress-ring">
            <svg viewBox="0 0 80 80" className="ss-progress-svg">
              <circle cx="40" cy="40" r="32" fill="none" stroke="#e5e7eb" strokeWidth="6" />
              <motion.circle 
                cx="40" cy="40" r="32" fill="none" stroke="#10b981" strokeWidth="6"
                strokeLinecap="round" transform="rotate(-90 40 40)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: active ? 0.5 : 0 }}
                transition={{ duration: 1.5, delay: delay + 0.2, ease: "easeOut" }}
              />
            </svg>
            <div className="ss-progress-text">
              <span className="ss-progress-num">
                <AnimatedNumber value={50} active={active} />
              </span>
              <span className="ss-progress-pct">%</span>
            </div>
          </div>
        ) : card.body === 'amount' ? (
          <div className="ss-amount-display">
            <span className="ss-amount-symbol">₹ </span>
            <span className="ss-amount-val">
              <AnimatedNumber 
                value={10000} 
                active={active} 
                format={(v) => Math.round(v).toLocaleString('en-IN')} 
                duration={2}
              />
            </span>
          </div>
        ) : (
          <p className="ss-float-card__text">{card.body}</p>
        )}
      </div>
    </motion.div>
  );
}

export default ScrollSteps;
