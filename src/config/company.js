/**
 * Company & brand configuration
 * Single source of truth for all company metadata across the app.
 * Update these values with your real business information before deploying.
 */

export const COMPANY = {
  name: 'SabkaLoan',
  legalName: 'UpAndAlone Fintech Pvt. Ltd.',
  tagline: 'Compare. Apply. Get Funded.',
  description: "India's trusted loan comparison platform.",

  // Registration
  cin: 'U74999MH2024PTC000000',
  dsaRegistration: 'DSA/MH/2024/001234',

  // Contact
  email: 'support@sabkaloan.com',
  legalEmail: 'legal@sabkaloan.com',
  dpoEmail: 'dpo@sabkaloan.com',
  grievanceEmail: 'grievance@sabkaloan.com',
  phone: '1800-123-456',
  phoneHref: 'tel:+911800123456',
  workingHours: 'Monday - Saturday, 9:00 AM - 7:00 PM IST',

  // Address
  address: {
    line1: '301, FinServe Tower, BKC',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400051',
    country: 'India',
    get full() {
      return `${this.line1}, ${this.city}, ${this.state} - ${this.pincode}`;
    },
  },

  // Grievance Officer
  grievanceOfficer: {
    name: 'Rajesh Mehta',
    email: 'grievance@sabkaloan.com',
    phone: '+91-22-4000-1234',
  },

  // Social (update with real URLs)
  social: {
    linkedin: 'https://linkedin.com/company/sabkaloan',
    twitter: 'https://twitter.com/sabkaloan',
    website: 'https://sabkaloan.com',
  },

  // Stats
  stats: {
    customers: '2,00,000+',
    customersShort: '2L+',
    disbursed: '₹500 Cr+',
    partners: '50+',
    rating: '4.8',
  },
};
