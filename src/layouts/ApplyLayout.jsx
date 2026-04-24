import { Outlet, useLocation } from 'react-router-dom';
import { ApplicationProvider, useApplicationContext } from '../context/ApplicationContext';
import { CheckCircle } from 'lucide-react';
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
            <span className="apply-step__label">{step.label}</span>
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
      <div className="apply-layout">
        <div className="container">
          <div className="apply-layout__header">
            <h1 className="apply-layout__title">Loan Application</h1>
            <p className="apply-layout__subtitle">Complete the steps below to get matched with the best loan offers</p>
          </div>
          <ApplyProgress />
          <div className="apply-layout__body">
            <Outlet />
          </div>
        </div>
      </div>
    </ApplicationProvider>
  );
}

export default ApplyLayout;
