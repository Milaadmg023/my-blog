import React from "react";
import { Link } from "react-router-dom";
import SignUp from "../Components/SignUp";

function Register() {
  const data = [
    {
      name : "ثبت نام",
      question : "حساب کاربری دارید؟",
      link: "وارد شوید",
    }
  ]
  return (
    <>
    <SignUp props={data}/>
    </>
  );
}

export default Register;
