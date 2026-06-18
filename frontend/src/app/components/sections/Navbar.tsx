import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Leaf, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const navLinks = [
    { name: t("navbar.about"), href: "#about" },
    { name: t("navbar.features"), href: "#features" },
    { name: t("navbar.howItWorks"), href: "#how-it-works" },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{
          background: "rgba(247, 245, 240, 0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(45, 106, 47, 0.12)",
        }}
      >
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: "var(--primary)" }}
          >
            <Leaf size={16} color="#fff" />
          </div>
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              fontSize: "1.55rem",
              color: "var(--primary)",
              letterSpacing: "0.01em",
            }}
          >
            {t("navbar.brand")}
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[var(--muted-foreground)] text-sm font-medium hover:text-[var(--primary)] transition-colors"
              
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 ml-auto md:ml-0">
          <button
                       className="hidden md:block text-[var(--primary)] text-sm font-medium px-4 py-2 border-[1.5px] border-[var(--primary)] rounded-[var(--radius)] hover:bg-[var(--secondary)] transition-colors"
            
          >
                   {t("navbar.signIn")}
          </button>
          <button
          
            onClick={() => navigate("/chat")}
            className="bg-[var(--primary)] text-white text-sm font-medium px-4 py-2 rounded-[var(--radius)] hover:opacity-90 transition-opacity"
          >
                   {t("navbar.getStarted")}
          </button>
          {/* Language Toggle */}
          <button
            onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'hi' : 'en')}
            className="hidden md:block text-[var(--primary)] text-sm font-medium px-3 py-2 border-[1.5px] border-[var(--primary)] rounded-[var(--radius)] hover:bg-[var(--secondary)] transition-colors"
          >
            {i18n.language === 'en' ? 'हिन्दी' : 'English'}
          </button>
          <button
            className="md:hidden ml-1"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: "var(--foreground)" }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
         

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="fixed top-[61px] left-0 right-0 z-40 flex flex-col gap-4 px-6 py-6"
          style={{ background: "var(--background)", borderBottom: "1px solid var(--border)" }}
        >
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[var(--foreground)] font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <button
            className="w-full py-3 border border-[var(--primary)] text-[var(--primary)] rounded-[var(--radius)] font-medium"
            onClick={() => setMenuOpen(false)}
          >
            {t("navbar.signIn")}
          </button>
          <button
            className="w-full bg-[var(--primary)] text-white font-medium py-3 rounded-[var(--radius)]"
            onClick={() => { navigate("/chat"); setMenuOpen(false); }}
          >
            {t("navbar.getStarted")}
          </button>
          <button
            onClick={() => { i18n.changeLanguage(i18n.language === 'en' ? 'hi' : 'en'); setMenuOpen(false); }}
            className="w-full py-3 border border-[var(--primary)] text-[var(--primary)] rounded-[var(--radius)] font-medium"
          >
            {i18n.language === 'en' ? 'हिन्दी' : 'English'}
                 </button>
        </div>
      )}
     
    </>
  );
}