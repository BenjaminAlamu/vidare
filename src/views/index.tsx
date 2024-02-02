import { Outlet } from "react-router-dom";

const PageWrapper = () => {
  return (
    <div className="w-full flex flex-wrap min-h-screen">
      <div className="text-white lg:min-h-screen lg:w-2/5 bg-[#00148E] hidden lg:flex text-left my-auto items-center">
        <main className="px-8">
          <p className="lg:leading-[16px] lg:text-[56px] font-bold my-6">
            Fuel innovation
          </p>
          <p className="md:leading-[48px] md:text-[56px] font-bold my-8">
            Your future awaits
          </p>

          <p className=" text-left text-[24px] leading-[48px] lg:leading-[36px] lg:text-[24px] text-white">
            Take control of your financial future. Log in to gain real-time
            insights into your investment performance, receive expert analysis,
            and make informed decisions with confidence.
          </p>

          <p className="mt-8">
            Are you ready to make a difference? Get access to a community of
            investors who are changing the world by supporting revolutionary
            startups. Be a part of something bigger than yourself.
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
