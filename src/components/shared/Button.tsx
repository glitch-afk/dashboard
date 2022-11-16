import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import React from 'react';

const buttonStyles = cva(
  'flex items-center justify-center py-2 px-4 rounded-md focus:outline-none focus:border-none text-white',
  {
    variants: {
      intent: {
        primary: 'bg-gradient-to-br from-brand-amber to-brand-mustard',

        secondary: 'bg-gray-300',
        outline:
          'bg-transparent border border-x-brand-mustard border-y-brand-amber',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      intent: 'primary',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  children: React.ReactNode;
}

const Button = ({ intent, fullWidth, children, ...props }: ButtonProps) => {
  return (
    <button className={buttonStyles({ intent, fullWidth })} {...props}>
      {children}
    </button>
  );
};

export default Button;
