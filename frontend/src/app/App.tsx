import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/pages/landingpage";
import ChatbotPage from "./components/pages/chatbot";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Your landing page will load safely at the main URL */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Once we build the chatbot UI layout together, we will just add:*/
          <Route path="/chat" element={<ChatbotPage/>} /> 
         
        }
      </Routes>
    </Router>
  );
}