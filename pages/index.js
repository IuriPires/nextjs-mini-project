import 'bootstrap/dist/css/bootstrap.min.css';

import Link from 'next/link';
import Head from 'next/head'

import SSRProvider from 'react-bootstrap/SSRProvider';

import Menu from './components/Menu';
import Carousel from './components/Carousel';

export default function Home() {
  return (
    <SSRProvider>
        <Head>
          <title>Supercruises</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Select among 15,000 cruises of any type: luxury, family, adult-only, fitness or disabled-friendly. Travel with 15 cruise lines including Carnival, MSC, Norwegian, Royal Caribbean and more. All ABTA protected."></meta>
        </Head>

        <main style={{ textAlign: 'center', border: '1px solid red', width: '100%' }}>
          <h1 className="title">
          Our TOP HOT Picks
          </h1>

          <Carousel />  
        </main>
    </SSRProvider>
  )
}
