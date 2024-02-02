import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

import Input from "../components/Input";
import Select from "../components/Select";
import { STATES } from "../utils/data";

const Register = (props) => {
  const {
    setValue,
    control,
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const [state, setState] = useState<any>({});

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
          Get Started
        </p>
        <p>Easily get Sourcing, Evaluation, and Connection for your startup </p>
      </main>
      <form
        className="w-full"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          labelText="What is your startup's name?"
          placeholder="e.g Vidare.AI"
          addValue={handleChange}
          value={state.name}
          register={register}
          id="name"
          name="name"
          isInvalid={!!errors.name}
          errorMessage="Startup Name is required"
        />

        <Input
          labelText="What is your startup's website?"
          placeholder="e.g https://vidare.ai"
          addValue={(e) => handleChange(e)}
          register={register}
          value={state.website}
          id="website"
          name="website"
          isInvalid={!!errors.website}
          errorMessage="Startup Website is required"
        />
        <Controller
          name="select"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange } }) => (
            <Select
              labelText="Where in Africa is your company legally registered?"
              options={STATES}
              value={getValues().select || []}
              onChange={onChange}
              isInvalid={!!errors.select}
              errorMessage="Please select your country"
            />
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

export default Register;
