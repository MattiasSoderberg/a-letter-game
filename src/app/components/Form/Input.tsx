import { GameSettings } from "@/context/AppContext";
import React from "react";
import { Path, UseFormRegister } from "react-hook-form";

// interface Props {
//   name: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

type Props = {
  name: Path<GameSettings>;
  register: UseFormRegister<GameSettings>;
  registerOptions?: any;
  maxLength?: number;
  widthFull?: boolean;
};

const Input = ({
  name,
  register,
  registerOptions,
  maxLength = 50,
  widthFull = true,
}: Props) => {
  return (
    <input
      type="text"
      id={name}
      maxLength={maxLength}
      {...register(name, registerOptions && registerOptions[name])}
      className={`${
        widthFull ? "w-full h-fit p-2" : "w-[50px] h-fit p-2"
      } rounded-lg outline-2 outline-secondMain border border-secondLight`}
    />
  );
};

export default Input;
