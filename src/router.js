import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Blank from "./pages/blank";
import Dashboard from "./pages/dashboard";
import Login from "./pages/auth/Login";
import Registration from "./pages/auth/Registration";
import PrivateOutlet from './pages/PrivateOutlet'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="blank" element={<Blank />} />

        <Route path="/*" element={<PrivateOutlet />}>
          <Route path="dashbord" element={<Dashboard />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default Router;
