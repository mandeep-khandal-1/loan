import { Star } from 'lucide-react';
import './Testimonials.css';

const reviews = [
  { name: 'Priya Sharma', city: 'Mumbai', loanType: 'Personal Loan', rating: 5, color: '#059669', text: 'Got my loan approved within 15 minutes! The process was completely digital — no paperwork, no branch visits. SabkaLoan matched me with an NBFC that offered 2% lower interest than my bank.' },
  { name: 'Arjun Patel', city: 'Ahmedabad', loanType: 'Business Loan', rating: 5, color: '#0066B3', text: 'As a small business owner, getting a loan was always painful. SabkaLoan compared offers from 8 NBFCs and got me funded in under 48 hours. Incredible service.' },
  { name: 'Meera Krishnan', city: 'Bangalore', loanType: 'Education Loan', rating: 4, color: '#7B2D8E', text: "Needed funds urgently for my daughter's college admission. The eligibility check took 2 minutes and I had 3 offers to choose from. Highly recommend for anyone who values their time." },
];

function Testimonials() {
  return (
    <section className="testimonials section section--warm" id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Testimonials</span>
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Real stories from real people who found the right loan through SabkaLoan.
          </p>
        </div>

        <div className="testimonials__rating-bar">
          <div className="testimonials__rating-stars">
            {[1,2,3,4,5].map(n => <Star key={n} size={20} fill="#f59e0b" color="#f59e0b" />)}
          </div>
          <span className="testimonials__rating-text">4.8 out of 5 · Based on 12,000+ reviews</span>
        </div>

        <div className="testimonials__grid">
          {reviews.map((r, i) => (
            <div className="testimonials__card" key={i} id={`testimonial-${i}`}>
              <div className="testimonials__stars">
                {Array.from({ length: 5 }, (_, j) => (
                  <Star key={j} size={16} fill={j < r.rating ? '#f59e0b' : 'none'} color={j < r.rating ? '#f59e0b' : '#d1d5db'} />
                ))}
              </div>
              <p className="testimonials__text">"{r.text}"</p>
              <div className="testimonials__author">
                <div className="testimonials__avatar" style={{ backgroundColor: r.color }}>
                  {r.name.charAt(0)}
                </div>
                <div className="testimonials__info">
                  <span className="testimonials__name">{r.name}</span>
                  <span className="testimonials__meta">{r.loanType} · {r.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
