import Head from "next/head";
import HowItWorks from "../components/custom/HowItWorks";
import FaqComponent from "../components/custom/sections/faqcomponent";
import PortfolioComponent from "../components/custom/sections/portfoliocomponent";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My1000+ | Invest in hig returns</title>
        <meta name="description" content="My1000+ | Invest in hig returns" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <PortfolioComponent />
      <HowItWorks />
      <FaqComponent />
    </div>
  );
}
