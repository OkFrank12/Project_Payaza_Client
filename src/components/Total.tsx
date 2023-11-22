const Total = () => {
  return (
    <>
      <div className="w-[400px] p-2 z-20 bottom-0 bg-white h-[100px] fixed border">
        <div className="flex justify-between text-slate-500 font-bold text-[25px]">
          <p>Total:</p> <p>₦200.00</p>
        </div>
        <div className="w-full h-[45px] flex justify-center items-center cursor-pointer uppercase text-white font-bold my-1 bg-yellow-500">Check Out</div>
      </div>
    </>
  );
};

export default Total;
