import Head from 'next/head';
import Stages from '../components/Home/Stages';
import Table from '../components/Home/Table';
import TokenAllocation from '../components/Home/TokenAllocation';
import Tokenomics from '../components/Home/Tokenomics';
import Unit from '../components/Home/Unit';
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
      <Header type={'relative'} />
      <Tokenomics />
      <TokenAllocation />
      <Unit />
      <Table />
      <Stages />

      <div className="type-footer">
        Register and make a first purchase to receive a 15% bonus!
      </div>
      <Footer />
    </>
  );
}
