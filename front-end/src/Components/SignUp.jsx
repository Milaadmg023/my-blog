import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function SignUp(props) {
  const location = useLocation();
  const pathName = location.pathname;
  const navigate = useNavigate();
  const data = props.props[0];
  const [userData, setUserData] = React.useState({});
  const [error, setError] = React.useState(false);
  const getInfo = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(userData.email)) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
      return;
    }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    };
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/account${pathName}`,
        requestOptions
      );
      const data = await response.json();
      if (!data.error) {
        localStorage.setItem("access_token", data.access);
        localStorage.setItem("refresh_token", data.refresh);
        navigate("/user");
        window.location.reload();
      } else {
        setError(true)
        setTimeout(() => {
          setError(false);
        }, 4000);
      }

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        id="alert"
        className={`h-8 flex py-2 items-center justify-center text-white text-center ${
          error ? "block" : "hidden"
        }`}
      >
        <span className="bg-red-500 p-2 rounded-lg">
          اطلاعات وارد شده معتبر نمی باشد.
        </span>
      </div>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">
                {data.name}
              </h1>
              <div className="w-full flex-1 mt-8">
                {/*authentication with google*/}
                <div className="flex flex-col items-center">
                  <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                    <div className="bg-white p-2 rounded-full">
                      <svg className="w-4" viewBox="0 0 533.5 544.3">
                        <path
                          d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                          fill="#4285f4"
                        />
                        <path
                          d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                          fill="#34a853"
                        />
                        <path
                          d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                          fill="#fbbc04"
                        />
                        <path
                          d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                          fill="#ea4335"
                        />
                      </svg>
                    </div>
                    <span className="ml-4">{data.name} با گوگل</span>
                  </button>
                </div>
                <div className="my-12 border-b text-center">
                  <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    یا {data.name} با ایمیل
                  </div>
                </div>
                {/*authentication with email*/}
                <div className="mx-auto max-w-xs">
                  <input
                    onChange={getInfo}
                    name="email"
                    required
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    placeholder="Email"
                    type="email"
                  />
                  <input
                    onChange={getInfo}
                    name="password"
                    typeof="password"
                    required
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    placeholder="Password"
                    type="password"
                  />
                  <button
                    onClick={handleRegister}
                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">{data.neme}</span>
                  </button>
                  <p className="mt-6 text-xs text-gray-600 text-center">
                    {data.question} <br />
                    <Link
                      className="underline-offset-4 underline font-bold"
                      to={"/login"}
                    >
                      {data.link}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 text-center hidden lg:flex">
            <div
              className={`m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat bg-[url('https://img.freepik.com/free-vector/corporate-meeting-employees-cartoon-characters-discussing-business-strategy-planning-further-actions-brainstorming-formal-communication-seminar-concept-illustration_335657-2035.jpg?t=st=1709197242~exp=1709200842~hmac=59af599fb4372fa6efb2449dc06274c007860ca6c005c548c0db27a9d648b0e7&w=740')]`}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
