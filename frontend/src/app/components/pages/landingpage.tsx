import { I18nextProvider } from 'react-i18next';
import { Navbar } from "../sections/Navbar";
import { Hero } from "../sections/Hero";
import { Features } from "../sections/Features";
import { About } from "../sections/About";
import { HowItWorks } from "../sections/HowItWorks";
import { CTA } from "../sections/CTA";
import { Footer } from "../sections/Footer";
import i18n from '../../i18n'; // Import your i18n configuration


export default function LandingPage() {
  return (
    <I18nextProvider i18n={i18n}>
      <div
        className="min-h-screen overflow-x-hidden"
        style={{ fontFamily: "'Inter', sans-serif", background: "var(--background)" }}
      >
        <Navbar />
        <Hero />
        <Features />
        <About />
        <HowItWorks />
        <CTA />
        <Footer />
      </div>
    </I18nextProvider>
  );
}