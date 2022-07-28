import Link from "next/link";
import Tag from "./tag";

export default function Header() {
  return (
    <div className="flex justify-between items-center mb-16 py-4 z-10 top-0 w-screen text-lg bg-transparent sticky px-5 bg-black backdrop-blur-sm">
      <img src="/box.svg" />
      <div className="lg:flex items-center tracking-tighter antialiased font-head leading-none">
        <Tag className="hidden md:flex" href="#why" text="Why Banyan" />
        <Tag className="hidden md:flex" href="#how" text="How It Works" />
        <Tag className="hidden md:flex" href="#team" text="Team" />
        {/* <Tag href="#news" text="News" /> */}
        <Tag
          primary
          href="#newsletter"
          text={
            <>
              <span className="font-body tracking-normal">-&gt;</span>Stay in
              Touch
            </>
          }
        />
      </div>
      <img src="/box.svg" className="transform -scale-x-100" />
    </div>
  );
}
