/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import ApplyLayout from './layouts/ApplyLayout';
import { LazyPage } from './components/PageLoader';
import ProtectedStep from './components/ProtectedStep';

/* ── Lazy-loaded pages (code splitting) ── */
const HomePage = lazy(() => import('./pages/HomePage'));
const PersonalLoanPage = lazy(() => import('./pages/PersonalLoanPage'));
const BusinessLoanPage = lazy(() => import('./pages/BusinessLoanPage'));
const EducationLoanPage = lazy(() => import('./pages/EducationLoanPage'));
const EmiCalculatorPage = lazy(() => import('./pages/EmiCalculatorPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const GrievancePage = lazy(() => import('./pages/GrievancePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const ApplyBasicInfo = lazy(() => import('./pages/apply/ApplyBasicInfo'));
const ApplyEmployment = lazy(() => import('./pages/apply/ApplyEmployment'));
const ApplyVerification = lazy(() => import('./pages/apply/ApplyVerification'));
const ApplyOffers = lazy(() => import('./pages/apply/ApplyOffers'));
const ApplySuccess = lazy(() => import('./pages/apply/ApplySuccess'));

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { index: true, element: <LazyPage><HomePage /></LazyPage> },
      { path: 'personal-loan', element: <LazyPage><PersonalLoanPage /></LazyPage> },
      { path: 'business-loan', element: <LazyPage><BusinessLoanPage /></LazyPage> },
      { path: 'education-loan', element: <LazyPage><EducationLoanPage /></LazyPage> },
      { path: 'emi-calculator', element: <LazyPage><EmiCalculatorPage /></LazyPage> },
      { path: 'about', element: <LazyPage><AboutPage /></LazyPage> },
      { path: 'contact', element: <LazyPage><ContactPage /></LazyPage> },
      { path: 'privacy-policy', element: <LazyPage><PrivacyPolicyPage /></LazyPage> },
      { path: 'terms', element: <LazyPage><TermsPage /></LazyPage> },
      { path: 'grievance', element: <LazyPage><GrievancePage /></LazyPage> },
      {
        path: 'apply',
        element: <ApplyLayout />,
        children: [
          { index: true, element: <LazyPage><ApplyBasicInfo /></LazyPage> },
          {
            path: 'employment',
            element: <LazyPage><ProtectedStep step="employment"><ApplyEmployment /></ProtectedStep></LazyPage>,
          },
          {
            path: 'verification',
            element: <LazyPage><ProtectedStep step="verification"><ApplyVerification /></ProtectedStep></LazyPage>,
          },
          {
            path: 'offers',
            element: <LazyPage><ProtectedStep step="offers"><ApplyOffers /></ProtectedStep></LazyPage>,
          },
          {
            path: 'success',
            element: <LazyPage><ProtectedStep step="success"><ApplySuccess /></ProtectedStep></LazyPage>,
          },
          /* Catch-all: redirect unknown apply sub-routes back to step 1 */
          { path: '*', element: <Navigate to="/apply" replace /> },
        ],
      },
      { path: '*', element: <LazyPage><NotFoundPage /></LazyPage> },
    ],
  },
]);
