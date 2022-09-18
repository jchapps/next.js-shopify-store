import React, { useState } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 lg:px-6 py-1 dark:bg-gray-800">
        <div className="">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <div className="flex items-center">
              <div className="flex items-center">
                <img
                  className="mr-3 h-6 sm:h-40"
                  src="https://static.vecteezy.com/system/resources/previews/000/506/191/non_2x/bicycle-icon-design-vector.jpg"
                  alt="Workflow"
                />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white mr-40">
                  Belated Bicycles
                </span>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="/"
                    className="text-gray-800 dark:text-white hover:bg-green-200 focus:ring-4 focus:ring-gray-300 duration-300 font-medium rounded-lg text-lg px-6 lg:px-7 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                  >
                    Products
                  </a>

                  <a
                    href="/contact"
                    className="text-gray-800 dark:text-white hover:bg-green-200 focus:ring-4 focus:ring-gray-300 duration-300 font-medium rounded-lg text-lg px-6 lg:px-7 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                  >
                    Contact
                  </a>

                  <a
                    href="/login"
                    className="text-gray-800 dark:text-white hover:bg-green-200 focus:ring-4 focus:ring-gray-300 duration-300 font-medium rounded-lg text-lg px-6 lg:px-7 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-green-200 inline-flex items-center justify-center p-2 rounded-md text-black-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="/"
                  className="text-black hover:bg-green-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  Products
                </a>

                <a
                  href="/contact"
                  className="text-black hover:bg-green-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </a>

                <a
                  href="/login"
                  className="text-black hover:bg-green-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  Login
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
      <hr className="my-1 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-0.5" />
    </div>
  );
}

export default Navbar;
