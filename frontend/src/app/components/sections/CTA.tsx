import { useNavigate } from "react-router-dom";
import { ShieldCheck, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export function CTA() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: "var(--primary)" }}>
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #a5d67a 0%, transparent 60%)" }}
      />
      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
        <ShieldCheck size={40} color="#a5d67a" className="mx-auto mb-6" />
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.2,
            marginBottom: "1.2rem",
          }}
        >
          {t("cta.titlePart1")}
          <br />Your Farm's Future?
          {t("cta.titlePart2")}
        </h2>
        <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "2.5rem" }}>
          {t("cta.description")}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            style={{
              background: "var(--accent)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "1rem",
              padding: "0.85rem 2rem",
              borderRadius: "var(--radius)",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
            onClick={() => navigate("/chat")}
            className="hover:opacity-90 transition-opacity"
          >
            {t("cta.getStartedButton")} <ChevronRight size={18} />
          </button>
          <button
            style={{
              background: "transparent",
              color: "#fff",
              fontWeight: 500,
              fontSize: "1rem",
              padding: "0.85rem 2rem",
              borderRadius: "var(--radius)",
              border: "1.5px solid rgba(255,255,255,0.35)",
            }}
            className="hover:border-white/70 transition-colors"
          >
            {t("cta.requestDemoButton")}
          </button>
        </div>
      </div>
    </section>
  );
}