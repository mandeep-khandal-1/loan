import { Outlet, useLocation } from 'react-router-dom';
import { ApplicationProvider, useApplicationContext } from '../context/ApplicationContext';
import { CheckCircle, Sparkles, ShieldCheck, FileText, Zap, IndianRupee } from 'lucide-react';
import './ApplyLayout.css';

const STEPS = [
  { path: '/apply', label: 'Basic Info' },
  { path: '/apply/employment', label: 'Employment' },
  { path: '/apply/verification', label: 'Verification' },
  { path: '/apply/offers', label: 'Offers' },
  { path: '/apply/success', label: 'Done' },
];

function ApplyProgress() {
  const { pathname } = useLocation();
  const currentIndex = STEPS.findIndex((s) => s.path === pathname);

  return (
    <div className="apply-layout__progress">
      {STEPS.map((step, i) => {
        const isComplete = i < currentIndex;
        const isActive = i === currentIndex;
        return (
          <div
            key={step.path}
            className={`apply-step ${isActive ? 'apply-step--active' : ''} ${isComplete ? 'apply-step--complete' : ''}`}
          >
            <div className="apply-step__circle">
              {isComplete ? <CheckCircle size={18} /> : <span>{i + 1}</span>}
            </div>
            {i < STEPS.length - 1 && <div className="apply-step__line" />}
          </div>
        );
      })}
    </div>
  );
}

function ApplyLayout() {
  return (
    <ApplicationProvider>
      <div className="apply-layout-split">
        {/* Left Side: Value Props & Brand */}
        <div className="apply-layout__left">
          <div className="apply-left__content">
            <h1 className="apply-left__title">Your personal loan should feel personal</h1>
            <ul className="apply-left__list">
              <li>
                <Sparkles className="apply-left__icon" size={20} />
                <span>Personalised loan offers from trusted lenders</span>
              </li>
              <li>
                <Sparkles className="apply-left__icon" size={20} />
                <span>See EMIs, interest rates, and total costs upfront</span>
              </li>
              <li>
                <Sparkles className="apply-left__icon" size={20} />
                <span>Apply in minutes with a simple, guided journey</span>
              </li>
            </ul>
          </div>
          
          <div className="apply-left__illustration">
             <div className="apply-bag">
                <IndianRupee size={48} className="apply-bag__icon" />
             </div>
          </div>
        </div>

        {/* Right Side: Form Flow */}
        <div className="apply-layout__right">
          <div className="apply-right__inner">
            <ApplyProgress />
            <div className="apply-right__form-container">
              <Outlet />
            </div>

            <div className="apply-trust-badges">
              <div className="apply-trust-badge">
                <ShieldCheck size={24} className="apply-trust-icon" />
                <span className="apply-trust-title">100%</span>
                <span className="apply-trust-desc">Data Secure</span>
              </div>
              <div className="apply-trust-badge">
                <FileText size={24} className="apply-trust-icon" />
                <span className="apply-trust-title">Zero</span>
                <span className="apply-trust-desc">Paperwork</span>
              </div>
              <div className="apply-trust-badge">
                <Zap size={24} className="apply-trust-icon" />
                <span className="apply-trust-title">Zero</span>
                <span className="apply-trust-desc">Hidden Charges</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ApplicationProvider>
  );
}

export default ApplyLayout;
