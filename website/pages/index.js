import { useState } from 'react';

import Head from 'next/head';

import Header from '../components/Header';
import Explore from '../components/Explore';
import Downloads from '../components/Downloads';
import Layout from '../components/Layout';

export default function Home() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      <Head>
        <title>TONxy – Get access to the private TON network</title>
        <meta name="description" content="Download the browser extension to access the private TON network with a public or encrypted proxy of your choice." />
        <link rel="icon" type="image/png" href="/icon-128.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="/icon-180.png" />
      </Head>

      <Layout>
        <Header entered={entered} />
        <Explore setEntered={setEntered} />
        <Downloads />
      </Layout>
    </>
  )
}
