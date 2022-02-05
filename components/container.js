import Head from 'next/head';
import Header from './header';
import Footer from './footer';

export default function Container({ children }) {
  return (
    <>
      <Head>
        <title>Banyan</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="container px-8 md:px-0 mx-auto mb-16 text-black text-lg relative bg-transparent min-h-screen">
        {children}
      </div>
      {/* <Footer /> */}
    </>
  );
}