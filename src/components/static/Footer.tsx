import img from "../../assets/footer_1.jpeg"
import { FaHouseChimney } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="min-h-[400px] max-sm:min-h-[550px]  w-[100%] flex items-center justify-center relative text-white">
            <img src={img} alt="" className="absolute  h-[100%] w-[100%]" />
        <div className="w-[90%] absolute   bg-slate- py-4 flex-wrap max-sm:flex grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-3 max-sm:gap-4">
            <div className="flex-col max-sm:text-[14px]">
                <nav className="text-[20px] ">Help</nav>
                <nav className="mt-2 hover:text-[orange] duration-500 transition-all cursor-pointer">Search</nav>
                <nav className="mt-2 hover:text-[orange] duration-500 transition-all cursor-pointer">Help</nav>
                <nav className="mt-2 hover:text-[orange] duration-500 transition-all cursor-pointer">Information</nav>
                <nav className="mt-2 hover:text-[orange] duration-500 transition-all cursor-pointer">Privacy Policy</nav>
                <nav className="mt-2 hover:text-[orange] duration-500 transition-all cursor-pointer">Shipping Details</nav>
            </div>
            <div className="flex-col max-sm:text-[14px]">
                <nav className="text-[20px] ">Support</nav>
                <nav className="mt-2 hover:text-[orange] duration-500 transition-all cursor-pointer">Contact Us</nav>
                <nav className="mt-2 hover:text-[orange] duration-500 transition-all cursor-pointer">About Us</nav>
                <nav className="mt-2 hover:text-[orange] duration-500 transition-all cursor-pointer">Careers</nav>
                <nav className="mt-2 hover:text-[orange] duration-500 transition-all cursor-pointer">Refund & Return</nav>
                <nav className="mt-2 hover:text-[orange] duration-500 transition-all cursor-pointer">Deliveries</nav>
            </div>
            <div className="flex-col  max-sm:text-[14px]">
                <nav className="text-[20px] ">Information</nav>
                <nav className="mt-2 hover:text-[orange] duration-500 transition-all cursor-pointer">Advance Search</nav>
                <nav className="mt-2 hover:text-[orange] duration-500 transition-all cursor-pointer">Help & Faq's</nav>
                <nav className="mt-2 hover:text-[orange] duration-500 transition-all cursor-pointer">Store Location</nav>
                <nav className="mt-2 hover:text-[orange] duration-500 transition-all cursor-pointer">Order & Return</nav>
            </div>
            <div className="flex-col max-sm:text-[14px] ">
                <nav className="text-[20px] ">Contact Us</nav>
                <nav className="mt-2 flex items-center gap-3 break-words ">
                  <div><FaHouseChimney/></div>
                  No: 58 A, East Madison Street, Baltimore</nav>
                <nav className="mt-2 flex items-center gap-3">
                <div><FaPhone/></div>
                  +234 - 8137376144</nav>
                <nav className="mt-2 flex items-center gap-3">
                <div><IoMdMailUnread/></div>
                  foodloanhub@gmail.com</nav>
                <nav className="mt-2 flex items-center gap-3">
                <div><FaRegClock/></div>
                  9.30AM - 7.30PM</nav>
            </div>
        </div>
    </div>
  )
}

export default Footer