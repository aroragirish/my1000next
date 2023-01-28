import dynamic from 'next/dynamic'
import FaqComponent from "../components/custom/sections/faqcomponent";
import PortfolioComponent from "../components/custom/sections/portfoliocomponent";

const HowItWorks = dynamic(() => import('../components/custom/HowItWorks'), {
  loading: () => 'Loading...',
})

export default function Home() {
  return (
    <div>

      <PortfolioComponent />
      <HowItWorks />
      <FaqComponent />
    </div>
  );
}
