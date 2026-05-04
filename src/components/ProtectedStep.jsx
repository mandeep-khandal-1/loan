import { Navigate } from 'react-router-dom';
import { useApplicationContext } from '../context/ApplicationContext';

/**
 * Route guard for the multi-step apply flow.
 * Checks that required data from previous steps exists before rendering the step.
 * Redirects to the appropriate earlier step if data is incomplete.
 */

const STEP_REQUIREMENTS = {
  employment: {
    check: (data) => data.fullName && data.email && data.mobile && data.dob && data.pan,
    redirect: '/apply',
  },
  verification: {
    check: (data) => data.fullName && data.employmentType && data.monthlyIncome && data.loanAmount,
    redirect: '/apply/employment',
  },
  offers: {
    check: (data) => data.otpVerified === true,
    redirect: '/apply/verification',
  },
  success: {
    check: (data) => data.otpVerified === true && data.selectedOffer !== null,
    redirect: '/apply/offers',
  },
};

function ProtectedStep({ step, children }) {
  const { data } = useApplicationContext();
  const requirement = STEP_REQUIREMENTS[step];

  if (requirement && !requirement.check(data)) {
    return <Navigate to={requirement.redirect} replace />;
  }

  return children;
}

export default ProtectedStep;
