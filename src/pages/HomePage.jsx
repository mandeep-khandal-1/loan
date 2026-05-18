import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import ScrollSteps from '../components/ScrollSteps';
import LoanProducts from '../components/LoanProducts';
import StatsBanner from '../components/StatsBanner';
import EmiCalculator from '../components/EmiCalculator';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Faq from '../components/Faq';

function HomePage() {
  return (
    <>
      <SEO
        title={null}
        description="Compare personal loan offers from 50+ RBI-registered NBFCs. Instant approval, zero paperwork, competitive rates. Get funded in hours, not days."
      />
      <div className="hero-scroll-group">
        <Hero />
        <ScrollSteps />
      </div>
      <LoanProducts />
      <Partners />
      <StatsBanner />
      <EmiCalculator />
      <WhyChooseUs />
      <Testimonials />
      <Faq />
    </>
  );
}

export default HomePage;
