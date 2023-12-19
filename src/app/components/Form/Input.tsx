import React from "react";
import { PlayersFormValues } from "../Game/NewGameForm/PlayersForm";
import {
  Path,
  UseFormRegister,
  FieldValues,
  Control,
  Controller,
  RegisterOptions,
} from "react-hook-form";
import { GameSettings } from "@/gameConfig";

type Props<T extends FieldValues> = {
  name: Extract<Path<T>, string>;
  register: UseFormRegister<T>;
  control?: Control<T>;
  rules?: RegisterOptions;
  maxLength?: number;
  widthFull?: boolean;
  autoFocus?: boolean;
  size?: "lg" | "sm";
  type?: "text" | "number";
};

const Input = <T extends Partial<GameSettings> | PlayersFormValues>({
  name,
  register,
  control,
  rules,
  maxLength = 50,
  widthFull = true,
  autoFocus = false,
  size = "lg",
  type = "text",
}: Props<T>) => {
  const isFieldArray = control !== undefined;
  const classes = `${
    widthFull ? "w-full h-fit py-1 px-2" : "w-[50px] h-fit py-1 px-2"
  } rounded-lg outline-2 outline-secondMain border border-secondLight ${
    size === "sm" && "w-[40px] py-[2px] px-[6px] outline-1"
  }`;

  return (
    <>
      {isFieldArray ? (
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field }) => (
            <>
              <input
                type={type}
                id={name}
                maxLength={maxLength}
                autoFocus={autoFocus}
                {...field}
                value={field.value ? field.value.toString() : ""}
                className={`${
                  widthFull
                    ? "w-full h-fit py-1 px-2"
                    : "w-[50px] h-fit py-1 px-2"
                } rounded-lg outline-2 outline-secondMain border border-secondLight`}
              />
            </>
          )}
        />
      ) : (
        <>
          <input
            type={type}
            id={name}
            maxLength={maxLength}
            autoFocus={autoFocus}
            {...register(name, rules)}
            className={classes}
          />
        </>
      )}
    </>
  );
};

export default Input;
