import { motion } from "framer-motion";
import { Leaf, MessageSquare, Zap, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

const pillars = [
  {
    icon: Leaf,
    color: "#2d6a2f",
    titleKey: "about.rootedInAgriculture.title",
    descriptionKey: "about.rootedInAgriculture.description",
  },
  {
    icon: MessageSquare,
    color: "#7ab648",
    titleKey: "about.farmerFirstDesign.title",
    descriptionKey: "about.farmerFirstDesign.description",
  },
  {
    icon: Zap,
    color: "#5a8f3c",
    titleKey: "about.aiActsFast.title",
    descriptionKey: "about.aiActsFast.description",
  },
  {
    icon: ShieldCheck,
    color: "#2d6a2f",
    titleKey: "about.trustedTransparent.title",
    descriptionKey: "about.trustedTransparent.description",
  },
];

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-14 md:py-20" style={{ background: "var(--section-bg)" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Mission text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "1.75rem",
                letterSpacing: "0.1em",
                color: "var(--accent)",
                textTransform: "uppercase",
              }}
            >
              {t("about.aboutUs")}
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 700,
                color: "var(--foreground)",
                marginTop: "0.6rem",
                marginBottom: "1.25rem",
                lineHeight: 1.2,
              }}
            >
              {t("about.titlePart1")}
              <br />
              <span style={{ color: "var(--primary)" }}>{t("about.titlePart2")}</span>
            </h2>
            <p
              style={{
                color: "var(--muted-foreground)",
                fontSize: "1rem",
                lineHeight: 1.75,
                marginBottom: "1.25rem",
              }}
            >
              {t("about.description")}
            </p>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: "rgba(45,106,47,0.08)",
                border: "1.5px solid rgba(45,106,47,0.2)",
              }}
            >
              <Leaf size={14} color="var(--primary)" />
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.78rem",
                  color: "var(--primary)",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                }}
              >
                {t("about.servingUttarakhand")}
              </span>
            </div>
          </motion.div>

          {/* Right: Pillars */}
          <div className="flex flex-col gap-4">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.titleKey}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 items-start p-4 rounded-2xl"
                style={{ background: "var(--card-bg)", border: "1px solid var(--border)" }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${pillar.color}18` }}
                >
                  <pillar.icon size={20} color={pillar.color} />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "0.95rem", color: "var(--foreground)", marginBottom: "0.25rem" }}>{t(pillar.titleKey)}</h3>
                  <p style={{ color: "var(--muted-foreground)", fontSize: "0.85rem", lineHeight: 1.65 }}>{t(pillar.descriptionKey)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}