import { Input as AntdInput } from "antd"
import type { InputProps, TextAreaProps } from "antd/es/input";

function Input({ ...rest } : InputProps) {
  return <AntdInput {...rest} />
}

function TextArea({ ...rest } : TextAreaProps) {
  return <AntdInput.TextArea {...rest} />
}

Input.TextArea = TextArea;

export default Input;