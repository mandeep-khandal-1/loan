# SabkaLoan — India's Trusted Loan Comparison Platform

A production-grade fintech DSA (Direct Selling Agent) platform that connects borrowers with 50+ RBI-registered NBFC partners. Built with React 19, Vite, and a design-system-first approach.

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 19 + Vite 8 |
| **Routing** | React Router v7 (data router) |
| **Forms** | React Hook Form + Zod validation |
| **Styling** | Vanilla CSS with design tokens |
| **Icons** | Lucide React |
| **SEO** | react-helmet-async |
| **Animations** | Framer Motion (available) |

## Features

- **Multi-step loan application** — 5-step funnel with route guards
- **EMI Calculator** — real-time calculation with donut chart visualization
- **Product pages** — Personal, Business, Education loans with template pattern
- **Regulatory compliance** — Disclaimer, Privacy Policy, Terms, Grievance Redressal
- **Trust indicators** — TrustBar, partner logos, security badges
- **Accessibility** — Skip nav, ARIA roles, keyboard navigation, focus management
- **Performance** — Lazy loading, code splitting, Suspense boundaries
- **Security** — In-memory state only (no PAN/Aadhaar in storage), input sanitization

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── config/         # App configuration (company data, constants)
├── context/        # React Context providers
├── layouts/        # Page layouts (Root, Apply)
├── pages/          # Route-level page components
│   └── apply/      # Multi-step loan application flow
└── utils/          # Shared utility functions
```

## Architecture Decisions

- **Design tokens** — All visual properties flow from CSS custom properties in `index.css`
- **No sessionStorage for PII** — Sensitive data stays in React state per DPDP Act 2023
- **Route guards** — `ProtectedStep` component prevents step-skipping in apply flow
- **DRY product pages** — Single `ProductPageTemplate` drives all loan type pages
- **Shared financial utils** — `calculateEMI()` is defined once and reused everywhere

## License

Proprietary — All rights reserved.
