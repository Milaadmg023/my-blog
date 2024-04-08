import React from "react";
import { Link } from "react-router-dom";
import SignUp from "../Components/SignUp";
import Loading from "./../Components/Loading";

function Register() {
  const data = [
    {
      name: "ثبت نام",
      question: "حساب کاربری دارید؟",
      link: "وارد شوید",
    },
  ];
  /* loading state */
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setLoading(false);
  });
  return <>{loading ? <Loading /> : <SignUp props={data} />}</>;
}

export default Register;
