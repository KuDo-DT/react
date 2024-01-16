import React from "react";
import { FaUserCog } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
import { GiFireworkRocket } from "react-icons/gi";
import { MdMenuBook } from "react-icons/md";
const Index4_button = ({ onClick, children }) => {
  return (
    <div class="flex">
      <button
        type="button"
        onClick={onClick}
        class="flex items-center justify-center w-[200px] h-[100px] rounded text-black bg-white-500 hover:bg-blue-100 hover:border-b hover:border-b-blue-500 "
      >
        <div class="flex flex-col items-center hover:text-blue-500 hover:border-blue-500">
          <FaUserCog />
          <p class="mt-2">Dành cho bạn </p>
        </div>
      </button>
      <button
        type="button"
        onClick={onClick}
        class="flex items-center justify-center w-[200px] h-[100px] rounded text-black bg-white-500 hover:bg-blue-100 hover:border-b hover:border-b-blue-500 "
      >
        <div class="flex flex-col items-center hover:text-blue-500 hover:border-blue-500">
          <FaFire />
          <p class="mt-2">Top Deal Bán Chạy</p>
        </div>
      </button>
      <button
        type="button"
        onClick={onClick}
        class="flex items-center justify-center w-[200px] h-[100px] rounded text-black bg-white-500 hover:bg-blue-100 hover:border-b hover:border-b-blue-500 "
      >
        <div class="flex flex-col items-center hover:text-blue-500 hover:border-blue-500">
         <GiFireworkRocket />
          <p class="mt-2"> Quà Tết từ 200k</p>
        </div>
      </button>
      <button
        type="button"
        onClick={onClick}
        class="flex items-center justify-center w-[200px] h-[100px] rounded text-black bg-white-500 hover:bg-blue-100 hover:border-b hover:border-b-blue-500 "
      >
        <div class="flex flex-col items-center hover:text-blue-500 hover:border-blue-500">
          <MdMenuBook />
          <p class="mt-2">Sách Xả Kho - 60%</p>
        </div>
      </button>
      
    
    </div>
  );
};

export default Index4_button;
