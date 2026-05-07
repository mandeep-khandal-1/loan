import { Users, IndianRupee, Building2, Star } from 'lucide-react';
import { COMPANY } from '../config/company';
import ScrollReveal from './ScrollReveal';
import './StatsBanner.css';

const stats = [
  { icon: Users, value: COMPANY.stats.customers, label: 'Happy Customers' },
  { icon: IndianRupee, value: COMPANY.stats.disbursed, label: 'Loans Disbursed' },
  { icon: Building2, value: COMPANY.stats.partners, label: 'NBFC Partners' },
  { icon: Star, value: COMPANY.stats.rating, label: 'User Rating' },
];

function StatsBanner() {
  return (
    <section className="stats-banner" id="stats-banner">
      <ScrollReveal direction="up" distance={30}>
        <div className="stats-banner__inner">
          {stats.map((s, i) => (
            <div className="stats-banner__item" key={i}>
              <s.icon size={28} className="stats-banner__icon" />
              <span className="stats-banner__value">{s.value}</span>
              <span className="stats-banner__label">{s.label}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}

export default StatsBanner;
