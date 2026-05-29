import PropTypes from 'prop-types'; // 1. Import the library

export const FormInput = ({
  className = "",
  label,
  labelClassName = "",
  placeholder,
  inputClassName = "",
  inputType = "text",
  inputValue,
  onChange,
}) => {
  return (
    <label className={`block ${className}`}>
      <span
        className={`mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] ${labelClassName}`.trim()}
      >
        {label}
      </span>

      <input
        type={inputType}
        value={inputValue}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-xl px-3 text-sm text-[#2c2c2c] outline-none placeholder:text-[#c1c1c1] ${inputClassName}`.trim()}
      />
    </label>
  );
};

// 2. Define the types here
FormInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  placeholder: PropTypes.string,
  inputWrapperClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  inputType: PropTypes.string,
  inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Can be string or number
  onChange: PropTypes.func,
};
