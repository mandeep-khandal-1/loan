import { Helmet } from 'react-helmet-async';
import { COMPANY } from '../config/company';

/**
 * SEO component for per-page meta tags.
 * Wraps react-helmet-async for consistent SEO across all pages.
 *
 * @param {Object} props
 * @param {string} props.title - Page title (will be appended with brand name)
 * @param {string} props.description - Meta description for the page
 * @param {string} [props.canonical] - Canonical URL path (e.g., "/personal-loan")
 */
function SEO({ title, description, canonical }) {
  const fullTitle = title ? `${title} | ${COMPANY.name}` : `${COMPANY.name} — ${COMPANY.tagline}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={`https://sabkaloan.com${canonical}`} />}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content="website" />
    </Helmet>
  );
}

export default SEO;
