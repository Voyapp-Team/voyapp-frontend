export default function FormInput({ label, ...props }) {
  return (
    <div className="flex flex-col gap-1.5 w-90 sm:w-120 ">
      <label className="font-montserrat text-xs leading-4 uppercase font-semibold text-[#3C4A46B2] h-4">
        {label}
      </label>
      <input
        type="text"
        {...props}
        className="w-full h-16 sm:h-22 font-montserrat text-[#1B1B1B] border bg-[#FFFFFF] border-[#E1E1E1] rounded-2xl px-4 outline-none focus:border-[#00C2A8]"
      />
    </div>
  );
}
