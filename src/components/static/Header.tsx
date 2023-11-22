import { FaPhone } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import logo from "../../assets/Group 5.svg"
const Header = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col">
        <div className="w-[100%] flex items-center justify-center bg-[#f4b618]">
            <div className="w-[90%] py-4 flex items-center justify-between flex-wrap">
          <div className="flex gap-5 flex-wrap max-sm:justify-center max-sm:leading-[1px]">
          <div className="flex items-center justify-center gap-2 hover:text-[white] duration-600 transition-all cursor-pointer">
                <div className="text-[13px]"><FaPhone/></div>
                <span className="text-[15px] max-sm:[14px]">+234 - 8137376144</span>
            </div>
            <div className="flex items-center justify-center gap-2 hover:text-white duration-600 transition-all cursor-pointer">
                <div className="text-[14px]"><IoMdMailUnread/></div>
                <span className="text-[14px]">foodloanhub@gmail.com</span>
            </div>
          </div>
            </div>
            {/* second */}
        </div>
        <div className="w-[90%] h-[70px] flex items-center justify-between">
            <div className="">
              <img src={logo} alt="" className="w-[60%] max-md:w-[50%] max-sm:w-[50%]" />
            </div>
            <div className="flex items-center lg:gap-8 md:gap-3  text-[15px] max-sm:hidden">
                <nav className="hover:underline duration-500 transition-all cursor-pointer">Home</nav>
                <nav className="hover:underline duration-500 transition-all cursor-pointer">Indian</nav>
                <nav className="hover:underline duration-500 transition-all cursor-pointer">Italian</nav>
                <nav className="hover:underline duration-500 transition-all cursor-pointer">Thai</nav>
                <nav className="hover:underline duration-500 transition-all cursor-pointer">Chinese</nav>
                <nav className="hover:underline duration-500 transition-all cursor-pointer">Shop</nav>
                <nav className="hover:underline duration-500 transition-all cursor-pointer">Pages</nav>
            </div>
            <div className="flex items-center lg:gap-6 md:gap-4 text-[24px] md:text-[20px] max-sm:text-[18px] max-sm:gap-3 md:ml-6">
                <div>
                <IoPersonCircleOutline/>
                </div>
                <div>
                <MdOutlineShoppingBag/>
                </div>
                <div>
                <FaRegHeart/>
                </div>
                <div>
                <IoSearch/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header