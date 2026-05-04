import { Component } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';

/**
 * Error Boundary — catches render-time errors and shows a friendly fallback UI.
 * Prevents the entire app from white-screening on uncaught exceptions.
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // In production, send this to Sentry / LogRocket / your monitoring service
    console.error('[ErrorBoundary]', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-boundary__inner">
            <div className="error-boundary__icon">
              <AlertTriangle size={40} />
            </div>
            <h2 className="error-boundary__title">Something went wrong</h2>
            <p className="error-boundary__desc">
              We encountered an unexpected error. Please try refreshing the page or go back to the home page.
            </p>
            <div className="error-boundary__actions">
              <button onClick={this.handleReset} className="btn btn--cta btn--lg">
                <RefreshCw size={18} /> Try Again
              </button>
              <Link to="/" className="btn btn--outline btn--lg" onClick={this.handleReset}>
                <Home size={18} /> Go Home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
