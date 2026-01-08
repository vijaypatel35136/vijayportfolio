import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard";
import Projects from "./pages/admin/Projects";
import AddProject from "./pages/admin/AddProject";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/projects" element={<Projects />} />
        <Route path="/admin/projects/add" element={<AddProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
