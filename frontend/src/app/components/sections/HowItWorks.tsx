import { motion } from "framer-motion";
import { ImageWithFallback } from "../fallback  img/ImageWithFallback";
import { useTranslation } from "react-i18next";

const SOIL_IMG = "https://images.unsplash.com/photo-1492496913980-501348b61469?w=800&h=600&fit=crop&auto=format";
const SEEDLING_IMG = "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?w=800&h=600&fit=crop&auto=format";
const TRACTOR_IMG = "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=800&h=600&fit=crop&auto=format";

const steps = [
  {
    number: "01",
    titleKey: "howItWorks.step1Title",
    bodyKey: "howItWorks.step1Body",
  },
  {
    number: "02",
    titleKey: "howItWorks.step2Title",
    bodyKey: "howItWorks.step2Body",
  },
  {
    number: "03",
    titleKey: "howItWorks.step3Title",
    bodyKey: "howItWorks.step3Body",
  },
];

export function HowItWorks() {
  const { t } = useTranslation();

  return (
    <section id="how-it-works" className="py-14 md:py-20" style={{ background: "var(--section-bg)" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              color: "var(--accent)",
              textTransform: "uppercase",
            }}
          >
            {t("howItWorks.howItWorks")}
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              color: "var(--foreground)",
              marginTop: "0.6rem",
              marginBottom: "2.5rem",
              lineHeight: 1.2,
            }}
          >
            {t("howItWorks.titlePart1")}
            <br />in Three Steps
            {t("howItWorks.titlePart2")}
          </h2>

          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.titleKey}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex gap-5"
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: "var(--primary)", fontFamily: "'DM Mono', monospace", color: "#fff", fontWeight: 700, fontSize: "0.9rem" }}
                >
                  {step.number}
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1.05rem", color: "var(--foreground)", marginBottom: "0.35rem" }}>{t(step.titleKey)}</h3>
                  <p style={{ color: "var(--muted-foreground)", fontSize: "0.9rem", lineHeight: 1.65 }}>{t(step.bodyKey)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image collage */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
            <ImageWithFallback src={SOIL_IMG} alt="Farmer holding healthy soil" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "1" }}>
              <ImageWithFallback src={SEEDLING_IMG} alt="Green seedling in hand" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "1" }}>
              <ImageWithFallback src={TRACTOR_IMG} alt="Tractor working in green field" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}