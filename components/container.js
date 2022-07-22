import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

export default function Container({ children }) {
  return (
    <>
      <Head>
        <title>Banyan</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="px-5 mx-auto -mb-8 pb-16 text-gray text-lg relative bg-black min-h-screen border-gray border-b rounded-b-[2rem]">
        {children}
      </div>
      <Footer />
    </>
  );
}
