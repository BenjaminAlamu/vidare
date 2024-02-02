import { Outlet } from "react-router-dom";

const PageWrapper = () => {
  return (
    <div className="w-full flex flex-wrap min-h-screen">
      <div className="text-white lg:min-h-screen lg:w-2/5 bg-[#00148E] hidden lg:flex text-left my-auto items-center">
        <main className="px-8">
          <p className="lg:leading-[56px] lg:text-[56px] font-bold my-6">
          Take control of your financial future
          </p>

          <p className=" text-left text-[24px] leading-[48px] lg:leading-[36px] lg:text-[24px] text-white my-8">
            Gain real-time
            insights, receive expert analysis,
            and make informed decisions with confidence.
          </p>

          <p className="mt-8">
            Get access to a community of
            investors who are changing the world by supporting revolutionary
            startups.
          </p>
        </main>
      </div>
      <main className="w-full lg:w-3/5 bg-white">
        <main className="max-w-xl mx-auto min-h-screen flex flex-col justify-center">
          <Outlet />
        </main>
      </main>
    </div>
  );
};

export default PageWrapper;
