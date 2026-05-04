import { Building, Clock, IndianRupee } from 'lucide-react';
import ProductPageTemplate from './ProductPageTemplate';

const highlights = [
  { icon: IndianRupee, value: '12%', label: 'Starting interest rate' },
  { icon: Clock, value: '48 Hours', label: 'Disbursement time' },
  { icon: Building, value: '₹50 Lakhs', label: 'Maximum amount' },
];

const features = [
  'Loan amounts from ₹1,00,000 to ₹50,00,000',
  'Interest rates starting at 12% p.a.',
  'Flexible tenure: 12 to 60 months',
  'Collateral-free up to ₹25 Lakhs',
  'Minimal documentation',
  'Working capital and expansion funding',
];

const eligibility = [
  { label: 'Age', value: '25 - 65 years' },
  { label: 'Business Vintage', value: 'Min. 2 years' },
  { label: 'Annual Turnover', value: '₹10 Lakhs+' },
  { label: 'Credit Score', value: '680+ (CIBIL)' },
  { label: 'Business Type', value: 'Proprietorship, Partnership, Pvt Ltd' },
];

const documents = [
  'Business registration / GST certificate',
  'PAN Card of business & proprietor',
  'Last 2 years ITR with computation',
  'Last 6 months bank statements',
  'Office address proof',
];

function BusinessLoanPage() {
  return (
    <ProductPageTemplate
      badge="Business Loan"
      title="Business Loans up to ₹50 Lakhs"
      subtitle="Fuel your business growth with collateral-free loans. Quick approval, minimal documentation, and flexible repayment options for SMEs and startups."
      seoTitle="Business Loan up to ₹50 Lakhs — Quick Approval"
      seoDescription="Collateral-free business loans from ₹1L to ₹50L. Compare offers from 50+ NBFC partners. Disbursement in 48 hours."
      ctaText="Ready to grow your business?"
      highlights={highlights}
      features={features}
      eligibility={eligibility}
      documents={documents}
    />
  );
}

export default BusinessLoanPage;
