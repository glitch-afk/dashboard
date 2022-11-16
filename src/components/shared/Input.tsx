'use client';

import React, { useState } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'file' | 'email';
  name: string;
  placeholder: string;
  disabled?: boolean | false;
}

interface InputWithLabelProps extends InputProps {
  label: string;
}

const Input = ({ type, name, placeholder, disabled }: InputProps) => {
  const [selectedFile, setSelectedFile] = useState<File>();
  return (
    <>
      {type === 'file' ? (
        <div className="border rounded-md p-2">
          <div className="border border-dashed px-2 rounded-full w-fit">
            <div className="flex text-sm text-gray-600">
              <label className="relative cursor-pointer rounded-md bg-transparent font-medium text-zinc-500 focus-within:outline-none">
                <span className="text-xs">
                  {selectedFile?.name || placeholder}
                </span>
                <input
                  name={name}
                  type="file"
                  className="absolute sr-only left-0 w-full rounded-full text-red-500"
                  // @ts-ignore
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                />
              </label>
            </div>
          </div>
        </div>
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={`customBorder p-2 rounded-md focus:outline-none block w-full bg-transparent text-sm`}
          disabled={disabled}
        />
      )}
    </>
  );
};

export default Input;

export const InputWithLabel = ({
  label,
  name,
  type,
  placeholder,
  disabled,
}: InputWithLabelProps) => {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-medium mb-1">
        {label}
      </label>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};
