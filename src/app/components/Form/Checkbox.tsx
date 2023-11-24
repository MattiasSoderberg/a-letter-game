import React from "react";

interface Props {
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ name, checked, onChange }: Props) => {
  return (
    <input type="checkbox" name={name} checked={checked} onChange={onChange} />
  );
};

export default Checkbox;
