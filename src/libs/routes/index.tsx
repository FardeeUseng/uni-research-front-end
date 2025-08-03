import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../../views";
import ResearchAdd from "../../views/research-add";
import UI from "../../views/ui";
import MainLayout from "../../layouts/MainLayout";
import AuthLogin from "../../views/auth-login";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="researchs">
            <Route path="add" element={<ResearchAdd />} />
          </Route>
        </Route>

        <Route path="auth" >
          <Route path="login" element={<AuthLogin />} />
        </Route>
        <Route path="ui" element={<UI />} />
      </Routes>
    </BrowserRouter>
  )
}
