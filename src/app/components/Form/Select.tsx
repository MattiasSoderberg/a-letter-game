import { GameSettings } from "@/gameConfig";
import React from "react";
import { Path, UseFormRegister } from "react-hook-form";

type Props = {
  options: string[];
  name: Path<GameSettings>;
  register: UseFormRegister<GameSettings>;
  registerOptions?: any;
};

const Select = ({ options, name, register, registerOptions }: Props) => {
  return (
    <select
      id={name}
      {...register(name, registerOptions && registerOptions[name])}
      className="w-max py-1 px-2 outline-secondMain border border-1 border-secondLight rounded-lg relative"
    >
      {options.map((option) => (
        <option key={`option-${option}`} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
