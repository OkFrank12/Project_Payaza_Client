import images from "../assets/images.jpg";
import { BiSolidPolygon } from "react-icons/bi";
import { IoBag } from "react-icons/io5";
import { MdVisibility } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { onToggleState } from "../global/reduxState";
import Cart from "./Cart";
import { Link } from "react-router-dom";
const ProductCard = () => {
  const toggle = useSelector((state: any) => state.toggle);
  const dispatch = useDispatch();

  const dispatchToggle = () => {
    dispatch(onToggleState(!toggle));
  };
  return (
    <>
      {toggle && <Cart />}
      <div className="shadow-md m-2 relative cursor-pointer hover:shadow-2xl h-[550px] w-[320px]">
        <div className="absolute transition-all duration-700 z-20 hover:opacity-100 flex justify-center items-center opacity-0 w-full h-full left-0 bg-[rgba(97,99,42,0.41)] ">
          <div className="w-full h-[50px] justify-center flex">
            <div
              onClick={dispatchToggle}
              className="w-[50px] mx-1 rounded text-yellow-600 h-[50px] bg-white flex justify-center items-center"
            >
              <IoBag size={30} />
            </div>
            <Link
              to={`/id/detail`}
              className="w-[50px] mx-1 rounded text-yellow-600 h-[50px] bg-white flex justify-center items-center"
            >
              <MdVisibility size={30} />
            </Link>
          </div>
        </div>
        <div className="h-[400px] w-full p-3 relative flex">
          <img src={images} className="w-full object-cover" />
        </div>
        <div className="w-full text-center p-3">
          <p>⭐⭐⭐⭐⭐</p>
          <p className="capitalize font-bold">Product Title goes here</p>
          <div className="my-3 flex w-full items-center justify-center">
            <hr className="border-b-2 flex flex-1" />
            <span className="mx-5 text-yellow-500">
              <BiSolidPolygon />
            </span>
            <hr className="border-b-2 flex flex-1" />
          </div>
          <p className="font-bold">₦ 400, 000.00</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
