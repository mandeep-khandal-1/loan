import { motion } from 'framer-motion';
import { Users, IndianRupee, Building2, Star } from 'lucide-react';
import { COMPANY } from '../config/company';
import './StatsBanner.css';

const stats = [
  { icon: Users, value: COMPANY.stats.customers, label: 'Happy Customers' },
  { icon: IndianRupee, value: COMPANY.stats.disbursed, label: 'Loans Disbursed' },
  { icon: Building2, value: COMPANY.stats.partners, label: 'NBFC Partners' },
  { icon: Star, value: COMPANY.stats.rating, label: 'User Rating' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100
    }
  }
};

function StatsBanner() {
  return (
    <section className="stats-banner" id="stats-banner">
      <motion.div 
        className="stats-banner__inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {stats.map((s, i) => (
          <motion.div className="stats-banner__item" key={i} variants={itemVariants}>
            <s.icon size={28} className="stats-banner__icon" />
            <span className="stats-banner__value">{s.value}</span>
            <span className="stats-banner__label">{s.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default StatsBanner;
