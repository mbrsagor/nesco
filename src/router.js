import { BrowserRouter, Routes, Route } from "react-router-dom";

import Blank from "./pages/blank";
import Dashboard from "./pages/dashboard";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="blank" element={<Blank />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
