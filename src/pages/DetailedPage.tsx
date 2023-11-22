import img from "../assets/f8a2ab33ff6941afcd0511e0d62cbeba.jpg";

const DetailedPage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <div className="w-[80%] h-[80%] max-sm:h-[90%] flex justify-between max-sm:flex-col">
        <div className="w-[45%]  max-sm:w-[100%]">
          <img
            src={img}
            alt=""
            className="w-[100%] h-[100%] bg-[#eeeeeef4] object-cover"
          />
        </div>
        <div className="w-[50%] max-sm:w-[100%]">
          <div className="text-[20px] font-semibold tracking-widest">
            Solid Cargo Pant
          </div>

          <div className="relative h-[20px] w-[100%]">
            <div className="text-[13px] absolute z-[1] top-0 left-0">
              {"⭐".repeat(4)}
            </div>
            <div className="text-[13px] absolute z-1 top-0 left-0 opacity-[0.2]">
              {"😶".repeat(5)}
            </div>
          </div>
          <br />
          <div className="font-semibold text-[24px]">₦20,000</div>
          <br />
          <div>
            <h1 className="text-[18px] font-semibold">Discription:</h1>
            <h3 className="text-[15px] md:text-[14px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum esse
              fugiat iure, vel dolorum aut quasi quas itaque!
            </h3>
          </div>
          <br />

          <div className="flex mt-3 ">
            <div className="flex items-center h-[50px] border">
              <div className="w-[40px] h-full flex items-center justify-center hover:cursor-pointer duration-300 transition-all hover:scale-[1.06]">
                -
              </div>
              <div className="mx-4">0</div>
              <div className="w-[40px] h-full flex items-center justify-center hover:cursor-pointer duration-300 transition-all hover:scale-[1.06]">
                +
              </div>
            </div>
          </div>
          <br />
          <br />
          <button
            className="w-[100%] rounded-[3px] relative flex justify-center items-center gap-1 hover:text-[black)] hover:before:translate-x-[105%]
        overflow-hidden before:transition-transform
        before:duration-[1s] ease-in-out text-white before:bg-[black] before:absolute
        before:top-0 before:left-0 before:w-full before:h-full
        transition-colors duration-[1s] before:z-[-1] z-[1]
        hover:text-white border-[1px]
        border-[] bg-[#f4b618]
        px-2 py-4  text-[13px] font-medium small:hidden"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailedPage;
