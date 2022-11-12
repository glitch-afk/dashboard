import React from 'react';

interface InputProps {
  type: string;
  name: string;
  placeholder?: string;
  disabled?: boolean | false;
  validationMsg?: Boolean | false;
  classes: string;
}

const Input = ({
  type,
  name,
  placeholder,
  disabled,
  validationMsg,
  classes,
}: InputProps) => {
  return (
    <>
      <div className="mt-1">
        <input
          type={type}
          name={name}
          className={`border-inherit focus:border-y-brand-amber focus:border-x-brand-mustard focus:ring-brand-amber caret-brand-amber p-2 rounded-md focus:outline-none block w-full bg-transparent ${classes}`}
          placeholder={placeholder}
          aria-describedby="email-description"
          disabled={disabled}
        />
      </div>
      {validationMsg && (
        <p className="mt-2 text-sm text-gray-500" id="email-description">
          We only use this to display validation messages.
        </p>
      )}
    </>
  );
};

export default Input;
