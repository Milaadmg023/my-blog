import React from "react";
import { Link } from "react-router-dom";
import SignUp from "../Components/SignUp";
import Loading from "./../Components/Loading";

function Login() {
  const data = [
    {
      name: "ورود",
      question: "هنوز عضو نشده اید؟",
      link: "ثبت نام کنید",
    },
  ];
  /* loading state */
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setLoading(false);
  });
  return <>{loading ? <Loading /> : <SignUp props={data} />}</>;
}

export default Login;
