import { Typography as AntdTypography } from "antd";

// These are the correct type imports:
type TextProps = React.ComponentProps<typeof AntdTypography.Text>;
type TitleProps = React.ComponentProps<typeof AntdTypography.Title>;
type ParagraphProps = React.ComponentProps<typeof AntdTypography.Paragraph>;

function Typography(props: ParagraphProps) {
  return <AntdTypography {...props} />
}

function Title(props: TitleProps) {
  return <AntdTypography.Title {...props} />
}

function Text(props: TextProps) {
  return <AntdTypography.Text {...props} />
}

Typography.Title = Title;
Typography.Text = Text;

export default Typography;