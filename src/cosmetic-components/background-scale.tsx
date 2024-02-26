export default function BackgroundScale({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`inline-block relative ${className} after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:-z-10 after:hover:scale-110`}
    >
      {children}
    </div>
  );
}
