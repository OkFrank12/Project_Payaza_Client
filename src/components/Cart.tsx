import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoBag } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { onToggleState } from "../global/reduxState";
import CartSummary from "./CartSummary";
import Total from "./Total";
const Cart = () => {
  const [cart, setCart] = useState<Array<{}>>([1]);
  const toggle = useSelector((state: any) => state.toggle);
  const dispatch = useDispatch();

  const dispatchToggle = () => {
    dispatch(onToggleState(!toggle));
  };

  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.2)",
        position: "fixed",
        width: "100%",
        height: "100%",
      }}
      className="fixed top-0 z-50 flex justify-end"
    >
      <section className="w-[400px] overflow-y-scroll h-full bg-white">
        {cart?.length === 0 ? (
          <>
            <AiOutlineClose
              size={25}
              onClick={dispatchToggle}
              className="absolute top-0 text-slate-500 cursor-pointer hover:text-slate-800 duration-500 right-0"
            />
            <div className="w-full flex items-center flex-col justify-center text-slate-500  h-full text-center">
              <IoBag size={100} className="text-yellow-500 animate-bounce" />
              <p className="font-bold text-[30px]">Your Cart is empty</p>
              <button
                onClick={dispatchToggle}
                className="px-10 py-3 bg-yellow-500 mt-3 hover:bg-yellow-600 duration-500 rounded-md text-white"
              >
                Continue Shopping
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="w-[400px] z-10 bg-white fixed justify-between h-[100px] shadow-md p-3 flex items-center">
              <p className="font-bold text-[30px] text-slate-500 capitalize">
                Shopping cart
              </p>
              <AiOutlineClose
                size={25}
                onClick={dispatchToggle}
                className=" text-slate-500 cursor-pointer hover:text-slate-800 duration-500"
              />
            </div>

            <div className="mt-[110px]"></div>
            <CartSummary />
            <div className="mt-[120px]"></div>
            <Total />
          </>
        )}
      </section>
    </div>
  );
};

export default Cart;
