import Head from "next/head";
import Banner2 from "../components/banner/Banner2";
import PortfolioComponent from "../components/custom/sections/portfoliocomponent";
import BlogComponent from "../components/custom/sections/blogcomponent";
import BannerComponent from "../components/custom/sections/bannercomponent";
import CallToAction from "../components/call-to-action/CallToAction";

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
      <Banner2 />
      <PortfolioComponent />
      <BlogComponent />
      <BannerComponent />
    </div>
  );
}
