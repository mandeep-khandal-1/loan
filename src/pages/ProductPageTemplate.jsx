import { Link } from 'react-router-dom';
import { CheckCircle, FileText, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import './ProductPage.css';

/**
 * Reusable product page template.
 * Eliminates 90% code duplication across PersonalLoan, BusinessLoan, and EducationLoan pages.
 *
 * @param {Object} props
 * @param {string} props.badge - Section badge text (e.g., "Personal Loan")
 * @param {string} props.title - Hero title
 * @param {string} props.subtitle - Hero subtitle
 * @param {string} props.seoTitle - SEO page title
 * @param {string} props.seoDescription - SEO meta description
 * @param {string} props.ctaText - CTA block heading
 * @param {Array} props.highlights - Array of { icon, value, label } for hero highlight cards
 * @param {Array<string>} props.features - Feature list
 * @param {Array<{label: string, value: string}>} props.eligibility - Eligibility criteria
 * @param {Array<string>} props.documents - Required documents list
 */
function ProductPageTemplate({
  badge,
  title,
  subtitle,
  seoTitle,
  seoDescription,
  ctaText = 'Ready to apply?',
  highlights = [],
  features = [],
  eligibility = [],
  documents = [],
}) {
  return (
    <div className="product-page">
      <SEO title={seoTitle} description={seoDescription} />

      <ScrollReveal>
        <section className="product-hero">
          <div className="container product-hero__inner">
            <div className="product-hero__content">
              <span className="section-badge">{badge}</span>
              <h1 className="product-hero__title">{title}</h1>
              <p className="product-hero__subtitle">{subtitle}</p>
              <div className="product-hero__actions">
                <Link to="/apply" className="btn btn--cta btn--lg">Apply Now <ArrowRight size={18} /></Link>
                <Link to="/emi-calculator" className="btn btn--outline btn--lg">Calculate EMI</Link>
              </div>
            </div>
            <div className="product-hero__highlights">
              {highlights.map((h, i) => (
                <div className="product-hero__highlight-card" key={i}>
                  <h.icon size={20} />
                  <div><strong>{h.value}</strong><br /><span>{h.label}</span></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <section className="section">
        <div className="container">
          <div className="product-grid">
            <ScrollReveal delay={0.1}>
              <div>
                <h2 className="product-section-title">Key Features</h2>
                <ul className="product-features">
                  {features.map((f, i) => (
                    <li key={i} className="product-feature-item">
                      <CheckCircle size={18} className="product-check" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <h2 className="product-section-title">Eligibility Criteria</h2>
                <table className="product-table">
                  <tbody>
                    {eligibility.map((e, i) => (
                      <tr key={i}>
                        <td className="product-table__label">{e.label}</td>
                        <td className="product-table__value">{e.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <ScrollReveal delay={0.3}>
            <h2 className="product-section-title">Documents Required</h2>
            <div className="product-docs">
              {documents.map((d, i) => (
                <div key={i} className="product-doc-item">
                  <FileText size={18} />
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <div className="product-cta-block">
              <h3>{ctaText}</h3>
              <p>Check your eligibility in 2 minutes — no impact on your credit score.</p>
              <Link to="/apply" className="btn btn--cta btn--lg">Start Application <ArrowRight size={18} /></Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

export default ProductPageTemplate;
