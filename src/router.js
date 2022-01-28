import { BrowserRouter, Routes, Route } from "react-router-dom";

import Blank from "./pages/blank";
import Dashboard from "./pages/dashboard";
import Login from "./pages/auth/login";
import Registration from "./pages/auth/registration";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="blank" element={<Blank />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
