import React from "react";
import { TextLarge, TextRegular, TextSmall } from "../Typography";

interface Props {
  children: React.ReactNode;
  label: string;
  name: string;
  error?: string;
  horizontal?: boolean;
  size?: "lg" | "sm";
}

const LabelWrapper = ({
  children,
  label,
  name,
  error,
  horizontal = false,
  size = "lg",
}: Props) => {
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
          {size === "lg" ? (
            <TextLarge>{label}</TextLarge>
          ) : (
            <TextRegular>{label}</TextRegular>
          )}
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
