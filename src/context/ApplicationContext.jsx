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

export function ApplicationProvider({ children }) {
  const [data, setData] = useState(() => {
    try {
      const saved = sessionStorage.getItem('sabkaloan_application');
      return saved ? { ...INITIAL_DATA, ...JSON.parse(saved) } : INITIAL_DATA;
    } catch {
      return INITIAL_DATA;
    }
  });

  const updateData = useCallback((updates) => {
    setData((prev) => {
      const next = { ...prev, ...updates };
      try {
        sessionStorage.setItem('sabkaloan_application', JSON.stringify(next));
      } catch { /* ignore */ }
      return next;
    });
  }, []);

  const resetData = useCallback(() => {
    setData(INITIAL_DATA);
    try {
      sessionStorage.removeItem('sabkaloan_application');
    } catch { /* ignore */ }
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
