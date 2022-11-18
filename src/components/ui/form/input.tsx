import cn from 'classnames';
import { forwardRef } from 'react';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label?: string;
  error?: string;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  useUppercaseLabel?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      type = 'text',
      className,
      inputClassName,
      useUppercaseLabel = false,
      labelClassName,
      ...props
    },
    ref
  ) => (
    <div className={cn('text-xs sm:text-sm', className)}>
      <label>
        {label && (
          <span
            className={cn(
              'block font-medium dark:text-gray-100',
              useUppercaseLabel ? 'mb-2 uppercase sm:mb-3' : 'mb-2',
              labelClassName
            )}
          >
            {label}

            {props.required && (
              <sup className="inline-block text-[13px] text-brand-amber ltr:ml-1 rtl:mr-1">
                *
              </sup>
            )}
          </span>
        )}
        <input
          type={type}
          ref={ref}
          {...props}
          className={cn(
            'mt-1 block h-10 w-full rounded-md border border-gray-200 px-4 py-2 text-sm placeholder-gray-400  transition-shadow duration-200 invalid:border-brand-amber invalid:text-red-600 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:invalid:border-brand-amber focus:invalid:ring-brand-amber disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 dark:border-gray-700 dark:bg-light-dark dark:text-gray-100 dark:focus:border-gray-600 dark:focus:ring-gray-600 sm:h-12 sm:rounded-lg',
            inputClassName
          )}
        />
      </label>
      {error && (
        <span role="alert" className="mt-2 block text-brand-amber sm:mt-2.5">
          {error}
        </span>
      )}
    </div>
  )
);

Input.displayName = 'Input';
export default Input;
