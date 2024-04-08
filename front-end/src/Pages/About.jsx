import React from "react";
import Loading from "../Components/Loading";

function About() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(false);
  });
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="sm:flex mx-auto items-center max-w-screen-xl">
          <div className="sm:w-1/2 p-10">
            <div className="image object-center text-center">
              <img src="https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg?t=st=1709139422~exp=1709143022~hmac=136532733867c3c2213d5e396f7187122aa3d402e02ef3fab9bcf4ba02d1ab91&w=996" />
            </div>
          </div>
          <div className="sm:w-1/2 p-5" dir="rtl">
            <div className="text">
              <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
                درباره ما
              </span>
              <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
                وبلاگ <span className="text-indigo-600">آقای وب :)</span>
              </h2>
              <p className="text-gray-700">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default About;
