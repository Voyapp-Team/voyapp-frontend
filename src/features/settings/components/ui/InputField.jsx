export function InputField({
  label,
  value,
  name,
  onChange,
  placeholder,
  type = "text",
  ...props
}) {
  return (
    <>
      <label
        htmlFor={name}
        className="flex flex-col font-montserrat font-semibold text-base leading-[40px] text-[#B6B6B6]"
      >
        {label}
        <input
          type={type}
          {...props}
          value={value}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          className={` outline-none w-full sm:w-[495px] h-[60px] rounded-xl border border-[#B6B6B6] opcaity-10 bg-[#FFFFFF] font-regular text-base leading-[40px] text-[#1C1B1B] px-5 py-3 `}
        />
      </label>
    </>
  );
}
export function InputTextArea({
  label,
  value,
  name,
  onChange,
  placeholder,
  type = "text",
  ...props
}) {
  return (
    <>
      <label
        htmlFor={name}
        className="flex flex-col font-montserrat font-semibold text-base leading-[40px] text-[#B6B6B6] w-full"
      >
        {label}
        <textarea
          {...props}
          value={value}
          name={name}
          onChange={onChange}
          maxLength={250}
          className={`resize-none outline-none w-full sm:w-[495px] h-[119PX] overflow-y-auto  [&::-webkit-scrollbar]:w-2 rounded-xl border border-[#B6B6B6] opcaity-10 bg-[#FFFFFF] font-regular text-base leading-[40px] text-[#1C1B1B] px-5 py-3 left-0`}
        ></textarea>
      </label>
    </>
  );
}
