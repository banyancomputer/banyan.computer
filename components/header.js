import Link from "next/link";
import Tag from "./tag";

export default function Header() {
  return (
    <div className="flex justify-between items-center mb-16 py-4 z-10 top-0 w-screen text-lg bg-transparent px-8 xl:px-5">
      <img src="/box.svg" />
      <div className="hidden lg:flex items-center tracking-tighter antialiased font-head leading-none">
        <Tag href="#why" text="Why Banyan" />
        <Tag href="#how" text="How It Works" />
        <Tag href="#team" text="Team" />
        <Tag href="#news" text="News" />
        <Tag
          primary
          href="#newsletter"
          text={
            <>
              <span className="font-body">-&gt;</span>Stay in Touch
            </>
          }
        />
      </div>
      <img src="/box.svg" />
    </div>
  );
}
