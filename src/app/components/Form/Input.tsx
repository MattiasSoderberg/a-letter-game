import React from "react";

interface Props {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ name, value, onChange }: Props) => {
  return (
    <input name={name} value={value} onChange={onChange} className="p-2" />
  );
};

export default Input;
