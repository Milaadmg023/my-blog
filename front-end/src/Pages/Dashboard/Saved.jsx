import React from "react";
import { Link } from "react-router-dom";

function Saved() {
  return (
    <section className="grid lg:grid-cols-3 gap-2" dir="rtl">
      <div className="border-2 p-2 rounded-lg">
        <h2 className="font-bold text-lg">item.title</h2>
        <p className="text-gray-600 my-2">item.desc</p>
        <Link className="bg-blue-600 text-white p-1 rounded-lg">
          مشاهده پست
        </Link>
      </div>
    </section>
  );
}

export default Saved;
