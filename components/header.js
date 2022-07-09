import Link from "next/link";

export default function Header() {
  return (
    <div className="flex space-x-8 items-center mb-16 py-4 z-10 top-0 max-w-screen-lg text-lg bg-transparent mx-auto px-8 xl:px-0">
      <Link href="/">
        <h1 className="text-4xl uppercase m-0 leading-none">Banyan</h1>
      </Link>
      <div className="hidden lg:flex space-x-4 items-center tracking-tighter antialiased font-head leading-none">
        <Link href="#why">
          <a className="uppercase hover:text-green">Why Banyan</a>
        </Link>
        <Link href="#how">
          <a className="uppercase hover:text-green">How It Works</a>
        </Link>
        <Link href="#goal">
          <a className="uppercase hover:text-green">Our Goal</a>
        </Link>
        <Link href="#team">
          <a className="uppercase hover:text-green">Team</a>
        </Link>
        <Link href="#news">
          <a className="uppercase hover:text-green">News</a>
        </Link>
      </div>
    </div>
  );
}
