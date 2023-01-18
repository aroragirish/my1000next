import Head from "next/head";
import PortfolioComponent from "../components/custom/sections/portfoliocomponent";
import BannerComponent from "../components/custom/sections/bannercomponent";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My1000+ | Invest in hig returns</title>
        <meta
          name="description"
          content="My1000+ | Invest in hig returns"
        />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <PortfolioComponent />
      <BannerComponent />
    </div>
  );
}
