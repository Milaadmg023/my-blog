import React from "react";
import { Link } from "react-router-dom";
import SignUp from "../Components/SignUp";

function Login() {
  const data = [
    {
      name : "ورود",
      question : "هنوز عضو نشده اید؟",
      link: "ثبت نام کنید",
    }
  ]
  return (
    <>
    <SignUp props={data}/>
    </>
  );
}

export default Login;
