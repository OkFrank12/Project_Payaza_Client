import { AiOutlineClose } from "react-icons/ai";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import image from "../assets/images.png";

const CartSummary = () => {
  return (
    <>
      {" "}
      <div className="w-full mb-5 flex h-[150px] relative">
        <div className="w-[35px] h-[35px] rounded-full absolute right-2 top-2 cursor-pointer text-slate-500 hover:text-slate-700 shadow-md flex items-center justify-center border">
          <AiOutlineClose size={20} />
        </div>
        <img src={image} className="w-[150px] h-[150px]" />
        <div className="h-full flex flex-col justify-center pl-3">
          <p className="font-bold text-slate-500">Fish With Chips</p>
          <p className="text-green-500 font-bold my-2">₦200.00</p>
          <div className="flex items-center">
            <div className="w-[50px] h-[50px] cursor-pointer border text-slate-500 flex items-center justify-center">
              <MdKeyboardDoubleArrowLeft size={35} />
            </div>
            <span className="mx-2">5</span>
            <div className="w-[50px] h-[50px] border cursor-pointer text-slate-500 flex items-center justify-center">
              <MdKeyboardDoubleArrowRight size={35} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSummary;
