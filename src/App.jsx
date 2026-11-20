import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Galary from "./pages/Galary";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/project-details" element={<ProjectDetails />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/gallery" element={<Galary />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
