import { CheckFat } from "@phosphor-icons/react";

const Details = () => {
  return (
    <main className="bg-white px-6 rounded-2xl py-8 shadow-2xl">
      <main className="mb-4 md:mb-8 text-center">
        <p className="text-[#00148E] text-[24px] md:text-[32px] font-bold">
          Welcome to Freedom
        </p>
      </main>
      <main className="mx-auto text-center flex  justify-center w-full">
        <CheckFat size={98} color="#00148e" weight="duotone" />
      </main>
      <p>
        Now you can connect with visionary founders and be part of the startup
        revolution.
      </p>
    </main>
  );
};

export default Details;
