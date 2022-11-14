'use client';

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

export default function Index({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 md:hidden"
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
              <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-brand-dark">
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
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
                <div className="shrink-0 flex items-center px-4">
                  <Image
                    className="h-8 w-auto"
                    width="100"
                    height="100"
                    src="/assets/logo.svg"
                    alt="fetcch_logo"
                  />
                </div>
                <div className="mt-5 flex-1 h-0 overflow-y-auto">
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
            <div className="shrink-0 w-14" aria-hidden="true"></div>
          </Dialog>
        </Transition.Root>

        {/* Sidebar for desktop */}
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          <div className="flex flex-col grow border-r border-[#202020] pt-5 bg-brand-dark overflow-y-auto">
            <div className="flex items-center shrink-0 px-4">
              <Image
                className="h-8 w-auto"
                width="100"
                height="100"
                src="/assets/logo.svg"
                alt="fetcch_logo"
              />
            </div>
            <div className="mt-5 grow flex flex-col">
              <nav className="flex-1 pb-4 space-y-1">
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
        <div className="md:pl-64 flex flex-col flex-1">
          <div className="sticky top-0 z-10 shrink-0 flex h-16 bg-brand-dark shadow">
            <button
              type="button"
              className="px-4 text-gray-500 focus:outline-none md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex-1 px-4 flex justify-end">
              <div className="ml-4 flex items-center md:ml-6">
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="max-w-xs bg-[#0F0F0F]  flex items-center text-sm rounded-full focus:outline-none">
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
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-brand-dark focus:outline-none">
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
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
