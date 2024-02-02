import { InputType } from "../utils/types";

const Input = ({
  name,
  placeholder,
  type,
  addValue,
  value,
  id,
  style,
  disabled,
  labelText,
  register,
  isInvalid,
  errorMessage,
}: InputType) => (
  <main className="w-full mb-5">
    <label className="text-md md:text-[18px] text-grey-300 mb-1 mt-2 block text-left capitalize">
      {labelText}
    </label>
    <input
      className=" w-full border border-2 border-gray-300 text-gray-900 rounded-lg px-2 py-3 "
      placeholder={placeholder}
      type={type}
      name={name}
      onChange={addValue}
      id={id}
      value={value}
      {...register(id, { required: true })}
      style={style}
      autoComplete="off"
      multiple
      disabled={disabled}
    />
    <p className=" text-red-400 font-medium text-left">
      {isInvalid && errorMessage}
    </p>
  </main>
);

Input.defaultProps = {
  disabled: false,
  type: "text",
  placeholder: "Enter Value",
  style: {},
  isInvalid: false,
  errorMessage: "This field is compulsory",
};

export default Input;
