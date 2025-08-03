import { Form, type FormProps } from "antd";
import { Button, Input, Typography } from "../../components/ui";
import { Link, useNavigate } from "react-router";
import { ArrowLeftOutlined } from "@ant-design/icons";

export default function AuthLogin() {
  const navigate = useNavigate();

  const onFinish: FormProps<any>["onFinish"] = () => {
    navigate("/");
  };

  return (
    <div className="flex gap-5 p-5 h-screen">
      <div className="flex flex-col justify-between w-2/5">
        <div className="flex justify-between items-center">
          <div className="bg-blue-950 h-10 px-2">
            <Typography.Title level={2} style={{ color: "#fff" }}>
              UniResearch
            </Typography.Title>
          </div>
          <Link to="/">
            <Button type="text" icon={<ArrowLeftOutlined />}>
              Go back
            </Button>
          </Link>
        </div>

        <div className="flex justify-center">
          <Form
            name="login"
            className="w-96"
            onFinish={onFinish}
            autoComplete="off"
          >
            <div className="mb-6">
              <Typography.Title>Sign In</Typography.Title>
              <Typography>
                Enter your email to receive a one-time passcode
              </Typography>
            </div>
            <Form.Item
              name="email"
              // rules={[
              //   {
              //     required: true,
              //     message: "Please input your Email",
              //   },
              // ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              // rules={[
              //   {
              //     required: true,
              //     message: "Please input your Password",
              //   },
              // ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full">
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>

        <Typography className="text-center">
          Need an account? <Link to="/">Sign up here</Link>
        </Typography>
      </div>
      <div className="w-3/5 bg-[url(.../../assets/background.jpg)] bg-cover bg-center rounded-xl shadow-lg"></div>
    </div>
  );
}
