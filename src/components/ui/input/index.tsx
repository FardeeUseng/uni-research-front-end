import { Input as AntdInput } from "antd"
import type { InputProps, TextAreaProps, PasswordProps } from "antd/es/input";

function Input({ ...rest } : InputProps) {
  return <AntdInput {...rest} />
}

function TextArea({ ...rest } : TextAreaProps) {
  return <AntdInput.TextArea {...rest} />
}

function Password({ ...rest } : PasswordProps) {
  return <AntdInput.Password {...rest} />
}

Input.TextArea = TextArea;
Input.Password = Password;

export default Input;