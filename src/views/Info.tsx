import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller, SubmitHandler, FieldValues } from "react-hook-form";

import Input from "../components/Input";
import Select from "../components/Select";
import { STATES } from "../utils/data";
import { InfoType } from "../utils/types";

const Register = () => {
  const {
    setValue,
    control,
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const [state, setState] = useState<InfoType>({name: "", website: "",location: ""});
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const onSubmit = () => {
      setLoading(true)
      setTimeout(()=> {
          navigate("/details")
      }, 3000)
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          disabled={loading}
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
          disabled={loading}
          id="website"
          name="website"
          isInvalid={!!errors.website}
          errorMessage="Startup Website is required"
        />
        <Controller
          name="location"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange } }) => (
            <Select
              labelText="Where in Africa is your company legally registered?"
              options={STATES}
              value={getValues().location || []}
              onChange={onChange}
              isInvalid={!!errors.location}
              errorMessage="Please select your country"
            />
          )}
        />

        <main className="w-full mt-8">
          <button className="w-full bg-[#00148E] font-semibold text-white px-[27px] py-[12px] rounded-lg">
            {loading ? "Loading..." : "Proceed"}
          </button>
        </main>
      </form>
    </main>
  );
};

export default Register;
