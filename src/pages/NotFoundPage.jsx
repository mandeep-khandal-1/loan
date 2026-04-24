import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import './InfoPage.css';

function NotFoundPage() {
  return (
    <div className="info-page">
      <section className="section" style={{ textAlign: 'center', minHeight: '50vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: 'var(--text-6xl)', fontWeight: 700, color: 'var(--gray-200)', marginBottom: 'var(--sp-4)' }}>404</h1>
          <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--gray-900)', marginBottom: 'var(--sp-3)' }}>Page Not Found</h2>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)', marginBottom: 'var(--sp-8)', maxWidth: '400px', margin: '0 auto var(--sp-8)' }}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--sp-4)' }}>
            <Link to="/" className="btn btn--cta btn--lg"><Home size={18} /> Go Home</Link>
            <button onClick={() => window.history.back()} className="btn btn--outline btn--lg"><ArrowLeft size={18} /> Go Back</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NotFoundPage;
