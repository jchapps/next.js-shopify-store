import React from "react";

function Footer() {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div className="sm:flex sm:items-center sm:justify-center">
        <a href="/" className="flex items-center mb-4 sm:mb-0">
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/506/191/non_2x/bicycle-icon-design-vector.jpg"
            className="mr-3 h-6 sm:h-16"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Belated Bicycles
          </span>
        </a>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="/" className="hover:underline">
          Belated Bicycles™
        </a>
      </span>
    </footer>
  );
}

export default Footer;
