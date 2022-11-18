import { Listbox, Transition } from '@headlessui/react';
import cn from 'classnames';
import { Fragment, useState } from 'react';

export default function CustomSelect({
  options,
  selectText,
  label,
}: {
  options: any;
  selectText: string;
  label: string;
}) {
  const [selectedValue, setSelectedValue] = useState(options[0].name);

  return (
    <Listbox value={selectedValue} onChange={setSelectedValue}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium">
            {label}
          </Listbox.Label>
          <div className="relative mt-1">
            <Listbox.Button className="relative mt-1 w-full cursor-default rounded-md border border-[#464646] bg-transparent py-3 pl-3 pr-10 text-left text-sm shadow-sm sm:rounded-lg">
              <span className="block truncate">
                {selectedValue.name ?? (
                  <span className="text-gray-500">{selectText}</span>
                )}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <svg
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              enter="transition duration-200 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-200 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-[#464646] bg-brand-dark py-1 text-base shadow-lg ring-1 ring-brand-dark/5 focus:outline-none sm:rounded-lg sm:text-sm">
                {options.map((option: any) => (
                  <Listbox.Option
                    key={option.id}
                    className={({ active }) =>
                      cn(
                        active ? 'text-white bg-brand-amber' : 'text-gray-400',
                        'cursor-default select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={cn(
                            selected ? 'font-semibold' : 'font-normal',
                            'block truncate'
                          )}
                        >
                          {option.name}
                        </span>

                        {selected ? (
                          <span
                            className={cn(
                              active ? 'text-white' : 'text-brand-amber',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <svg
                              className="h-5 w-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
