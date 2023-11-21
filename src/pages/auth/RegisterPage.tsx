import abstractImg from "../../assets/images.png";
import illus_img from "../../assets/3d-illustration-people-working-marketing_23-2150417378.avif";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import React, { useState } from "react";
import { registerAuthAPI } from "../../api/authAPI";
import Swal from "sweetalert2";
import LoadingScreen from "../../utils/LoaderScreen";

const RegisterPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      {loading && <LoadingScreen />}
      {show && (
        <div className="flex justify-center w-full">
          <a
            href="https://mail.google.com"
            className="fixed top-0 z-20 py-3 px-5 bg-green-500 rounded text-white capitalize"
          >
            click here
          </a>
        </div>
      )}
      <div className="w-full relative h-screen">
        <img src={abstractImg} className="w-full h-full" />
        <main className="w-full h-full flex justify-center items-center absolute top-0">
          <section
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
            }}
            className="w-[90%] flex justify-between h-[90%] bg-white"
          >
            <div className="w-[40%] h-full items-center flex flex-col justify-center ">
              <div
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                }}
                className="w-[90%] rounded-md p-5 min-h-[90%] bg-white
              "
              >
                <h2 className="font-PoppinsBold text-[30px]">Register</h2>
                <p className="text-gray-500">
                  Already have an account?{" "}
                  <Link
                    to={`/sign-in`}
                    className="text-yellow-600 hover:text-yellow-800 transition-all"
                  >
                    Sign in
                  </Link>
                </p>
                {/* This is email */}
                <div className="my-5">
                  <p className="font-bold text-slate-500">Email Address</p>
                  <input
                    type="email"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="account@gmail.com"
                    className="w-full h-[45px] border-slate-500 border-[1px] rounded-md outline-yellow-600 pl-5"
                  />
                </div>
                {/* This is password */}
                <div className="my-5">
                  <p className="font-bold text-slate-500">Password</p>
                  <input
                    type="password"
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setPassword(e.target.value);
                    }}
                    placeholder="*********password"
                    className="w-full h-[45px] border-slate-500 border-[1px] rounded-md outline-yellow-600 pl-5"
                  />
                </div>
                {/* This is userName */}
                <div className="my-5">
                  <p className="font-bold text-slate-500">Username</p>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setUserName(e.target.value);
                    }}
                    placeholder="Franklin Okoro"
                    className="w-full h-[45px] border-slate-500 border-[1px] rounded-md outline-yellow-600 pl-5"
                  />
                </div>
                <div
                  onClick={() => {
                    setLoading(true);
                    registerAuthAPI({ email, password, userName }).then(
                      (res: any) => {
                        if (res) {
                          Swal.fire({
                            icon: "success",
                            title: "A Mail has been sent to you",
                            text: "Go and verify with email",
                            timer: 3500,
                            timerProgressBar: true,
                          }).then(() => {
                            setLoading(false);
                            setShow(true);
                          });
                        } else {
                          Swal.fire({
                            icon: "error",
                            title: "Some Error occured",
                            text: "check your credentials / network connectivity",
                            timer: 3500,
                            timerProgressBar: true,
                          }).then(() => {
                            setLoading(false);
                          });
                        }
                      }
                    );
                  }}
                  className="w-full rounded-md flex justify-center items-center h-[45px] bg-yellow-600 cursor-pointer hover:bg-yellow-700 text-white"
                >
                  REGISTER
                </div>
                <div className="flex items-center my-5 justify-center">
                  <hr className="w-[35%] border-[1px] border-slate-500" />
                  <span className="mx-5 text-slate-500">or use</span>
                  <hr className="w-[35%] border-[1px] border-slate-500" />
                </div>
                <div className="flex my-5 justify-center">
                  <div className="border-[1px] text-rose-500 cursor-pointer hover:scale-[1.01] duration-500 flex items-center justify-center border-rose-500 rounded-md w-[45%] h-[45px]">
                    <FaGoogle />
                    <span className="ml-2 font-bold">Google</span>
                  </div>
                </div>
              </div>
            </div>
            <img src={illus_img} className="w-[60%] object-cover" />
          </section>
        </main>
      </div>
    </>
  );
};

export default RegisterPage;
