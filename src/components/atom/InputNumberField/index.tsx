import TextField, { TextFieldProps } from "../TextField";
import { createNumericKeyDownHandler } from "./helper";

export type InputNumberFieldProps = {
  children?: React.ReactNode;
} & TextFieldProps;

const WHITE_LIST_KEY_INPUT_NUMBER = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "."];

export const InputNumberField = ({ children, inputProps = {}, ...rest }: InputNumberFieldProps) => {
  const handleKeyDown = createNumericKeyDownHandler(WHITE_LIST_KEY_INPUT_NUMBER);

  return (
    <TextField
      inputProps={{
        onKeyDown: handleKeyDown,
        ...inputProps,
      }}
      {...rest}
    >
      {children}
    </TextField>
  );
};

export default InputNumberField;
