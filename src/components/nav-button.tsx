export default function NavButton({
  children,
  color,
}: {
  children: React.ReactNode;
  color: "light" | "dark";
}) {
  const backgroundColor = color === "light" ? "bg-[#ececec]" : "bg-[#111]";
  const textColor = color === "light" ? "text-inherit" : "text-[#eee]";
  const hoverBackgroundColor =
    color === "light" ? "hover:bg-[#c9c9c9]" : "hover:bg-[#4d4d4d]";

  return (
    <button
      className={`font-medium p-[0.6rem] px-[0.7rem] rounded-lg ${backgroundColor} text-[0.8rem] ${textColor} flex items-center justify-center gap-[0.25rem] transition-all duration-[400ms] ${hoverBackgroundColor}`}
      type="submit"
    >
      {children}
    </button>
  );
}
