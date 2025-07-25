import React from "react";

import grocery from "../assets/icons/groceryy.gif";
import stationary from "../assets/icons/stationary.gif";
import wheat from "../assets/icons/wheat.gif";
import kitchen from "../assets/icons/kitchen-tools.gif";

const Services = () => {
  return (
    <div>
      <div className="w-full bg-gradient-to-l from-white via-sky-100 to-white flex-col min-h-[88vh] lg:flex-row flex-wrap flex items-center justify-between gap-4 p-1 md:p-4">
        <div className="flex gap-3 flex-col w-full lg:w-[30%] ">
          <h1 className="text-3xl lg:text-4xl text-center md:text-left font-extrabold text-blue-400">
            Our Grocery & Household Product Services
          </h1>
          <p className="text-center md:text-left font-semibold text-gray-600 text-[15px] md:text-[16px] mt-1">
            Groceries, grains, cold drinks, kitchenware, plastic utensils, and
            stationery, all your daily essentials in one affordable, trusted
            store.
          </p>
          <p className="text-blue-500 text-center md:text-left font-semibold">
            Explore More
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-[65%] ">
          <div className="flex flex-col gap-4 w-ful lg:w-[50%]">
            <div class="p-4 bg-white rounded-lg shadow-sm w-[100%]">
               <img
                src={grocery}
                className="w-10 md:w-11 lg:w-11  p-2 rounded-full"
                alt=""
              />
              <p class="text-gray-900 text-xl font-semibold ml-2 mt-2">
                Grocery Items
              </p>
              <p class="text-gray-500 text-sm my-3 ml-2">
                {" "}
                Find all your daily grocery needs at one place — from fresh
                staples to pantry essentials, we offer quality, affordability,
                and convenience to keep your kitchen stocked and your family
                nourished every single day of the week.
              </p>
            </div>

            <div class="p-4 bg-white rounded-lg shadow-sm w-[100%]">
              <img
                src={stationary}
                className="w-10 md:w-11 lg:w-11  p-2 rounded-full"
                alt=""
              />
              <p class="text-gray-900 text-xl font-semibold ml-2 mt-2">
                Stationery Items
              </p>
              <p class="text-gray-500 text-sm my-3 ml-2">
                {" "}
                Whether you're a student, a professional, or running a
                household, our wide range of stationery items — notebooks, pens,
                art supplies, and more — ensures you’re always ready, organized,
                and equipped for school, work, or everyday tasks.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-ful lg:w-[50%]">
            <div class="p-4 bg-white rounded-lg shadow-sm w-[100%]">
              <img
                src={wheat}
                className="w-10 md:w-11 lg:w-11  p-2 rounded-full"
                alt=""
              />
              <p class="text-gray-900 text-xl font-semibold ml-2 mt-2">
                Grains (Rice, Pulses, etc.)
              </p>
              <p class="text-gray-500 text-sm my-3 ml-2">
                {" "}
                We offer premium-quality grains, pulses, rice, and cereals —
                sourced from trusted suppliers to ensure purity, nutrition, and
                taste. Keep your family’s meals healthy and satisfying with
                ingredients that are rich in value and full of flavor.
              </p>
            </div>

            <div class="p-4 bg-white rounded-lg shadow-sm w-[100%]">
              <img
                src={kitchen}
                className="w-10 md:w-11 lg:w-11 p-2 rounded-full"
                alt=""
              />
              <p class="text-gray-900 text-xl font-semibold ml-2 mt-2">
                Kitchen & Plastic Utensils
              </p>
              <p class="text-gray-500 text-sm my-3 ml-2">
                {" "}
                Upgrade your kitchen with our range of reliable tools,
                plasticware, and cooking essentials — from durable utensils to
                storage containers, all designed to make your everyday cooking
                easier, more organized, and budget-friendly without compromising
                on quality or style.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
