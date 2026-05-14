import { COMPANY } from '../config/company';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import './InfoPage.css';

function TermsPage() {
  return (
    <div className="info-page">
      <SEO title="Terms of Service" description={`Terms of Service for ${COMPANY.name}. Read our terms for using the loan comparison platform.`} />

      <ScrollReveal>
        <section className="info-hero">
          <div className="container">
            <span className="section-badge">Legal</span>
            <h1 className="info-hero__title">Terms of Service</h1>
            <p className="info-hero__subtitle">Last updated: April 2026</p>
          </div>
        </section>
      </ScrollReveal>

      <section className="section">
        <div className="container legal-content">
          <ScrollReveal delay={0.1}>
            <h2>1. About {COMPANY.name}</h2>
            <p>{COMPANY.name} is a digital platform operated by {COMPANY.legalName} that acts as a Direct Selling Agent (DSA) / Loan Distributor. We facilitate connections between borrowers and RBI-registered lending institutions. <strong>We do not lend money directly.</strong></p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h2>2. Eligibility</h2>
            <p>To use our services, you must be: (a) an Indian citizen, (b) at least 21 years of age, (c) of sound mind and legal capacity to enter into contracts.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <h2>3. Services</h2>
            <p>Our platform allows you to:</p>
            <ul>
              <li>Check your loan eligibility across multiple lenders</li>
              <li>Compare interest rates, processing fees, and loan terms</li>
              <li>Submit a loan application to your chosen lending partner</li>
              <li>Track your application status</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <h2>4. No Guarantee of Approval</h2>
            <p>{COMPANY.name} does not guarantee loan approval. Final lending decisions, interest rates, and loan terms are determined solely by the respective NBFC/bank partner based on their credit assessment policies.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <h2>5. Accuracy of Information</h2>
            <p>You agree to provide accurate, complete, and current information. Any misrepresentation may result in rejection of your application and/or legal action.</p>

            <h2>6. Fee Disclosure</h2>
            <p>{COMPANY.name} does <strong>not</strong> charge any fee from borrowers. Our revenue comes from commissions paid by lending partners. All fees displayed on the platform (processing fee, prepayment charges, etc.) are charged by the respective lending partner as per their published schedule.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <h2>7. Intellectual Property</h2>
            <p>All content, branding, and technology on this platform are the property of {COMPANY.legalName} and may not be reproduced without written consent.</p>

            <h2>8. Limitation of Liability</h2>
            <p>{COMPANY.name} shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of our platform or decisions made by lending partners.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.7}>
            <h2>9. Governing Law</h2>
            <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of {COMPANY.address.city}, {COMPANY.address.state}.</p>

            <h2>10. Contact</h2>
            <p>For queries regarding these terms, contact us at <strong>{COMPANY.legalEmail}</strong>.</p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

export default TermsPage;
