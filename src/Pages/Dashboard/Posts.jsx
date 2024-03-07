import React from "react";

function Posts() {
  const [alertState, setAlertState] = React.useState(true);
  const [deletedPostId, setDeletedPostId] = React.useState([]);
  const alertHandler = (e) => {
    setAlertState(!alertState);
    setDeletedPostId(e.target.id);
    console.log(e.target.id);
  };
  const deleteHandler = (id) => {
    console.log(id);
  };
  const writeHandler = ()=>{
    const postwiter = document.getElementById('post-writer')
    postwiter.classList.toggle('hidden')
  }

  return (
    <>
      <div className="grid min-h-screen w-full ">
        <div className="flex flex-col">
          <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b px-6">
            <a className="lg:hidden" href="#" rel="ugc">
              <svg
                className="h-6 w-6"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
                <path d="M12 3v6" />
              </svg>
              <span className="sr-only">Home</span>
            </a>
            <div className="flex-1">
              <h1 className="font-semibold text-lg">Posts</h1>
            </div>
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
              New post
            </button>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <div className="border shadow-sm rounded-lg">
              <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                  <thead className="[&_tr]:border-b">
                    <tr className="border-b bg-gray-100 transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 w-[100px]">
                        آیدی
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 min-w-[150px]">
                        نویسنده
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 hidden md:table-cell">
                        دسته
                      </th>

                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 hidden md:table-cell">
                        تاریخ
                      </th>
                      <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 text-right">
                        بازدید
                      </th>
                      <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 text-right">
                        لایک
                      </th>
                      <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 text-right">
                        کامنت
                      </th>
                      <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 w-[100px] text-right">
                        ویرایش
                      </th>
                    </tr>
                  </thead>
                  <tbody className="[&_tr:last-child]:border-0">
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
                        #3211
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        Olivia Martin
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 hidden md:table-cell">
                        Lifestyle, Travel
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 hidden md:table-cell">
                        February 20, 2022
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-right">
                        120
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-right">
                        23
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-right">
                        12
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 flex w-[100px] justify-end">
                        <button onClick={writeHandler} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 mx-1">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
                            <polyline points="14 2 14 8 20 8" />
                            <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
                          </svg>
                          <span className="sr-only">Edit</span>
                        </button>
                        <button
                          id="32"
                          onClick={alertHandler}
                          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 mx-1"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M3 6h18" />
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                          </svg>
                          <span className="sr-only">Delete</span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div
        className={`h-screen flex justify-center items-center fixed top-0 left-0 right-0 ${
          alertState && " hidden"
        }`}
      >
        <div className="border rounded-lg shadow relative max-w-sm bg-white">
          <div className="flex justify-end p-2">
            <button
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              type="button"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  fillRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="p-6 pt-0 text-center">
            <svg
              className="w-20 h-20 text-red-600 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            <h3 className="text-xl font-normal text-gray-500 mt-5 mb-6">
              Are you sure you want to delete this user?
            </h3>
            <a
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2"
              onClick={alertHandler}
            >
              Yes, I'm sure
            </a>
            <a
              className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center"
              onClick={alertHandler}
            >
              No, cancel
            </a>
          </div>
        </div>
      </div>
      <div
      id="post-writer"
        className={`h-screen flex justify-center items-center fixed top-0 left-0 right-0`}
      >
        <div className="bg-gray-100 rounded-lg w-[50%] p-2 flex flex-col gap-2" dir="rtl">
          <div>
            <svg
            className="cursor-pointer"
            onClick={writeHandler}
              fill="currentColor"
              height="1em"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 466.16592 34.65502 Q 476.22708 21.240175 463.93015 10.061135 Q 450.5153 0 439.33624 12.296944 L 256 228.0524 L 256 228.0524 L 72.66376 12.296944 L 72.66376 12.296944 Q 61.484715 0 48.06987 10.061135 Q 35.772926 21.240175 45.83406 34.65502 L 232.52402 256 L 232.52402 256 L 45.83406 477.34497 L 45.83406 477.34497 Q 35.772926 490.75983 48.06987 501.93887 Q 61.484715 512 72.66376 499.70306 L 256 283.9476 L 256 283.9476 L 439.33624 499.70306 L 439.33624 499.70306 Q 450.5153 512 463.93015 501.93887 Q 476.22708 490.75983 466.16592 477.34497 L 279.47598 256 L 279.47598 256 L 466.16592 34.65502 L 466.16592 34.65502 Z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <label htmlFor="title">عنوان</label>
            <input
              type="text"
              id="title"
              className="border-2 rounded-lg p-1.5"
            />
          </div>
          <div>
            <label htmlFor="post-img"></label>
            <input accept="image/*" type="file" id="post-img" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="post-text">متن</label>
            <textarea id="post-text" className="p-1.5 rounded-lg h-[20rem]"></textarea>
          </div>
          <div>
            <button>انتشار پست</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Posts;
