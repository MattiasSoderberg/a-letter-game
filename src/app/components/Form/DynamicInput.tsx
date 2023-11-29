"use client";
import React, { useEffect } from "react";
import InputWIndex from "./InputWIndex";
import ButtonNaked from "../Button/variants/ButtonNaked";
import { MdOutlineRemove } from "react-icons/md";
import { Control, Path, UseFormRegister, useFieldArray } from "react-hook-form";
import { GameSettings } from "@/context/AppContext";
import Input from "./Input";

interface IProps {
  name: string;
  buttonText: string;
  inputArray: string[];
  onChange: (index: number, e: React.FormEvent<HTMLInputElement>) => void;
  onAddClick: () => void;
  onRemoveClick: (index: number) => void;
}

type Props = {
  name: "categories";
  buttonText: string;
  register: UseFormRegister<GameSettings>;
  registerOptions: any;
  control: Control<GameSettings>;
};

const DynamicInput = ({
  name,
  buttonText,
  register,
  registerOptions,
  control,
}: Props) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: name,
    rules: registerOptions.rules,
  });

  useEffect(() => {
    if (fields.length <= 0) {
      append({ value: "" }, { focusIndex: 0 });
    }
  }, [fields.length]);

  return (
    <div className="w-full flex flex-col items-start gap-4">
      <ul className="w-full flex flex-col items-start gap-4">
        {fields.map((field, index) => (
          <li className="w-full flex gap-2" key={field.id}>
            <Input
              name={`categories.${index}.value` as const}
              register={register}
              registerOptions={registerOptions.inputOptions}
            />
            <ButtonNaked
              borders
              borderRadius="rounded-lg"
              background="lightMain"
              paddings="py-1 px-2"
              onClick={() => remove(index)}
            >
              <MdOutlineRemove />
            </ButtonNaked>
          </li>
        ))}
      </ul>
      <ButtonNaked
        size="xs"
        borders
        borderRadius="rounded-lg"
        background="lightMain"
        onClick={() => append({ value: "" }, { focusIndex: fields.length })}
      >
        {buttonText}
      </ButtonNaked>
    </div>
  );
};

export default DynamicInput;
