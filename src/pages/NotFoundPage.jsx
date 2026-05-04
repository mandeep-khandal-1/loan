import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import './InfoPage.css';
import './NotFoundPage.css';

function NotFoundPage() {
  return (
    <div className="info-page">
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." />
      <section className="section not-found-section">
        <div className="container not-found-container">
          <h1 className="not-found-code">404</h1>
          <h2 className="not-found-title">Page Not Found</h2>
          <p className="not-found-desc">The page you're looking for doesn't exist or has been moved.</p>
          <div className="not-found-actions">
            <Link to="/" className="btn btn--cta btn--lg"><Home size={18} /> Go Home</Link>
            <button onClick={() => window.history.back()} className="btn btn--outline btn--lg"><ArrowLeft size={18} /> Go Back</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NotFoundPage;
