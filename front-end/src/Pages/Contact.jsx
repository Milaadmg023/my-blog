import React from "react";
import Loading from "./../Components/Loading";

function Contact() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(false);
  });
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div dir="rtl">
          <div className="container mx-auto py-12">
            <div className="max-w-lg mx-auto px-4">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                چگونه میتوانیم به شما کمک کنیم؟
              </h2>
              <form className="bg-white rounded-lg  px-6 py-8 shadow-md">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="name"
                  >
                    نام
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="email"
                  >
                    ایمیل
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="message"
                  >
                    پیام
                  </label>
                  <textarea
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    rows="6"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    ارسال
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;
