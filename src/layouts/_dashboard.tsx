import { Dialog, Menu, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { Fragment, useState } from 'react';

const navigation = [
  { name: 'Overview', href: '/dashboard', icon: HomeIcon, current: true },
  {
    name: 'All Users',
    href: '/dashboard/allUsers',
    icon: UsersIcon,
  },
  {
    name: 'Transactions',
    href: '/dashboard/transactions',
    icon: FolderIcon,
  },
  {
    name: 'Authentication session',
    href: '/dashboard/authSession',
    icon: CalendarIcon,
  },
  {
    name: 'NFT Contracts',
    href: '/dashboard/nftContracts',
    icon: InboxIcon,
  },
  {
    name: 'Manage Keys',
    href: '/dashboard/manageKeys',
    icon: ChartBarIcon,
  },
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-40 flex md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600/75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex w-full max-w-xs flex-1 flex-col bg-brand-dark pt-5 pb-4">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex shrink-0 items-center px-4">
                  <Image
                    className="h-8 w-auto"
                    width="100"
                    height="100"
                    src="/assets/logo.svg"
                    alt="fetcch_logo"
                  />
                </div>
                <div className="mt-5 h-0 flex-1 overflow-y-auto">
                  <nav className="space-y-1">
                    {navigation.map((item) => (
                      <div key={item.name} className="w-full">
                        <Link
                          href={item.href}
                          className={classNames(
                            'group flex items-center p-4 text-base font-semibold',
                            item.href === pathname
                              ? 'bg-[#0F0F0F] text-brand-amber'
                              : 'text-gray-600 hover:bg-[#0F0F0F] hover:text-gray-500'
                          )}
                        >
                          <item.icon
                            className={classNames(
                              pathname === item.href
                                ? 'text-brand-amber'
                                : 'text-gray-600 group-hover:text-gray-500',
                              'mr-4 flex-shrink-0 h-6 w-6'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </Link>
                      </div>
                    ))}
                  </nav>
                </div>
              </div>
            </Transition.Child>
            <div className="w-14 shrink-0" aria-hidden="true"></div>
          </Dialog>
        </Transition.Root>

        {/* Sidebar for desktop */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          <div className="flex grow flex-col overflow-y-auto border-r border-[#202020] bg-brand-dark pt-5">
            <div className="flex shrink-0 items-center px-4">
              <Image
                className="h-8 w-auto"
                width="100"
                height="100"
                src="/assets/logo.svg"
                alt="fetcch_logo"
              />
            </div>
            <div className="mt-5 flex grow flex-col">
              <nav className="flex-1 space-y-1 pb-4">
                {navigation.map((item) => (
                  <div
                    key={item.name}
                    className="hover:bg-[#0F0F0F] active:bg-[#0F0F0F]"
                  >
                    <Link
                      href={item.href}
                      className={classNames(
                        'group flex items-center px-4 py-4 text-sm font-semibold',
                        item.href === pathname
                          ? 'bg-[#0F0F0F] text-brand-amber'
                          : 'text-gray-600'
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.href === pathname
                            ? 'text-brand-amber'
                            : 'text-gray-400 group-hover:text-gray-500',
                          'mr-3 flex-shrink-0 h-6 w-6'
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col md:pl-64">
          <div className="sticky top-0 z-10 flex h-16 shrink-0 bg-brand-dark shadow">
            <button
              type="button"
              className="px-4 text-gray-500 focus:outline-none md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex flex-1 justify-end px-4">
              <div className="ml-4 flex items-center md:ml-6">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex max-w-xs  items-center rounded-full bg-[#0F0F0F] text-sm focus:outline-none">
                      <div className="flex items-center">
                        <div>
                          <img
                            className="inline-block h-9 w-9 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                        <div className="m-3">
                          <p className="text-sm font-medium text-gray-200 group-hover:text-gray-900">
                            satyam@fetcch
                          </p>
                        </div>
                      </div>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-brand-dark py-1 shadow-lg focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <Link
                              href={item.href}
                              className={classNames(
                                'block px-4 py-2 text-sm text-gray-300',
                                active ? 'hover:text-brand-amber' : ''
                              )}
                            >
                              {item.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <main className="flex-1">
            <div className="py-6">
              <div className="mx-auto max-w-7xl px-4">{children}</div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
