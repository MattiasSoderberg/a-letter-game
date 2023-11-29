import React from "react";
import { TextLarge, TextSmall } from "../Typography";
import { ErrorOption, FieldErrors, FieldValues } from "react-hook-form";
import { GameSettings } from "@/context/AppContext";

interface Props {
  children: React.ReactNode;
  label: string;
  name: string;
  errors: FieldErrors<FieldValues>;
  horizontal?: boolean;
}

const LabelWrapper = ({
  children,
  label,
  name,
  errors,
  horizontal = false,
}: Props) => {
  const error =
    (errors?.[name]?.message as string) ||
    (errors?.[name]?.root?.message as string) ||
    undefined;
  return (
    <div
      className={`w-full flex ${
        horizontal ? "flex-col gap-2" : "justify-between"
      }`}
    >
      <div
        className={`w-full h-full flex flex-col gap-1 relative ${
          horizontal && "mb-5"
        }`}
      >
        <label htmlFor={name} className="w-full flex items-center">
          <TextLarge>{label}</TextLarge>
        </label>
        {errors?.[name] && (
          <div className="absolute top-7 left-0">
            <TextSmall color="danger">{error}</TextSmall>
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

export default LabelWrapper;
