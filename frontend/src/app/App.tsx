import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./components/pages/landingpage";
import ChatbotPage from "./components/pages/chatbot";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chat" element={<ChatbotPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}