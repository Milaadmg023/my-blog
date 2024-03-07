import React from "react";


function Setting() {
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const username = document.getElementById("username").value;
    const email = document.getElementById("useremail").value;
    const image = document.getElementById("userprofile").files[0];
    const password = document.getElementById("userpass").value;
    console.log(image);
  
    const data = {
      username,
      email,
      image,
      password,
    };
  
    axios.post("/api/users/update", data);
  };
  return (
    <section dir="rtl">
      <div className="flex flex-col gap-2  p-2 my-1 w-[20%]">
        <label htmlFor="username">نام کاربری</label>
        <input
          type="text"
          id="username"
          className="border-2 rounded-lg"
          value={"test"}
        />
      </div>
      <div className="flex flex-col gap-2  p-2 my-1 max-w-[20%]">
        <label htmlFor="userprofile">پروفایل</label>
        <input type="file" accept="image/*" id="userprofile"/>
      </div>
      <div className="flex flex-col gap-2  p-2 my-1 w-[20%]">
        <label htmlFor="useremail">ایمیل</label>
        <input
          type="text"
          id="useremail"
          value={"test@gmail.com"}
          className="border-2 rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-2  p-2 my-1 w-[20%]">
        <label htmlFor="userpass">رمزعبور</label>
        <input type="password" id="userpass" className="border-2 rounded-lg" />
      </div>
      <div>
        <button onClick={handleSubmit} className="bg-blue-500 text-white p-1 m-1 rounded-lg">
          ذخیره تغییرات
        </button>
      </div>
    </section>
  );
}

export default Setting;
