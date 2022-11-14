import React from 'react';

interface InputProps {
  type: string;
  name: string;
  placeholder?: string;
  disabled?: boolean | false;
  validationMsg?: Boolean | false;
  classes?: string;
  label?: string;
}

const Input = ({
  type,
  name,
  placeholder,
  disabled,
  validationMsg,
  classes,
  label,
  ...props
}: InputProps) => {
  return (
    <div>
      {label && (
        <label htmlFor={name} className="block text-xs font-medium">
          {label}
        </label>
      )}
      <div className="mt-1">
        <input
          type={type}
          name={name}
          className={`customBorder p-2 rounded-md focus:outline-none block w-full bg-transparent text-sm ${classes}`}
          placeholder={placeholder}
          aria-describedby={`${name}-description`}
          disabled={disabled}
          {...props}
        />
      </div>
      {validationMsg && (
        <p className="mt-2 text-sm text-gray-500">
          use this to display validation messages.
        </p>
      )}
    </div>
  );
};

export default Input;
