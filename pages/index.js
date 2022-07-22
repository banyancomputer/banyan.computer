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
          <img className="w-full border-b pb-4" src="/logo.svg" />
        </div>
        <h2 className="font-bold text-blue font-body text-8xl tracking-tighter max-w-[19ch] text-center">
          The marketplace for trustless storage
        </h2>
        <p className="max-w-[39ch] text-center">
          Banyan aggregates storage providers and introduces simple
          cryptoeconomic incentives to make data worth storing.
        </p>
        <div className="py-4 w-full border-y font-head flex space-x-4 items-center">
          <p className="shrink-0">Supported by</p>
          <Marquee gradientColor={[11, 14, 18]}>
            <div className="flex space-x-36 items-center pr-36">
              <img className="h-6" src="/protocol-labs-logo-white.svg" />
              <span>Zee Prime Capital</span>
              <span>ySprout</span>
              <img className="h-6" src="/chainlink.svg" />
              <img className="h-3" src="/hypersphere.svg" />
              <img className="h-6" src="/polychain.svg" />
            </div>
          </Marquee>
        </div>
      </div>
      {/* Why Banyan */}
      <div className="my-24" id="why">
        <h2 className="text-center text-blue text-7xl font-bold font-head uppercase tracking-tighter">
          Why Banyan
        </h2>
        <div className="flex flex-col lg:flex-row lg:space-x-4 lg:space-y-0 space-y-4 py-16">
          <div className="p-4 basis-1/3 border flex flex-col space-y-16 justify-between">
            <h3 className="font-sans text-3xl font-bold">User-friendliness</h3>
            <p className="">
              Effortless advanced file management features with our web
              interface.
            </p>
          </div>
          <div className="p-4 basis-1/3 border flex flex-col space-y-16 justify-between">
            <h3 className="font-sans text-3xl font-bold">Security</h3>
            <p className="">
              The safety of decentralized storage with versioning and privacy
              features to rival Amazon S3.
            </p>
          </div>
          <div className="p-4 basis-1/3 border flex flex-col space-y-16 justify-between">
            <h3 className="font-sans text-3xl font-bold">Perpetual Storage</h3>
            <p className="">
              The incentives to make it last as long as you want.
            </p>
          </div>
        </div>
      </div>
      {/* Goal */}
      <img className="my-24" src="/goal.png" />
      {/* How it works */}
      <div className="flex flex-col py-16 space-y-16" id="how">
        <h2 className="text-center text-blue text-7xl font-bold font-head uppercase tracking-tighter">
          How it works
        </h2>
        <img src="/diagram.svg" className="block" />
      </div>
      {/* Team */}
      <div className="flex flex-col py-16 w-full" id="team">
        <h2 className="text-center text-blue text-7xl font-bold font-head uppercase tracking-tighter mb-16">
          Our Team
        </h2>
        {/* Top row */}
        <div className="flex">
          <div className="border-2 border-r rounded-b-xl rounded-tr-xl p-4 flex justify-between flex-col space-y-16">
            <div>
              <h3 className="font-sans text-3xl font-bold">Claudia Richoux</h3>
              <p className="font-sans font-bold text-blue">CEO/CTO</p>
            </div>
            <p>
              UChicago graduate with a Computer Science major. Interned at
              Dropbox and Jane Street, worked full-time at Protocol Labs as a
              Filecoin runtime engineer and Trail of Bits as a cryptography
              auditor and researcher, contributed to several popular Defi and
              crypto projects as a freelancer during and after Defi summer.
            </p>
          </div>
          <div className="border-2 border-l rounded-b-xl rounded-tl-xl p-4 flex justify-between flex-col space-y-16">
            <div>
              <h3 className="font-sans text-3xl font-bold">Maya Krasovsky</h3>
              <p className="font-sans font-bold text-blue">COO</p>
            </div>
            <p>
              UChicago graduate with majors in Economics and Sociology.
              Contributed to the social startup LiftUp. She has experience in
              portfolio management, including alternative investments, at
              Advocate Aurora Health's $18 bln + fund, global compliance, and
              investment banking at Goldman Sachs, worked with PrimeDAO.
            </p>
          </div>
        </div>
        {/* Middle row */}
        <div className="flex min-w-0 w-full">
          <div className="border-2 border-t border-r rounded-xl p-4 flex flex-col basis-1/3">
            <h3 className="font-sans text-3xl font-bold">Olive Gardner</h3>
            <p className="font-sans font-bold text-blue">Operations Manager</p>
          </div>
          <div className="border-2 border-t border-x rounded-xl p-4 flex flex-col basis-1/3">
            <h3 className="font-sans text-3xl font-bold">Vitaly Gachkovsky</h3>
            <p className="font-sans font-bold text-blue">
              Head of Design and Marketing
            </p>
          </div>
          <div className="border-2 border-t border-l rounded-xl p-4 flex flex-col basis-1/3">
            <h3 className="font-sans text-3xl font-bold">Ita Caroline</h3>
            <p className="font-sans font-bold text-blue">
              Lead Product Manager
            </p>
          </div>
        </div>
        {/* Bottom row */}
        <div className="flex min-w-0 w-full mb-4">
          <div className="border-2 border-t border-r rounded-bl-none rounded-xl p-4 flex flex-col basis-1/3">
            <h3 className="font-sans text-3xl font-bold">Alex Miller</h3>
            <p className="font-sans font-bold text-blue">Software Developer</p>
          </div>
          <div className="border-2 border-t border-x rounded-xl p-4 flex flex-col basis-1/3">
            <h3 className="font-sans text-3xl font-bold">Jonah Kaye</h3>
            <p className="font-sans font-bold text-blue">Engineer</p>
          </div>
          <div className="border-2 border-t border-l rounded-xl rounded-br-none p-4 flex flex-col basis-1/3">
            <h3 className="font-sans text-3xl font-bold">Marco Jardim</h3>
            <p className="font-sans font-bold text-blue">Software Developer</p>
          </div>
        </div>
        <Button href="" text="Join the team!" primary />
      </div>
      {/* News */}
      <div id="news" className="flex flex-col pt-32">
        <h2 className="text-center text-blue text-7xl font-bold font-head uppercase tracking-tighter mb-16">
          News
        </h2>
        {/* TODO */}
      </div>
      {/* Newsletter */}
      <div
        id="newsletter"
        className="flex flex-col pt-32 justify-center items-center space-y-12"
      >
        <h2 className="font-bold text-blue font-body text-8xl tracking-tighter max-w-[16ch] text-center">
          Learn more and become an early user
        </h2>
        <p>Join our newsletter to keep in touch.</p>
        {/* TODO */}
        <a href="https://computer.us12.list-manage.com/subscribe/post?u=d431049d77a6d7b2b5c94902c&amp;id=0899420cf6">
          Stay in touch
        </a>
      </div>
    </Container>
  );
}
