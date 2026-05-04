import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ScrollReveal, { StaggerChildren } from './ScrollReveal';
import './Faq.css';

const faqData = [
  { question: 'Is SabkaLoan a bank or an NBFC?', answer: 'No. SabkaLoan is a licensed loan distributor (DSA). We do not lend directly. We partner with 50+ RBI-registered NBFCs and banks to help you compare and find the best loan offers for your profile.' },
  { question: 'Will checking eligibility affect my CIBIL score?', answer: "No. Our initial eligibility check is a soft inquiry and does not impact your credit score. A hard inquiry is only made when you choose to proceed with a specific lender's offer." },
  { question: 'What documents do I need to apply?', answer: "For most personal loans, you need: PAN Card, Aadhaar Card, last 3 months' bank statements, and latest salary slip (for salaried) or ITR (for self-employed). The entire process is digital — no physical documents required." },
  { question: 'How long does loan disbursement take?', answer: 'Once your application is approved by the lending partner, funds are typically disbursed to your bank account within 2-24 hours on business days. Some of our NBFC partners offer same-day disbursement.' },
  { question: 'What interest rates can I expect?', answer: 'Interest rates vary by lender and your credit profile. Personal loans typically range from 10.49% to 36% p.a. We compare offers across all our partners to ensure you get the most competitive rate available for your profile.' },
  { question: 'Is my personal data safe with SabkaLoan?', answer: 'Absolutely. We use 256-bit SSL encryption and are fully compliant with RBI data protection guidelines. Your information is shared only with the lending partner you choose, and never with third parties.' },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <ScrollReveal direction="up" distance={50}>
          <div className="section-header">
            <span className="section-badge">FAQs</span>
            <h2 className="section-title">Got Questions? We've Got Answers</h2>
            <p className="section-subtitle">Everything you need to know about our loan comparison service.</p>
          </div>
        </ScrollReveal>

        <StaggerChildren stagger={0.08} direction="up" distance={30} className="faq__list" threshold={0.05}>
          {faqData.map((item, i) => (
            <div className={`faq__item ${openIndex === i ? 'faq__item--open' : ''}`} key={i} id={`faq-item-${i}`}>
              <button className="faq__question" onClick={() => toggle(i)} aria-expanded={openIndex === i}>
                <span>{item.question}</span>
                <ChevronDown size={18} className={`faq__chevron ${openIndex === i ? 'faq__chevron--open' : ''}`} />
              </button>
              <div className={`faq__answer-wrap ${openIndex === i ? 'faq__answer-wrap--open' : ''}`}>
                <div className="faq__answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

export default Faq;
