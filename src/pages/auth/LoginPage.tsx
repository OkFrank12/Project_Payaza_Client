import abstractImg from "../../assets/images.png";
import illus_img from "../../assets/3d-illustration-people-working-marketing_23-2150417378.avif";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { signInAuthAPI, verifiedAuthAPI } from "../../api/authAPI";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { onAuthState } from "../../global/reduxState";
import LoadingScreen from "../../utils/LoaderScreen";

const LoginPage = () => {
  const { token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    verifiedAuthAPI(token!);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      <div className="w-full relative h-screen">
        <img src={abstractImg} className="w-full h-full" />
        <main className="w-full h-full flex justify-center items-center absolute top-0">
          <section
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
            }}
            className="w-[90%] flex lg:justify-between justify-center sm:justify-center h-[90%] bg-white"
          >
            <div className="w-[100%] h-full sm:w-[80%] md:w-[60%] text-[13px] sm:text-[13px] lg:text-[15px] items-center flex flex-col justify-center ">
              <div
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                }}
                className="w-[90%] rounded-md p-5 min-h-[75%] bg-white
              "
              >
                <h2 className="font-PoppinsBold text-[30px]">Login</h2>
                <p className="text-gray-500">
                  Don't have an account?{" "}
                  <Link
                    to={`/register`}
                    className="text-yellow-600 hover:text-yellow-800 transition-all"
                  >
                    Register
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
                <div
                  onClick={() => {
                    setLoading(true);
                    signInAuthAPI({ email, password }).then((res: any) => {
                      if (res) {
                        Swal.fire({
                          icon: "success",
                          title: "Welcome",
                          text: "Purchase products of your choice",
                          timer: 3500,
                          timerProgressBar: true,
                        }).then(() => {
                          const decode: any = jwtDecode(res);
                          console.log(decode);
                          dispatch(onAuthState(decode.id));
                          navigate("/");
                          setLoading(false);
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
                    });
                  }}
                  className="w-full cursor-pointer flex justify-center items-center rounded-md h-[45px] bg-yellow-600 hover:bg-yellow-700 text-white"
                >
                  LOGIN
                </div>
                <div className="flex items-center my-5 justify-center">
                  <hr className="w-[35%] border-[1px] border-slate-500" />
                  <span className="mx-5 text-slate-500">or login with</span>
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
            <img
              src={illus_img}
              className="w-[60%] hidden sm:hidden lg:flex object-cover  "
            />
          </section>
        </main>
      </div>
    </>
  );
};

export default LoginPage;
