import { CreditCard, Clock, IndianRupee } from 'lucide-react';
import ProductPageTemplate from './ProductPageTemplate';

const highlights = [
  { icon: IndianRupee, value: '10.49%', label: 'Starting interest rate' },
  { icon: Clock, value: '10 Minutes', label: 'Quick approval' },
  { icon: CreditCard, value: '₹10 Lakhs', label: 'Maximum amount' },
];

const features = [
  'Loan amounts from ₹10,000 to ₹10,00,000',
  'Interest rates starting at 10.49% p.a.',
  'Flexible tenure: 3 to 60 months',
  'No collateral required',
  'Disbursement within 24 hours',
  'Zero prepayment charges',
];

const eligibility = [
  { label: 'Age', value: '21 - 58 years' },
  { label: 'Minimum Income', value: '₹15,000/month' },
  { label: 'Employment', value: 'Salaried or Self-Employed' },
  { label: 'Credit Score', value: '650+ (CIBIL)' },
  { label: 'Work Experience', value: 'Min. 6 months in current job' },
  { label: 'Nationality', value: 'Indian Citizen' },
];

const documents = [
  'PAN Card',
  'Aadhaar Card (for eKYC)',
  'Last 3 months bank statements',
  'Latest salary slip (salaried) / ITR (self-employed)',
  'Address proof (utility bill / rent agreement)',
];

function PersonalLoanPage() {
  return (
    <ProductPageTemplate
      badge="Personal Loan"
      title="Instant Personal Loans up to ₹10 Lakhs"
      subtitle="Get funds for any personal need — medical, travel, wedding, home renovation, or debt consolidation. Compare offers from 50+ NBFCs and get the lowest rate."
      seoTitle="Personal Loan up to ₹10 Lakhs — Instant Approval"
      seoDescription="Compare personal loan offers from 50+ RBI-registered NBFCs. Rates starting at 10.49% p.a. Approval in 10 minutes. 100% digital."
      ctaText="Ready to apply?"
      highlights={highlights}
      features={features}
      eligibility={eligibility}
      documents={documents}
    />
  );
}

export default PersonalLoanPage;
