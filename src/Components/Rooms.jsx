import React from 'react';
import Img3 from '../Project-images/small.jpg'
import Img4 from '../Project-images/large.jpg'
import { AiOutlineHeart } from "react-icons/ai";
import {RiPaintFill } from "react-icons/ri";
import { RiShieldStarLine } from "react-icons/ri";

const Rooms = () => {
  return (
    <div name="Rooms"class="md:px-48 md:my-24 my-12 px-0">
      <div>
        <p class="text-2xl md:p-5 p-2 font-semibold">
          OUR LIVING ROOM
          <span class="inline-block w-24 h-1 ml-2 bg-rose-500"></span>
        </p>
        <h1 class="text-5xl font-bold md:p-5 p-2 md:text-break">The Most Memorable Rest<br/>Time Starts Here.
        </h1>
      </div>
        <div class="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-12 px-4 my-8">
            <div class="max-w-xl border-2 shadow-lg rounded-xl">
              <div class="relative">
                <img src={Img3} alt="Img3"/>
                <div class="flex flex-row space-x-4 bottom-2 right-2 absolute cursor-pointer">
                  <AiOutlineHeart class="text-red-500 bg-white rounded-full"size={32}/>
                  <RiPaintFill size={32} class="text-violet-500 bg-white rounded-full"/>
                  <RiShieldStarLine size={32} class="text-cyan-500 bg-white rounded-full"/>
                </div>
              </div>
              <div class="space-y-4 my-4 px-4">
                <h1 class="text-xl font-semibold">Cozy Haven Room</h1>
                <p class="text-gray-600 text-xl text-justify">
                Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.
                </p>
                <h5 class="text-xl">
                  <span class="text-gray-600">Starting from </span>
                  <span class="text-slate-900 font-semibold">Rs. 1000/night</span>
                </h5>
                </div>
                <div class="text-xl my-4 font-semibold px-4">
                <a href="https://wa.link/at5ion" class="my-4">
                  <button class="md:py-3 py-3 md:px-5 px-5 bg-rose-500 hover:bg-rose-700 rounded-md text-white font-semibold cursor-pointer">
                    BOOK NOW
                  </button>
                </a>
              </div>
            </div>
            <div class="max-w-xl border-2 shadow-lg rounded-xl">
              <div class="relative">
                <img src={Img4} alt="Img4"/>
                <div class="absolute flex flex-row space-x-4 bottom-2 right-2 cursor-pointer">
                <AiOutlineHeart class="text-red-500 bg-white rounded-full"size={32}/>
                <RiPaintFill size={32} class="text-violet-500 rounded-full bg-white"/>
                <RiShieldStarLine size={32} class="text-cyan-500 rounded-full bg-white"/>
                </div>
              </div>
              <div class="px-4 space-y-4 my-4">
                <h1 class="text-xl font-semibold">Spacious Serenity Suite</h1>
                <p class="text-xl text-justify">Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.</p>
                <h5 class="text-xl">
                  <span class="text-gray-600">Starting from </span>
                  <span class="text-slate-900 font-semibold">Rs. 1500/night</span>
                </h5>
              </div>
              <div class="text-xl font-semibold my-4 px-4">
                <a href="https://wa.link/at5ion">
                  <button class="md:py-3 py-3 md:px-5 px-5 bg-rose-500 hover:bg-rose-700 rounded-md text-white font-semibold cursor-pointer">
                    BOOK NOW
                  </button>
                </a>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Rooms;
