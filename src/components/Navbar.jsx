import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const { pathname } = useLocation();

  const close = () => { setMenuOpen(false); setProductsOpen(false); };

  return (
    <nav className="navbar" id="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand" id="nav-brand" onClick={close}>
          <img src="/logo.png" alt="SabkaLoan" className="navbar__logo" />
          <span className="navbar__name">SabkaLoan</span>
        </Link>

        <button
          className="navbar__toggle"
          id="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`navbar__right ${menuOpen ? 'navbar__right--open' : ''}`}>
          <ul className="navbar__links" id="nav-links">
            <li
              className="navbar__dropdown"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="navbar__link navbar__link--dropdown" aria-expanded={productsOpen}>
                Loan Products <ChevronDown size={14} className={productsOpen ? 'rotate-180' : ''} />
              </button>
              {productsOpen && (
                <div className="navbar__dropdown-menu">
                  <Link to="/personal-loan" className="navbar__dropdown-item" onClick={close}>Personal Loan</Link>
                  <Link to="/business-loan" className="navbar__dropdown-item" onClick={close}>Business Loan</Link>
                  <Link to="/education-loan" className="navbar__dropdown-item" onClick={close}>Education Loan</Link>
                </div>
              )}
            </li>
            <li><NavLink to="/emi-calculator" className="navbar__link" onClick={close}>EMI Calculator</NavLink></li>
            <li><NavLink to="/about" className="navbar__link" onClick={close}>About Us</NavLink></li>
            <li><NavLink to="/contact" className="navbar__link" onClick={close}>Contact</NavLink></li>
          </ul>

          <Link to="/apply" className="btn btn--cta btn--md navbar__cta" id="nav-cta" onClick={close}>
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
