import { GameSettings } from "@/gameConfig";
import React from "react";
import { Path, UseFormRegister } from "react-hook-form";
import { MdCheck } from "react-icons/md";

type Props = {
  name: Path<GameSettings>;
  register: UseFormRegister<GameSettings>;
  registerOptions?: any;
};

const Checkbox = ({ name, register, registerOptions }: Props) => {
  return (
    <div className="h-full flex items-center relative">
      <input
        id={name}
        type="checkbox"
        {...register(name, registerOptions && registerOptions[name])}
        className="appearance-none w-5 h-5 border border-secondLight rounded peer relative bg-lightMain transition-all duration-75 checked:bg-secondLight checked:border-secondMain focus:outline-secondMain"
      />
      <div className="w-4 h-4 opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-75 peer-checked:opacity-100">
        <MdCheck />
      </div>
    </div>
  );
};

export default Checkbox;
