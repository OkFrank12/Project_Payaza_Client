import img from "../assets/lily-banse--YHSwy6uqvk-unsplash.jpg"

const Hero = () => {
  return (
    <div className='w-full h-[300px]  flex items-center justify-center relative bg-slate-400'>
        <img src={img} alt="" className=" overflow-hidden left-0 w-full h-[100%] object-cover"
         style={{
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            
            // overflow: "scroll"
    }}/>
    <div className="absolute w-full h-[100%] top-0 left-0 bg-[#0000006d]"/>
            <div className="absolute flex-col flex items-center text-white">
                <div className="text-[40px] tracking-widest capitalize max-sm:text-[36px]">Collection</div>
                <span>Home/Products</span>
            </div>
        </div>
  )
}

export default Hero