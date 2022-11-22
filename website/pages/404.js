import Head from 'next/head';

import Layout from '../components/Layout';
import Error from '../components/Error';

export default function Home() {
  return (
    <>
      <Head>
        <title>Page not found — TONxy</title>
        <meta name="description" content="Download the browser extension to access the private TON network with a public or encrypted proxy of your choice." />
        <link rel="icon" type="image/png" href="/icon-128.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="/icon-180.png" />
      </Head>

      <Layout>
        <Error />
      </Layout>
    </>
  )
}
