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
        } uppercase border rounded-xl px-3 py-1`}
      >
        {text}
      </a>
    </Link>
  );
}
