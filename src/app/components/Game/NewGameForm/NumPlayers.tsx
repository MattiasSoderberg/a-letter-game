import React from "react";
import { H2 } from "../../Typography";

interface Props {
  onSubmit: (numPlayers: number) => void;
}

const NumPlayers = ({ onSubmit }: Props) => {
  const onOptionClick = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSubmit(parseInt(e.target.value));
  };

  return (
    <div>
      <form>
        <label>
          <H2>Hur många spelare?</H2>
        </label>
        <select
          value={0}
          onChange={onOptionClick}
          className="w-max p-1  outline-firstDark border border-1 border-firstLight rounded relative"
        >
          {Array.from(Array(10)).map((_, index) => {
            return (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            );
          })}
        </select>
      </form>
    </div>
  );
};

export default NumPlayers;
