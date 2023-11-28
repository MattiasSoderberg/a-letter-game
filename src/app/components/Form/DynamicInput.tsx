"use client";
import React, { useEffect } from "react";
import InputWIndex from "./InputWIndex";
import ButtonNaked from "../Button/variants/ButtonNaked";
import { MdOutlineRemove } from "react-icons/md";

interface Props {
  name: string;
  buttonText: string;
  inputArray: string[];
  onChange: (index: number, e: React.FormEvent<HTMLInputElement>) => void;
  onAddClick: () => void;
  onRemoveClick: (index: number) => void;
}

const DynamicInput = ({
  name,
  buttonText,
  inputArray,
  onChange,
  onAddClick,
  onRemoveClick,
}: Props) => {
  console.log(inputArray);

  return (
    <div className="w-full flex flex-col items-start gap-4">
      {inputArray.length > 0 &&
        inputArray.map((value, index) => (
          <div className="w-full flex gap-2" key={`${name}${index}`}>
            <InputWIndex
              name={`${name} ${index}`}
              value={value}
              index={index}
              onChange={(index, e) => onChange(index, e)}
            />
            <ButtonNaked
              borders
              borderRadius="rounded-lg"
              background="lightMain"
              paddings="py-1 px-2"
              onClick={() => onRemoveClick(index)}
            >
              <MdOutlineRemove />
            </ButtonNaked>
          </div>
        ))}
      <ButtonNaked
        size="xs"
        borders
        borderRadius="rounded-lg"
        onClick={onAddClick}
      >
        {buttonText}
      </ButtonNaked>
    </div>
  );
};

export default DynamicInput;
