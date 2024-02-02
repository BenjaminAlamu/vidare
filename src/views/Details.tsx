import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

import DatePicker from "react-date-picker";
import Select from "../components/Select";
import { INDUSTRIES, TECHNOLOGIES } from "../utils/data";

import { CalendarBlank } from "@phosphor-icons/react";
import { SelectOption } from "../utils/types";

const Details = () => {
  const {
    setValue,
    control,
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const [state, setState] = useState<any>({});
  //   const [value1, setValue1] = useState<SelectOption[]>([]);
  //   const [value2, setValue2] = useState<SelectOption | undefined>();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log({ data, errors });
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    setValue(name, value);
  };

  return (
    <main className="bg-white px-6 rounded-2xl py-8 shadow-2xl">
      <main className="mb-4 md:mb-8 text-center">
        <p className="text-[#00148E] text-[24px] md:text-[32px] font-bold">
          One final step
        </p>
        <p>Easily get Sourcing, Evaluation, and Connection for your startup </p>
      </main>
      <form
        className="w-full"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="industry"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <Select
              labelText="Select a suitable industry"
              options={INDUSTRIES}
              value={getValues().industry || []}
              onChange={onChange}
              isInvalid={!!errors.industry}
              errorMessage="Please select your industry"
            />
          )}
        />

        <Controller
          name="tech"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <Select
              multiple
              labelText="Select a suitable tech (as many as you use)"
              options={TECHNOLOGIES}
              value={getValues().tech || []}
              onChange={onChange}
              isInvalid={!!errors.tech}
              errorMessage="Please select your tech"
            />
          )}
        />

        <Controller
          name="year"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <main>
              <label className="text-[16px] text-grey-300 mb-1 block text-left capitalize">
                When was your company founded?
              </label>
              <DatePicker
                onChange={onChange}
                calendarIcon={<CalendarBlank size={24} />}
                value={getValues().year}
                clearIcon={null}
                maxDate={new Date()}
                className={"w-full p-2 !rounded-lg border border-gray-300"}
              />
              <p className=" text-red-400 font-medium  text-left">
                {errors.year && "Please enter start date"}
              </p>
            </main>
          )}
        />

        <main className="w-full mt-8">
          <button className="w-full bg-[#00148E] font-semibold text-white px-[27px] py-[12px] rounded-lg">
            Continue
            {/* {loading ? "Loading..." : "Continue"} */}
          </button>
        </main>
      </form>
    </main>
  );
};

export default Details;
