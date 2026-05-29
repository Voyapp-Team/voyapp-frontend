
export default function InputError({ message }) {
    if (!message) return null;
    return (
        <div className="text-[14px] text-[#BA1A1A] font-manrope font-semibold flex items-center mt-1">
          <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#BA1A1A]"></span>
          <p className="leading-5 ">{message}</p>
        </div>
    );
}