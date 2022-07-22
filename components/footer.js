export default function Footer() {
  return (
    <footer className="w-full max-w-screen-xl flex flex-col space-y-8 bg-lightgray text-black p-8 py-16 lg:px-4 mx-auto">
      <img className="w-full p-4" src="/logodark.svg" />
      <div className="flex">
        <h3 className="basis-1/3 font-bold text-blue font-body text-4xl">
          The marketplace for trustless storage
        </h3>
        <h3 className="basis-1/3 font-body text-4xl text-gray font-normal">
          Get in touch
          <span className="block text-black">info@banyan.computer</span>
        </h3>
        <div className="flex space-x-4 basis-1/3 justify-around">
          <div className="flex flex-col items-center justify-center">
            <a className="border-b" href="https://github.com/banyancomputer">
              GitHub
            </a>
            <a className="border-b" href="">
              Breezy
            </a>
            <a
              className="border-b"
              href="https://twitter.com/banyandotcomputer"
            >
              Twitter
            </a>
          </div>
          <p className="text-gray">
            © Banyan LLC 2022
            <br />
            2045 W Grand Ave Ste B PMB 98926
            <br />
            Chicago, Illinois 60612-1577 US
          </p>
        </div>
      </div>
    </footer>
  );
}
