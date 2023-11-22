const BINpage = () => {
  const validateInput = (e: any) => {
    const input = e.target;
    const inputValue = input.value;

    input.value = inputValue.replace(/\D/g, "");
  };
  return (
    <>
      <div className="w-full h-[100vh] flex flex-col justify-center items-center">
        <p className="font-PoppinsBold  text-[60px] max-sm:text-[40px] text-slate-500">
          BIN Checker
        </p>
        <div className="w-[500px] max-sm:w-[90%]  text-center p-5 text-slate-500 h-[330px] max-sm:h-[350px] border flex flex-col items-center">
          <p className="">
            Experience Seamless Online transactions with our free online BIN
            Checker! Simply input the number, and our tool instantly verifies
            and validates the associated card details. stay step ahead in
            safety.
          </p>
          <div className="w-[500px] h-[200px] flex-col items-center flex mt-5">
            <p className="font-PoppinsBold text-[20px] max-sm:text-[15px] break-words">
              Enter BIN (Bank Identification Number):
            </p>
            <input
              type="text"
              maxLength={6}
              onInput={validateInput}
              className="w-[200px] text-center mt-3 outline-yellow-700 h-[50px] border text-[30px] text-slate-500"
              placeholder="******"
            />
            <button className="w-[200px] hover:rounded-md bg-yellow-500 duration-500 font-bold text-white mt-3 hover:bg-yellow-700 h-[50px]">
              Check BIN Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BINpage;
