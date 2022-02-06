import Link from "next/link";

export default function Header() {
  return (
    <div className="justify-between flex items-center mb-16 py-8 z-10 top-0 container text-lg bg-transparent mx-auto px-8 xl:px-0">
      <Link href="/">
        <h1 className="font-head text-4xl cursor-pointer tracking-tight text-green">
        Banyan
      </h1>
      </Link>
      {/* <Link href="/whitepaper" className="font-head text-black">
        Whitepaper
      </Link> */}
    </div>
  );
}