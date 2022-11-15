'use client';

import React, { useState } from 'react';

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
  const [file, setFile] = useState(placeholder);

  return (
    <div>
      {label && (
        <label htmlFor={name} className="block text-xs font-medium">
          {label}
        </label>
      )}
      <div className="mt-1">
        {type === 'file' ? (
          <div className="border p-2 rounded-md focus:outline-none block w-full bg-transparent text-sm">
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="file-upload"
                className="rounded-full relative cursor-pointer bg-transparent font-medium text-zinc-500 focus-within:outline-none border border-zinc-500 border-dashed px-2"
              >
                <span className="truncate">{file}</span>
                <input
                  name={name}
                  type="file"
                  className="sr-only"
                  // @ts-ignore
                  onChange={(e) => setFile(e.target.files[0].name)}
                />
              </label>
            </div>
          </div>
        ) : (
          <input
            type={type}
            name={name}
            className={`customBorder p-2 rounded-md focus:outline-none block w-full bg-transparent text-sm ${classes}`}
            placeholder={placeholder}
            aria-describedby={`${name}-description`}
            disabled={disabled}
            {...props}
          />
        )}
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
