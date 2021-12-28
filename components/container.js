import Head from 'next/head';
import Header from './header';
import Footer from './footer';

export default function Container({ children }) {
  return (
    <>
      <Head>
        <title>Alexandria Trust</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fixed top-0 right-0 w-screen h-screen" style={{ background: "radial-gradient(ellipse at top, #F21B1B 18%, transparent 50%)" }} />
      <div className="top-0 w-screen h-screen fixed" style={{ backdropFilter: "blur(20rem)", WebkitBackdropFilter: "blur(20rem)" }} />
      <Header />
      <div className="container px-8 md:px-0 mx-auto mb-16 text-white text-lg relative bg-transparent min-h-screen">
        {children}
      </div>
      <Footer />
    </>
  );
}