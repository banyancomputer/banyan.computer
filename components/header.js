import Link from "next/link";

export default function Header() {
  return (
    <div className="justify-between flex items-center mb-16 pb-8 pt-8 sticky top-0 backdrop-blur">
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