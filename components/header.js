import Link from "next/link";

export default function Header() {
  return (
    <div className="justify-between flex items-center mb-16 pb-8 pt-8 sticky z-10 top-0 backdrop-blur px-8 md:px-16 text-lg bg-transparent">
      <Link href="/">
        <h1 className="font-head text-4xl cursor-pointer tracking-tight text-green">
        Banyan
      </h1>
      </Link>
      <Link href="/whitepaper" className="font-head text-black">
        Whitepaper
      </Link>
    </div>
  );
}