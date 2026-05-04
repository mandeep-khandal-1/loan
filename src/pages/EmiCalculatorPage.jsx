import SEO from '../components/SEO';
import EmiCalculator from '../components/EmiCalculator';

function EmiCalculatorPage() {
  return (
    <>
      <SEO title="EMI Calculator" description="Calculate your loan EMI instantly. Adjust amount, interest rate, and tenure to plan your repayment." />
      <EmiCalculator />
    </>
  );
}

export default EmiCalculatorPage;
