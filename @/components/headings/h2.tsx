const HeadingTitle = ({
  children,
  className = "sm:text-7xl",
}: {
  children: React.ReactNode;
  className?: React.HTMLProps<HTMLElement>["className"];
}) => {
  return (
    <h2
      className={`font-display text-5xl font-bold tracking-tighter text-emerald-500 ${className}`}
    >
      {children}
    </h2>
  );
};

export default HeadingTitle;
