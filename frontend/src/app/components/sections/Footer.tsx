import { Leaf } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="py-10 px-6 md:px-12" style={{ background: "#1a1c14", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "var(--accent)" }}>
            <Leaf size={14} color="#fff" />
          </div>
          <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, color: "#fff", fontSize: "1rem" }}>
            Krishi Saarthi
          </span>
        </div>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.82rem" }}>
          {t("footer.copyright")}
        </p>
        <div className="flex gap-6">
          {[{ key: "privacy", text: t("footer.privacy") }, { key: "terms", text: t("footer.terms") }, { key: "contact", text: t("footer.contact") }].map((link) => (
            <a key={link.key} href="#" style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.82rem" }} className="hover:text-white transition-colors">
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}