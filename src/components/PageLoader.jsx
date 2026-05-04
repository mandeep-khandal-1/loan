import { Suspense } from 'react';
import { Loader2 } from 'lucide-react';

/**
 * Suspense fallback: minimal loading spinner for lazy-loaded routes.
 */
function PageLoader() {
  return (
    <div className="page-loader">
      <Loader2 size={32} className="page-loader__spinner" />
      <span className="page-loader__text">Loading...</span>
    </div>
  );
}

/**
 * Wrapper for lazy-loaded pages. Combines Suspense with a consistent loading UI.
 */
function LazyPage({ children }) {
  return (
    <Suspense fallback={<PageLoader />}>
      {children}
    </Suspense>
  );
}

export { PageLoader, LazyPage };
export default PageLoader;
