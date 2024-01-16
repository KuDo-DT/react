import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <div class="flex justify-center space-x-4">
      <button
        type="button"
        onClick={onClick}
        class="flex items-center justify-center w-[200px] h-[50px] mb-10 rounded-3xl text-black bg-white-500 border-solid border-2 border-black-500 shadow-md hover:text-blue-500 hover:border-blue-500"
      >
        Bình đun siêu tốc
      </button>
      <button
        type="button"
        onClick={onClick}
        class="flex items-center justify-center w-[200px] h-[50px] mb-10 rounded-3xl text-black bg-white-500 border-solid border-2 border-black-500 shadow-md hover:text-blue-500 hover:border-blue-500"
      >
        Kem Chống nắng
      </button>
      <button
        type="button"
        onClick={onClick}
        class="flex items-center justify-center w-[200px] h-[50px] mb-10 rounded-3xl text-black bg-white-500 border-solid border-2 border-black-500 shadow-md hover:text-blue-500 hover:border-blue-500"
      >
        Hộp đựng thực phẩm
      </button>
      <button
        type="button"
        onClick={onClick}
        class="flex items-center justify-center w-[200px] h-[50px] mb-10 rounded-3xl text-black bg-white-500 border-solid border-2 border-black-500 shadow-md hover:text-blue-500 hover:border-blue-500"
      >
        Chảo các loại
        {children}
      </button>
    </div>
  );
};

export default Button;
