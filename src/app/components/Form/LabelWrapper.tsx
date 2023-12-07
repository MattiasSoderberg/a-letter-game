import React from "react";
import { TextLarge, TextSmall } from "../Typography";
import { FieldErrors, FieldValues } from "react-hook-form";

interface Props {
  children: React.ReactNode;
  label: string;
  name: string;
  errors?: FieldErrors<FieldValues>;
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
    (errors?.message as unknown as string) ||
    undefined;

  return (
    <div
      className={`w-full flex ${
        horizontal ? "flex-col gap-2" : "justify-between gap-4"
      } relative`}
    >
      <div
        className={`h-full flex ${
          horizontal ? "w-full gap-4" : "w-max flex-col gap-1"
        }`}
      >
        <label htmlFor={name}>
          <TextLarge>{label}</TextLarge>
        </label>
        {error && (
          <div
            className={
              horizontal ? "w-max self-center" : "absolute top-7 left-0"
            }
          >
            <TextSmall color="danger">{error}</TextSmall>
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

export default LabelWrapper;
