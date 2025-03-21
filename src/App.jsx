import { Route, Routes } from "react-router-dom";
import MAinLayout from "./content/MAinLayout";
import Home from "./pages/Home";
import Login from "./protected/Login";
import Register from "./protected/Register";
import About from "./pages/About";
import ProtectedRoute from "./protected/ProtectedRoute";
import Contact from "./pages/Contact";
import Service from "./pages/Service";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<MAinLayout />}>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
