import Head from 'next/head';
import Header from '../components/_Apps/Header';
import PayOpt from '../components/Home/PayOptions';



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
      
         <PayOpt />
      
    </>
  );
}
