import { createContext, useContext, useState, useCallback } from 'react';

const ApplicationContext = createContext(null);

const INITIAL_DATA = {
  // Step 1: Basic Info
  fullName: '',
  email: '',
  mobile: '',
  dob: '',
  pan: '',
  // Step 2: Employment
  employmentType: '',
  monthlyIncome: '',
  employer: '',
  experience: '',
  loanAmount: '',
  loanPurpose: '',
  // Step 3: Verification
  otpVerified: false,
  // Step 4: Selected offer
  selectedOffer: null,
  // Reference
  referenceId: '',
};

/**
 * SECURITY NOTE: Sensitive data (PAN, mobile, personal info) is stored ONLY
 * in React state (in-memory). We do NOT persist to sessionStorage/localStorage.
 * This is compliant with RBI and DPDP Act 2023 guidelines for client-side handling.
 *
 * In a production environment, sensitive fields should be sent directly to the
 * backend via HTTPS and never cached on the client.
 */
export function ApplicationProvider({ children }) {
  const [data, setData] = useState(INITIAL_DATA);

  const updateData = useCallback((updates) => {
    setData((prev) => ({ ...prev, ...updates }));
  }, []);

  const resetData = useCallback(() => {
    setData(INITIAL_DATA);
  }, []);

  return (
    <ApplicationContext.Provider value={{ data, updateData, resetData }}>
      {children}
    </ApplicationContext.Provider>
  );
}

export function useApplicationContext() {
  const ctx = useContext(ApplicationContext);
  if (!ctx) throw new Error('useApplicationContext must be used within ApplicationProvider');
  return ctx;
}
