import Sidebar from "./Components/Sidebar.jsx";
import Dashboard from "./Components/Dashboard.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route element={<Dashboard />} path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
