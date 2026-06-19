const baseClasses =
  "inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl  cursor-pointer px-5 text-sm font-semibold transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60";

const variantClasses = {
  primary:
    "border-transparent bg-[linear-gradient(180deg,var(--color-brand-primary-deep)_0%,var(--color-brand-accent)_100%)] text-white shadow-[0_4px_6px_rgba(0,194,168,0.25),0_10px_15px_rgba(0,194,168,0.25)] hover:brightness-[1.03]",
  secondary:
    "border-[var(--color-brand-border)] bg-white text-[var(--color-brand-primary)] shadow-[0_4px_6px_rgba(0,107,92,0.06),0_10px_15px_rgba(0,107,92,0.06)] hover:border-[var(--color-brand-accent)] hover:bg-[var(--color-brand-soft)]",

  //added teh transparent variant for the go to dashboard button in the conversion successful modal
  transparent:
    "border-[var(--color-brand-border)] bg-transparent text-[var(--color-brand-primary-deep)] hover:bg-black/5 shadow-none",
};

export default function Button({
  as: Component = "button",
  className = "",
  children,
  endIcon = null,
  variant = "primary",
  type = "button",
  ...props
}) {
  const resolvedVariant = variantClasses[variant] ?? variantClasses.primary;

  return (
    <Component
      className={`${baseClasses} ${resolvedVariant} ${className}`.trim()}
      type={Component === "button" ? type : undefined}
      {...props}
    >
      <span>{children}</span>
      {endIcon ? (
        <span aria-hidden="true" className="text-base leading-none">
          {endIcon}
        </span>
      ) : null}
    </Component>
  );
}
