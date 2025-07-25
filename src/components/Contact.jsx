import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import Map from "./Map";

const Contact = () => {
  return (
    <section class="bg-gradient-to-tl from-orange-100 via-fuchsia-50 to-indigo-100 w-full">
      <div class=" px-2 py-3 mx-auto">
        <div>
          <p class="font-medium text-blue-500 dark:text-blue-400">Contact us</p>

          <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">
            Get in touch
          </h1>

          <p class="mt-3 text-gray-700 ">
            Our friendly team would love to hear from you.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-4 mt-10 lg:grid-cols-3">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <span class="inline-block p-3 text-blue-500 rounded-full bg-white">
                     <TfiEmail />
              </span>

              <h2 class="mt-4 text-base font-medium text-gray-800 ">
                Email
              </h2>
              <p class="mt-2 text-sm text-gray-700 ">
                Our friendly team is here to help.
              </p>
              <p class="mt-2 text-sm text-blue-600 ">
                hello@merakiui.com
              </p>
            </div>

            <div>
              <span class="inline-block p-3 text-blue-500 rounded-full bg-white">
               <FaLocationDot />
              </span>

              <h2 class="mt-4 text-base font-medium text-gray-800">
                Office
              </h2>
              <p class="mt-2 text-sm text-gray-700 ">
                Come say hello at our Location.  
              </p>
              <p class="mt-2 text-sm text-blue-600">
               Block Mode, Near, Block Mode, Barkagaon, Jharkhand 825311
              </p>
            </div>

            <div>
              <span class="inline-block p-3 text-blue-500 rounded-full bg-white">
              <FaPhone />
              </span>

              <h2 class="mt-4 text-base font-medium text-gray-800">
                Phone
              </h2>
              <p class="mt-2 text-sm text-gray-700 ">
                Mon-sat from 8am to 10pm.
              </p>
              <p class="mt-2 text-sm text-blue-600 ">
                +917004039513
              </p>
            </div>
          </div>

          <div class="overflow-hidden rounded-lg lg:col-span-2 h-64 lg:h-auto">
            <Map></Map>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
