import { useState } from "react";
import { CaretDown, CaretUp } from "@phosphor-icons/react";

import { SelectOption, SelectProps } from "../utils/types";

const Select = ({
  multiple,
  value,
  onChange,
  options,
  labelText,
  isInvalid,
  errorMessage,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectOption = (option: SelectOption) => {
    if (multiple && value) {
      if (value?.includes(option)) {
        onChange(value.filter((o) => o !== option));
      } else {
        onChange([...value, option]);
      }
    } else {
      if (option !== value) onChange(option);
    }
  };

  return (
    <main className="w-full mb-5">
      <label className="text-[16px] text-grey-300 mb-1 block text-left capitalize">
        {labelText}
      </label>
      <div
        className="flex justify-between w-full rounded-lg items-center px-2 py-3 gap-x-2 relative border border-2 border-gray-300 text-gray-900 cursor-pointer"
        onBlur={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={0}
      >
        {value && Object.keys(value).length ? (
          <span>
            {multiple ? (
              value.map((v) => (
                <button
                  className="text-gray-300 bg-gray-900 mx-1"
                  key={v.value}
                  onClick={(e) => {
                    e.stopPropagation();
                    selectOption(v);
                  }}
                >
                  {v.label}
                  <span className="ml-2">&times;</span>
                </button>
              ))
            ) : (
              <span className="">{value?.label}</span>
            )}
          </span>
        ) : (
          <span className="">Select an option</span>
        )}

        {isOpen ? (
          <CaretUp
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            size={16}
          />
        ) : (
          <CaretDown
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            size={16}
          />
        )}

        <ul
          className={`absolute hidden shadow-2xl bg-white top-[50px] left-0 text-left p-4 w-full max-h-[150px] overflow-y-scroll z-50 ${
            isOpen ? "!block" : ""
          }`}
        >
          {options.map((option, index) => (
            <li
              className="hover:bg-gray-100 hover:text-grey-600 p-2"
              onClick={(e) => {
                e.stopPropagation();
                selectOption(option);
                setIsOpen(false);
              }}
              key={option.value}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
      <p className=" text-red-400 font-medium  text-left">
        {isInvalid && errorMessage}
      </p>
    </main>
  );
};

Select.defaultProps = {
  isInvalid: false,
  errorMessage: "This field is compulsory",
};

export default Select;
