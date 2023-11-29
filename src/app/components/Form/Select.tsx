import { GameSettings } from "@/context/AppContext";
import React from "react";
import { Path, UseFormRegister } from "react-hook-form";

type Props = {
  name: Path<GameSettings>;
  register: UseFormRegister<GameSettings>;
  registerOptions?: any;
  defaultValue?: number;
};

const Select = ({ name, register, registerOptions, defaultValue }: Props) => {
  return (
    <select
      id={name}
      {...register(name, registerOptions && registerOptions[name])}
      className="w-max py-1 px-2 outline-secondMain border border-1 border-secondLight rounded-lg relative"
    >
      {Array.from(Array(9)).map((_, index) => {
        return (
          <option
            key={index + 2}
            value={index + 2}
            selected={index + 2 === defaultValue}
          >
            {index + 2}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
