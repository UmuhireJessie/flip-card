import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Card from "./pages/Cards/Card";
import AdminCards from "./pages/AdminCards/AdminCards";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cards" element={<Card />} />
      <Route path="/dashboard" element={<AdminCards />} />
    </Routes>
  )
}

export default App;
