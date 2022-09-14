import React from "react";

import "tailwindcss/tailwind.css";

export default function App() {
  return (
    <section class="h-screen">
      <div class="px-6 h-full text-gray-800">
        <div class="flex lg:justify-center lg:justify-between justify-center items-center flex-wrap h-200 g-6 mx-36">
          <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img
              src="https://img.freepik.com/free-vector/ride-bicycle-concept-illustration_114360-915.jpg?w=2000"
              class="w-100 h-100"
              alt="Belated Bicycles"
            />
          </div>
          <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <form>
              <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p class="text-center font-semibold mx-4 mb-0">Login</p>
              </div>

              <div class="mb-6">
                <input
                  type="text"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Email address"
                />
              </div>

              <div class="mb-6">
                <input
                  type="password"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Password"
                />
              </div>

              <div class="flex justify-between items-center mb-6">
                <div class="form-group form-check">
                  <input
                    type="checkbox"
                    class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="exampleCheck2"
                  />
                  <label
                    class="form-check-label inline-block text-gray-800"
                    for="exampleCheck2"
                  >
                    Remember me
                  </label>
                </div>
              </div>

              <div class="text-center lg:text-left">
                <button
                  type="button"
                  class="inline-block px-7 py-3 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-grey-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Login
                </button>
                <p class="text-sm font-semibold mt-2 pt-1 mb-0"></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
