import Link from "next/link";
export default function Tag({
  className = "",
  href = "",
  text = "",
  primary = false,
}) {
  return (
    <Link href={href}>
      <a
        className={`${className}${
          primary
            ? "hover:bg-green bg-gray text-black"
            : "hover:text-green bg-black text-gray"
        } uppercase border rounded-[90px] px-3 py-1 leading-8`}
      >
        {text}
      </a>
    </Link>
  );
}
