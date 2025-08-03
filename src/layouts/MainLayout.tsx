import { Layout } from "antd";
import { Outlet } from "react-router"
import Header from "../components/header";
import Footer from "../components/footer";

const { Content } = Layout;

export default function MainLayout() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />
      <Content style={{ margin: "20px 50px",  }}>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
}
