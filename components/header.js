import Link from "next/link";

export default function Header() {
  return (
    <div className="justify-between flex items-center mb-16 pb-8 pt-8 sticky z-10 top-0 backdrop-blur px-8 md:px-16 text-white text-lg bg-transparent">
      <Link href="/">
        <h1 className="font-serif text-4xl cursor-pointer" style={{ letterSpacing: "-0.05rem"}}>
        Alexandria Trust
      </h1>
      </Link>
      <Link href="/whitepaper" className="font-serif">
        Whitepaper
      </Link>
    </div>
  );
}