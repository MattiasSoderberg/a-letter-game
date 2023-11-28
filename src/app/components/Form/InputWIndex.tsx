import React from "react";

interface Props {
  name: string;
  value: string;
  index: number;
  onChange: (index: number, value: React.FormEvent<HTMLInputElement>) => void;
}

const InputWIndex = ({ name, value, index, onChange }: Props) => {
  return (
    <input
      value={value}
      name={name}
      id={name}
      onChange={(e) => onChange(index, e)}
      className="w-full p-2 outline-secondLight"
    />
  );
};

export default InputWIndex;
