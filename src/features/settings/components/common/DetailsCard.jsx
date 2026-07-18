export function DetailsCard({ children, className }) {
  return (
    <div
      className={`${className ? className : "bg-[#FFFFFF]"} flex flex-col gap-2 w-full sm:w-[644px] rounded-[24px] p-5 `}
    >
      {children}
    </div>
  );
}

export function DetailsHeader({ children }) {
  return (
    <p className="font-manrope font-extrabold text-xs leading-4 uppercase text-[#3C4A4699] px-4">
      {children}
    </p>
  );
}
