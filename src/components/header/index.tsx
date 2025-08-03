import { Layout } from "antd";
import { Button, Typography } from "../ui";
import { GlobalOutlined, SunOutlined } from "@ant-design/icons";
import { Link } from "react-router";

export default function Header() {
  return (
    <Layout.Header
      className="shadow-xl"
      style={{
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="bg-blue-950 h-10 px-2">
        <Typography.Title
          level={2}
          style={{ color: "#fff" }}
        >
          UniResearch
        </Typography.Title>
      </div>
      <div className="flex gap-x-2 items-center">
        <Link to="/researchs/add">
          <Button type="primary">เพิ่มสารนิพจน์</Button>
        </Link>
        <Link to="/auth/login">
          <Button type="primary">เข้าสู่ระบบ</Button>
        </Link>
        <Button icon={<SunOutlined />} />
        <Button icon={<GlobalOutlined />} />
      </div>
    </Layout.Header>
  );
}
