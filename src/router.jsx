import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import ApplyLayout from './layouts/ApplyLayout';
import HomePage from './pages/HomePage';
import PersonalLoanPage from './pages/PersonalLoanPage';
import BusinessLoanPage from './pages/BusinessLoanPage';
import EducationLoanPage from './pages/EducationLoanPage';
import EmiCalculatorPage from './pages/EmiCalculatorPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import GrievancePage from './pages/GrievancePage';
import ApplyBasicInfo from './pages/apply/ApplyBasicInfo';
import ApplyEmployment from './pages/apply/ApplyEmployment';
import ApplyVerification from './pages/apply/ApplyVerification';
import ApplyOffers from './pages/apply/ApplyOffers';
import ApplySuccess from './pages/apply/ApplySuccess';
import NotFoundPage from './pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'personal-loan', element: <PersonalLoanPage /> },
      { path: 'business-loan', element: <BusinessLoanPage /> },
      { path: 'education-loan', element: <EducationLoanPage /> },
      { path: 'emi-calculator', element: <EmiCalculatorPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'privacy-policy', element: <PrivacyPolicyPage /> },
      { path: 'terms', element: <TermsPage /> },
      { path: 'grievance', element: <GrievancePage /> },
      {
        path: 'apply',
        element: <ApplyLayout />,
        children: [
          { index: true, element: <ApplyBasicInfo /> },
          { path: 'employment', element: <ApplyEmployment /> },
          { path: 'verification', element: <ApplyVerification /> },
          { path: 'offers', element: <ApplyOffers /> },
          { path: 'success', element: <ApplySuccess /> },
        ],
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
