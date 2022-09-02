import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import Script from "next/script";

export default function Container({ children }) {
  return (
    <>
      <Head>
        <title>Banyan</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Script id="google-tag-manager" strategy="afterInteractive">
            {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','G-Q8HKFNRW9E');
      `}
        </Script>
      <Header />
      <div className="px-5 mx-auto -mb-8 pb-16 text-gray text-lg relative bg-black min-h-screen border-gray border-b rounded-b-[16px] md:rounded-b-[30px]">
        {children}
      </div>
      <Footer />
    </>
  );
}
