import { useDispatch } from "react-redux";
import abstract_img from "../assets/stacks-of-bags-of-rice-sold-at-a-grocery-shop-in-ealing-road-in-north-DYCDEC.jpg";
import { onLogOut } from "../global/reduxState";
import ProductCard from "../components/ProductCard";

const HistoryPage = () => {
  const dispatch = useDispatch();
  return (
    <>
      <body className="w-full min-h-screen">
        <section className="w-full h-[300px] relative bg-blue-500">
          <img
            style={{
              backgroundAttachment: "fixed",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src={abstract_img}
          />
          <div className="absolute text-white w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.8)] top-0">
            <div className="text-center">
              <h1 className="font-PoppinsBold text-[50px]">Loaned Orders</h1>
              <p className="italic text-slate-300">Check History</p>
              <button
                onClick={() => {
                  dispatch(onLogOut());
                }}
                className="px-10 py-3 mt-5 bg-white hover:bg-yellow-500 rounded-md text-black hover:text-white duration-500"
              >
                Logout
              </button>
            </div>
          </div>
        </section>
        <main className="w-full h-screen flex justify-center items-center">
          <section className="w-[95%] h-screen pt-10">
            <div className="w-full justify-between flex">
              <h2 className="font-PoppinsBold text-[50px] text-slate-500">
                History
              </h2>
              <h2 className="font-PoppinsBold text-[50px] text-rose-500">
                -₦5,000.00
              </h2>
            </div>
            <div className="w-full flex flex-wrap justify-center">
              <ProductCard />
            </div>
          </section>
        </main>
      </body>
    </>
  );
};

export default HistoryPage;
