import { Typography as AntdTypography } from "antd";

// These are the correct type imports:
type TextProps = React.ComponentProps<typeof AntdTypography.Text>;
type TitleProps = React.ComponentProps<typeof AntdTypography.Title>;
type ParagraphProps = React.ComponentProps<typeof AntdTypography.Paragraph>;

function Typography(props: ParagraphProps) {
  return (
    <AntdTypography
      style={{
        margin: 0,
        padding: 0,
        lineHeight: "normal", // ช่วยให้ alignItems ทำงานดีขึ้น
      }}
      {...props}
    />
  );
}

function Title(props: TitleProps) {
  return (
    <AntdTypography.Title
      style={{
        margin: 0,
        padding: 0,
        lineHeight: "normal", // ช่วยให้ alignItems ทำงานดีขึ้น
      }}
      {...props}
    />
  );
}

function Text(props: TextProps) {
  return (
    <AntdTypography.Text
      style={{
        margin: 0,
        padding: 0,
        lineHeight: "normal", // ช่วยให้ alignItems ทำงานดีขึ้น
      }}
      {...props}
    />
  );
}

Typography.Title = Title;
Typography.Text = Text;

export default Typography;
