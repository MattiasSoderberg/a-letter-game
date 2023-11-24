import React from "react";

interface Props {
  name: string;
  value: string;
  index: number;
  onChange: (index: number, value: React.FormEvent<HTMLInputElement>) => void;
}

const Input = ({ name, value, index, onChange }: Props) => {
  return (
    <input
      value={value}
      name={name}
      onChange={(e) => onChange(index, e)}
      className="p-2 outline-secondLight"
    />
  );
};

export default Input;
