import { useState, useEffect, useCallback, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const close = useCallback(() => {
    setMenuOpen(false);
    setProductsOpen(false);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [close]);

  // Toggle dropdown for both click (mobile) and hover (desktop)
  const toggleDropdown = () => setProductsOpen((prev) => !prev);

  return (
    <div className="navbar-wrapper">
      <nav className="navbar" id="navbar" role="navigation" aria-label="Main navigation">
        <div className="navbar__inner">
          <Link to="/" className="navbar__brand" id="nav-brand" onClick={close}>
            <img src="/logo.webp" alt="SabkaLoan" className="navbar__logo" width="36" height="36" />
            <span className="navbar__name">SabkaLoan</span>
          </Link>

          <button
            className="navbar__toggle"
            id="nav-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="nav-right"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div
            className={`navbar__right ${menuOpen ? 'navbar__right--open' : ''}`}
            id="nav-right"
          >
            <ul className="navbar__links" id="nav-links" role="menubar">
              <li
                className="navbar__dropdown"
                ref={dropdownRef}
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
                role="none"
              >
                <button
                  className="navbar__link navbar__link--dropdown"
                  aria-expanded={productsOpen}
                  aria-haspopup="true"
                  onClick={toggleDropdown}
                  role="menuitem"
                >
                  Loan Products <ChevronDown size={14} className={productsOpen ? 'rotate-180' : ''} />
                </button>
                {productsOpen && (
                  <div className="navbar__dropdown-menu" role="menu">
                    <Link to="/personal-loan" className="navbar__dropdown-item" onClick={close} role="menuitem">Personal Loan</Link>
                    <Link to="/business-loan" className="navbar__dropdown-item" onClick={close} role="menuitem">Business Loan</Link>
                    <Link to="/education-loan" className="navbar__dropdown-item" onClick={close} role="menuitem">Education Loan</Link>
                  </div>
                )}
              </li>
              <li role="none"><NavLink to="/emi-calculator" className="navbar__link" onClick={close} role="menuitem">EMI Calculator</NavLink></li>
              <li role="none"><NavLink to="/about" className="navbar__link" onClick={close} role="menuitem">About Us</NavLink></li>
              <li role="none"><NavLink to="/contact" className="navbar__link" onClick={close} role="menuitem">Contact</NavLink></li>
            </ul>

            <Link to="/apply" className="btn btn--cta btn--md navbar__cta" id="nav-cta" onClick={close}>
              Apply Now
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
