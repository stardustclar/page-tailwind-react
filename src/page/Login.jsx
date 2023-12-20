// import NavigationBar from "../comp/NavigationBar"
import Lottie from "lottie-react";
import animationData from "../../public/images/login2.json";

function Login() {
  return (
    <>
      <div className="bg-gradient-to-r from-sky-500 to-indigo-500  xs:flex sm:flex px-4 min-h-screen font-poppins">
        {/* <NavigationBar /> */}
          {/* LEFT BOX */}
        <div className="flex w-full justify-center items-center">
            <div>
              <Lottie
                animationData={animationData}
                height={50}
                width={50}
              />
            </div>
        </div>

        {/* RIGHT BOX */}
        <div className="flex w-full justify-center items-center">
          <form className="bg-white shadow-md shadow-black rounded-xl p-14 m-6 md:w-1/2 ">
            <div className="flex flex-col py-2">
              <label>Username or Email :</label>
              <input
                className="rounded-xl p-2 w-full"
                type="text"
                placeholder="Enter Your Username or Email"
              />
            </div>
            <div className="flex flex-col py-2">
              <label>Password :</label>
              <input
                className="rounded-xl p-2 w-full"
                type="password"
                placeholder="Enter Password"
              />
            </div>
            <button className="w-full rounded-full my-5 py-2 bg-blue-500 text-white font-semibold">
              Log In
            </button>
            <div className="flex gap-3 py-2">
              <input type="checkbox" />
              <label htmlFor="formCheck">
                {" "}
                <small>Remember Me</small>{" "}
              </label>
            </div>

            <div className="row">
              <small>
                Don't have an account?
                <a href="/register"> Sign Up</a>
              </small>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
