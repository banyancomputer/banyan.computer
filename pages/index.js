import Container from "../components/container";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Button from "../components/button";

export default function Home() {
  return (
    <Container>
      {/* Hero */}
      <div className="flex flex-col items-center space-y-8">
        <div className="w-full">
          <img
            className="hidden md:block w-full border-t md:border-t-0 border-b pb-5 pt-5 md:pt-0"
            src="/logo_thin.svg"
          />
          <img
            className="block md:hidden w-full border-t md:border-t-0 border-b pb-5 pt-5 md:pt-0"
            src="/logo.svg"
          />
        </div>
        <h2 className="font-bold text-blue font-body text-[40px] md:text-8xl tracking-tighter leading-[0.85] text-center">
          The marketplace
          <br />
          for trustless storage
        </h2>
        <p className="max-w-[39ch] text-center">
          Banyan aggregates storage providers and introduces simple
          cryptoeconomic incentives to make data worth storing in the web3 era.
        </p>
        <div className="py-4 w-full border-y font-head flex space-x-4 items-center">
          <p className="shrink-0 font-head uppercase">Supported by</p>
          <Marquee speed={43} gradientColor={[11, 14, 18]}>
            <div className="flex space-x-16 items-center">
              <img
                className="pl-16 h-[44px]"
                src="/protocol-labs-logo-white.svg"
              />
              <span className="block shrink-0">Zee Prime Capital</span>
              <span>ySprout</span>
              <img className="h-[38px]" src="/chainlink.svg" />
              <img className="h-3" src="/hypersphere.svg" />
              <img className="h-[44px]" src="/polychain.svg" />
              <img className="h-[44px]" src="/protocol-labs-logo-white.svg" />
              <span className="block shrink-0">Zee Prime Capital</span>
              <span>ySprout</span>
              <img className="h-[38px]" src="/chainlink.svg" />
              <img className="h-3" src="/hypersphere.svg" />
              <img className="h-[44px]" src="/polychain.svg" />
            </div>
          </Marquee>
        </div>
      </div>
      {/* Why Banyan */}
      <div className="my-24" id="why">
        <h2 className="text-center text-blue text-4xl md:text-7xl font-bold font-head uppercase tracking-tighter">
          Why Banyan
        </h2>
        <div className="flex flex-col lg:flex-row lg:space-x-4 lg:space-y-0 space-y-4 py-16">
          <div className="p-4 basis-1/3 border flex flex-col space-y-16 justify-between">
            <h3 className="font-sans text-3xl font-bold">Security</h3>
            <p className="h-[50%]">
              The safety of decentralized storage with exceptional
              censorship-resistant privacy features.
            </p>
          </div>
          <div className="p-4 basis-1/3 border flex flex-col space-y-16 justify-between">
            <h3 className="font-sans text-3xl font-bold">Longevity</h3>
            <p className="h-[50%]">
              We incentivize IPFS paid on chain to ensure your data will be
              stored safely as long as you want.
            </p>
          </div>
          <div className="p-4 basis-1/3 border flex flex-col space-y-16 justify-between">
            <h3 className="font-sans text-3xl font-bold">User-friendliness</h3>
            <p className="h-[50%]">
              Effortless advanced file management features with our web
              interface and API.
            </p>
          </div>
        </div>
      </div>
      {/* Goal */}
      <img className="my-24 block md:hidden" src="/goal_mobile.png" />
      <img className="my-24 hidden md:block" src="/goal.png" />
      {/* How it works */}
      <div className="flex flex-col py-16 space-y-16" id="how">
        <h2 className="text-center text-blue text-4xl md:text-7xl font-bold font-head uppercase tracking-tighter">
          How it works
        </h2>
        <img src="/diagram_mobile.svg" className="block md:hidden" />
        <img src="/diagram.svg" className="hidden md:block" />
      </div>
      {/* Team */}
      <div className="flex flex-col py-16 w-full" id="team">
        <h2 className="text-center text-blue text-4xl md:text-7xl font-bold font-head uppercase tracking-tighter mb-16">
          Our Team
        </h2>
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:space-x-[3px] mb-[1px] md:mb-[3px]">
          <div className="shadow-[0_0_0_1px] md:shadow-[0_0_0_2px] shadow-gray rounded-xl md:rounded-t-none md:rounded-tl-none p-4 flex justify-start flex-col space-y-16 mb-[1px] md:mb-0">
            <div>
              <h3 className="font-sans text-3xl font-bold">Claudia Richoux</h3>
              <p className="font-sans font-bold text-blue">CEO/CTO</p>
            </div>
            <p>
              Claudia worked full-time at Protocol Labs as a Filecoin runtime
              engineer and Trail of Bits as a cryptography auditor and
              researcher, interned at Dropbox and Jane Street, contributed to
              several Defi and crypto projects as a freelancer during and after
              Defi summer. She studied Computer Science at The University of
              Chicago.
            </p>
          </div>
          <div className="shadow-[0_0_0_1px] md:shadow-[0_0_0_2px] rounded-xl md:rounded-t-none md:rounded-tr-none p-4 flex justify-start flex-col space-y-16">
            <div>
              <h3 className="font-sans text-3xl font-bold">Maya Krasovsky</h3>
              <p className="font-sans font-bold text-blue">COO</p>
            </div>
            <p>
              Maya has experience in portfolio management, including alternative
              investments, at Advocate Aurora Health&apos;s $18 bln + fund,
              global compliance, and investment banking at Goldman Sachs. She
              worked with PrimeDAO and contributed to LiftUp. Studied Economics
              and Sociology at The University of Chicago.
            </p>
          </div>
        </div>
        {/* Middle row */}
        <div className="flex flex-col md:flex-row min-w-0 w-full md:space-x-[3px] md:mb-[3px]">
          <div className="shadow-[0_0_0_1px] md:shadow-[0_0_0_2px] rounded-xl p-4 flex flex-col justify-start basis-1/3 mb-[1px] md:mb-0 space-y-8">
            <div>
              <h3 className="font-sans text-3xl font-bold">Olive Gardner</h3>
              <p className="font-sans font-bold text-blue">
                Operations Manager
              </p>
            </div>
            <p>
              Olive studied Philosophy and Public Policy at The University of
              Chicago.
            </p>
          </div>
          <div className="shadow-[0_0_0_1px] md:shadow-[0_0_0_2px] rounded-xl p-4 flex flex-col justify-start basis-1/3 mb-[1px] md:mb-0 space-y-8">
            <div>
              <h3 className="font-sans text-3xl font-bold">
                Vitaly Gachkovsky
              </h3>
              <p className="font-sans font-bold text-blue">
                Head of Design and Marketing
              </p>
            </div>
            <p>
              Vitaly was a Content Producer at{" "}
              <a href="https://w1d1.com">W1D1</a> and the Art director at Svoimi
              Slovami. He studied Design and Programming at HSE Art and Design
              School.
            </p>
          </div>
          <div className="shadow-[0_0_0_1px] md:shadow-[0_0_0_2px] rounded-xl p-4 flex flex-col justify-start basis-1/3 mb-[1px] md:mb-0 space-y-8">
            <div>
              <h3 className="font-sans text-3xl font-bold">Ita Caroline</h3>
              <p className="font-sans font-bold text-blue">
                Lead Product Manager
              </p>
            </div>
            <p>
              Ita worked as a Project Manager at Tempus Labs on{" "}
              <a href="https://www.tempus.com/news/pr/tempus-submits-pma-application-to-the-fda-for-its-xt-onco-assay/">
                xT-Onco
              </a>{" "}
              and Algos Team. She studied Economics at The University of
              Chicago.
            </p>
          </div>
        </div>
        {/* Bottom row */}
        <div className="flex flex-col md:flex-row min-w-0 w-full mb-4 md:space-x-[3px]">
          <div className="shadow-[0_0_0_1px] md:shadow-[0_0_0_2px] md:rounded-bl-none rounded-xl p-4 flex flex-col basis-1/3 mb-[1px] md:mb-0 space-y-8">
            <div>
              <h3 className="font-sans text-3xl font-bold">Alex Miller</h3>
              <p className="font-sans font-bold text-blue">
                Software Developer
              </p>
            </div>
            <p>
              Alex was a Software Developer at{" "}
              <a href="https://arxiv.org/abs/2112.09618">UCIRC</a> and a
              Full-Stack Intern at{" "}
              <a href="https://www.datamola.com">Datamola</a>. He graduated
              Computer Science at The University of Chicago.
            </p>
          </div>
          <div className="shadow-[0_0_0_1px] md:shadow-[0_0_0_2px] rounded-xl p-4 flex flex-col basis-1/3 mb-[1px] md:mb-0 space-y-8">
            <div>
              <h3 className="font-sans text-3xl font-bold">Jonah Kaye</h3>
              <p className="font-sans font-bold text-blue">
                Software Developer
              </p>
            </div>
            <p>
              Jonah studied Computer Science and Philosophy at The University of
              Chicago.
            </p>
          </div>
          <div className="shadow-[0_0_0_1px] md:shadow-[0_0_0_2px] rounded-xl md:rounded-br-none p-4 flex flex-col basis-1/3 space-y-8">
            <div>
              <h3 className="font-sans text-3xl font-bold">Marco Jardim</h3>
              <p className="font-sans font-bold text-blue">
                Software Developer
              </p>
            </div>
            <p>
              Marco worked at Blockchain Studio,{" "}
              <a href="https://kondux.io">Kondux.io</a>, and{" "}
              <a href="https://futster.io">Futster.io</a>. Studied Computer
              Science at The University of Rio de Janeiro and MCs Digital
              Currencies at The University of Nicosia.
            </p>
          </div>
        </div>
        <Button
          href="https://banyan-storage-inc.breezy.hr"
          text="Join the team!"
          primary
        />
      </div>
      {/* News */}
      {/* <div id="news" className="flex flex-col pt-32">
        <h2 className="text-center text-blue text-7xl font-bold font-head uppercase tracking-tighter mb-16">
          News
        </h2>
      </div> */}
      {/* Newsletter */}
      <div
        id="newsletter"
        className="flex flex-col pt-32 justify-center items-center space-y-8"
      >
        <h2 className="font-semibold text-blue font-body text-[40px] md:text-8xl tracking-tighter max-w-[9ch] md:max-w-[15ch] text-center leading-[0.85]">
          Learn more and become an early user
        </h2>
        <p>Join our newsletter to keep in touch.</p>
        <form
          action="https://computer.us12.list-manage.com/subscribe/post?u=d431049d77a6d7b2b5c94902c&amp;id=0899420cf6"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="max-w-screen-sm flex w-full pb-32"
          target="_blank"
          noValidate
        >
          <div
            className="input-group flex items-center justify-center w-full"
            id="mc_embed_signup_scroll"
          >
            <div className="mc-field-group flex flex-col md:flex-row items-center justify-center h-full w-full">
              <input
                className="w-full md:w-fit appearance-none outline-none border-2 px-3 flex items-center text-center justify-center h-16 rounded-full bg-black grow hover:text-green hover:placeholder-green hover:border-green focus:placeholder-transparent focus:border-green valid:text-green"
                type="email"
                name="EMAIL"
                id="mce-EMAIL"
                placeholder="Email"
                required
              />
              <button
                id="mc-embedded-subscribe"
                className="bg-blue hover:bg-green hover:text-black text-white py-4 px-5 w-full md:w-fit"
                type="submit"
                name="subscribe"
              >
                Stay in touch
              </button>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
}
