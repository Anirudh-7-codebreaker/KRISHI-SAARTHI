import { motion } from "framer-motion";
import { MessageCircleHeartIcon, BugPlay, Sprout, BarChart3 } from "lucide-react";
import { useTranslation } from "react-i18next";

const features = [
  {
    icon: MessageCircleHeartIcon,
    titleKey: "features.aiCropAdvisor.title",
    descriptionKey: "features.aiCropAdvisor.description",
    color: "#2d6a2f",
  },
  {
    icon: BugPlay,
    titleKey: "features.pestDetection.title",
    descriptionKey: "features.pestDetection.description",
    color: "#7ab648",
  },
  {
    icon: Sprout,
    titleKey: "features.soilInsights.title",
    descriptionKey: "features.soilInsights.description",
    color: "#5a8f3c",
  },
  {
    icon: BarChart3,
    titleKey: "features.yieldAnalytics.title",
    descriptionKey: "features.yieldAnalytics.description",
    color: "#2d6a2f",
  },
];

export function Features() {
  const { t } = useTranslation();

  return (
    <section id="features" className="py-14 md:py-20" style={{ background: "var(--section-bg)" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              color: "var(--accent)",
              textTransform: "uppercase",
            }}
          >
            {t("features.whatWeOffer")}
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              color: "var(--foreground)",
              marginTop: "0.6rem",
              lineHeight: 1.2,
            }}
          >
            {t("features.title")}
          </h2>
          <p
            style={{
              color: "var(--muted-foreground)",
              maxWidth: "520px",
              margin: "1rem auto 0",
              lineHeight: 1.7,
            }}
          >
            {t("features.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.titleKey}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl p-6 transition-shadow hover:shadow-lg"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${f.color}18` }}
              >
                <f.icon size={22} color={f.color} />
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  color: "var(--foreground)",
                  marginBottom: "0.5rem",
                }}
              >
                {t(f.titleKey)}
              </h3>
              <p style={{ color: "var(--muted-foreground)", fontSize: "0.9rem", lineHeight: 1.65 }}>
                {t(f.descriptionKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}