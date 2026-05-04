import { GraduationCap, Clock, IndianRupee } from 'lucide-react';
import ProductPageTemplate from './ProductPageTemplate';

const highlights = [
  { icon: IndianRupee, value: '8.50%', label: 'Starting interest rate' },
  { icon: Clock, value: '7 Days', label: 'Processing time' },
  { icon: GraduationCap, value: '₹20 Lakhs', label: 'Maximum amount' },
];

const features = [
  'Loan amounts from ₹50,000 to ₹20,00,000',
  'Interest rates starting at 8.50% p.a.',
  'Moratorium period during study',
  'Covers tuition, hostel, and living expenses',
  'Both India and abroad courses',
  'Tax benefit under Section 80E',
];

const eligibility = [
  { label: 'Age', value: '18 - 35 years' },
  { label: 'Course', value: 'UG, PG, Professional, or Vocational' },
  { label: 'Admission', value: 'Confirmed admission letter required' },
  { label: 'Co-Applicant', value: 'Parent or guardian' },
  { label: 'Academic Record', value: 'Min. 50% in last qualification' },
];

const documents = [
  'Admission letter / offer letter',
  'Fee structure from institution',
  'PAN & Aadhaar of student and co-applicant',
  'Income proof of co-applicant',
  'Academic mark sheets',
];

function EducationLoanPage() {
  return (
    <ProductPageTemplate
      badge="Education Loan"
      title="Education Loans up to ₹20 Lakhs"
      subtitle="Fund your dreams of higher education in India or abroad. Low interest rates, moratorium period, and tax benefits included."
      seoTitle="Education Loan up to ₹20 Lakhs — Low Interest"
      seoDescription="Education loans from ₹50K to ₹20L. Study in India or abroad. Moratorium period, tax benefits under Section 80E."
      ctaText="Invest in your future"
      highlights={highlights}
      features={features}
      eligibility={eligibility}
      documents={documents}
    />
  );
}

export default EducationLoanPage;
