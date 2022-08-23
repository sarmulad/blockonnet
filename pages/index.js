import Head from 'next/head';
import Faq from '../components/Home/Faq';
import Features from '../components/Home/Features';
import Hero from '../components/Home/Hero';
import Nfts from '../components/Home/Nfts';
import Roadmap from '../components/Home/Roadmap';
import Stages from '../components/Home/Stages';
import Footer from '../components/_Apps/Footer';
import Header from '../components/_Apps/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Blockonnect Network</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Konnect & Explore Advanced Blockchain Utilization"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Stages />
      <Features />
      <Nfts />
      <Roadmap />
      <Faq />
      <Footer />
    </>
  );
}
