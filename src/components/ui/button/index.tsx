import { Button as AntdButton, type ButtonProps } from "antd"

export default function Button({ ...rest } : ButtonProps) {
  return <AntdButton {...rest} />
}
