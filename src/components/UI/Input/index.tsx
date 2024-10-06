import React from "react";

type propsType = {
  name: string;
  className?: string;
  placeholder?: string;
  required?: boolean;
  title: string;
  type: string;
  defaultValue?: any;
  disabled?: boolean;
};

const Input = (props: propsType) => {
  const {
    name,
    className,
    placeholder,
    required,
    title,
    type,
    defaultValue,
    disabled,
  } = props;
  return (
    <div className="mb-5">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {title}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className={`${className} ${
          disabled ? "cursor-not-allowed bg-slate-200" : ""
        } bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2`}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={required}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
