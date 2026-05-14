import { COMPANY } from '../config/company';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import './InfoPage.css';

function PrivacyPolicyPage() {
  return (
    <div className="info-page">
      <SEO title="Privacy Policy" description={`Privacy Policy for ${COMPANY.name}. Learn how we collect, use, and protect your personal data.`} />

      <ScrollReveal>
        <section className="info-hero">
          <div className="container">
            <span className="section-badge">Legal</span>
            <h1 className="info-hero__title">Privacy Policy</h1>
            <p className="info-hero__subtitle">Last updated: April 2026</p>
          </div>
        </section>
      </ScrollReveal>

      <section className="section">
        <div className="container legal-content">
          <ScrollReveal delay={0.1}>
            <h2>1. Information We Collect</h2>
            <p>When you use {COMPANY.name}, we collect the following categories of personal information:</p>
            <ul>
              <li><strong>Identity Data:</strong> Full name, date of birth, PAN number, Aadhaar number (for eKYC).</li>
              <li><strong>Contact Data:</strong> Email address, mobile number, residential address.</li>
              <li><strong>Financial Data:</strong> Employment details, monthly income, existing obligations, bank statements (only when you choose to share).</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent, device information, IP address.</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h2>2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Match your profile with suitable lending partners</li>
              <li>Forward your application to NBFC/bank partners you select</li>
              <li>Communicate application status and loan offers</li>
              <li>Improve our matching algorithms and platform experience</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <h2>3. Data Sharing</h2>
            <p>We share your data <strong>only</strong> with the lending partner(s) you explicitly choose to apply with. We do not sell your data to third parties for marketing purposes.</p>

            <h2>4. Data Security</h2>
            <p>We employ industry-standard security measures including 256-bit SSL encryption, access controls, and regular security audits. Our data practices conform to ISO 27001 standards.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <h2>5. Data Retention</h2>
            <p>Your data is retained for a period of 5 years from the date of last interaction, or as required by applicable laws, whichever is longer.</p>

            <h2>6. Your Rights (DPDP Act)</h2>
            <p>Under the Digital Personal Data Protection Act, 2023, you have the right to:</p>
            <ul>
              <li>Access your personal data held by us</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data (subject to regulatory retention requirements)</li>
              <li>Withdraw consent for data processing</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <h2>7. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact our Grievance Officer at <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.</p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicyPage;
