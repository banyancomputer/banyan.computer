export default function Button({ href = "", text = "", primary = false }) {
  return (
    <a
      href={href}
      className={
        primary
          ? "bg-blue text-white hover:text-black hover:bg-green active:text-blue py-2 px-4 text-center"
          : "border text-gray hover:text-green active:text-blue py-2 px-4 text-center"
      }
    >
      {text}
    </a>
  );
}
