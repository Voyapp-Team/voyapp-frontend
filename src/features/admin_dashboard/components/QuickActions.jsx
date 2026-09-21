export const QuickActionsWrapper = ({ children }) => {
  return (
    <div className="flex items-center flex-wrap gap-4 bg-white rounded-lg border border-[#BBCAC433] py-4 px-6 w-full">
      {children}
    </div>
  );
};

export const InputField = ({
  name,
  label,
  typeOf,
  Icon,
  placeholder,
  className,
  ...props
}) => {
  return (
    <label
      htmlFor={name}
      className={`flex flex-col gap-2 items-left text-[#3C4A46]  h-[40px] font-montserrat font-semibold text-xs leading-2 ${className ? className : "max-w-[341px]"}`}
    >
      {label}
      <div
        className={`${Icon ? "relative  pl-[40px] pr-[16px] " : "p-[16px]"} py-[10px] w-full bg-white border border-[#BBCAC44D]  rounded-md`}
      >
        {Icon && <Icon className="absolute w-6 h-6 left-3" />}
        <input
          type={typeOf}
          id={name}
          name={name}
          {...props}
          placeholder={placeholder}
          className="w-full font-montserrat font-medium text-sm leading-5 text-[#6B7280] outline-none"
        />
      </div>
    </label>
  );
};

export const SelectWrapper = ({ label, children, name }) => {
  return (
    <label
      htmlFor={name}
      className="flex flex-col gap-2 items-left text-[#3C4A46] w-fit h-[40px] font-montserrat font-semibold text-xs leading-2"
    >
      {label}
      <select
        name={name}
        id={name}
        className="py-[10px] px-[16px] h-full w-full bg-white border border-[#BBCAC44D]  rounded-md outline-none"
      >
        {children}
      </select>
    </label>
  );
};
