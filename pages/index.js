import Container from "../components/container";
// import 'line-awesome/dist/line-awesome/css/line-awesome.min.css'
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      {/* Hero */}
      <div className="w-full flex flex-col space-y-16 justify-start">
        <div className="flex space-x-8">
          <h1 className="text-8xl tracking-tighter shrink-0">
            Next-gen storage.
            <br />
            Familiar usability.
          </h1>
          <div className="flex flex-col space-y-4 max-w-md text-green">
            <p>
              Why choose between cheap decentralized storage and simplicity when
              you can have both.
            </p>
            <p className="uppercase border rounded-xl w-fit px-2 font-head text-sm py-1">
              → Get in touch
            </p>
          </div>
        </div>
        <img src="/hero.png" />
      </div>
      <div className="py-16">Supported by</div>
      {/* Why? */}
      <div className="flex flex-col py-16" id="why">
        <h2 className="uppercase text-4xl text-center">Why Banyan?</h2>
        <div className="flex flex-col lg:flex-row lg:space-x-4 lg:space-y-0 space-y-4 py-16">
          <div className="p-4 basis-1/3 border border-blue flex flex-col justify-between">
            <h3 className="font-sans">Stability</h3>
            <p className="text-sm pt-8">
              Your data is stored for ages across several providers. Even if
              something happens to one of them, the others will back it up.
            </p>
          </div>
          <div className="p-4 basis-1/3 border border-blue flex flex-col justify-between">
            <h3 className="font-sans">Privacy</h3>
            <p className="text-sm">
              No government or corporation can censor your data if it's stored
              decentrally.
            </p>
          </div>
          <div className="p-4 basis-1/3 border border-blue flex flex-col justify-between">
            <h3 className="font-sans">Flexibility</h3>
            <p className="text-sm">
              Does your data require specific storage conditions? We will fulfil
              them.
            </p>
          </div>
        </div>
      </div>
      {/* How it works */}
      <div className="flex flex-col py-16 space-y-16" id="how">
        <h2 className="uppercase text-4xl text-center">How it works</h2>
        <img src="/diagram.png" className="block" />
      </div>
      {/* Goal */}
      <div className="flex flex-col py-16 space-y-16" id="goal">
        <h3 className="text-6xl font-normal text-center tracking-tighter">
          Our goal is to make information much more durable so it will
          facilitate humanity's progress.
        </h3>
      </div>
    </Container>
  );
}
