import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./components/pages/landingpage";
import ChatbotPage from "./components/pages/chatbot";
import { ThemeProvider } from "./context/ThemeContext";
import Login from "./components/sections/SignIn";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/chat" element={<ChatbotPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}