import { ErrorMessage } from "./styles";

import { Input, InputProps } from "../Input";
import { Control, Controller, FieldError } from "react-hook-form";

type ControlledInputProps = InputProps & {
  control: Control<any>;
  name: string;
  error?: FieldError;
};

export function ControlledInput({
  control,
  name,
  error,
  ...rest
}: ControlledInputProps) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            value={value}
            error={error}
            onChangeText={onChange}
            {...rest}
          />
        )}
      />

      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </>
  );
}
