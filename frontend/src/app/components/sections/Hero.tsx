import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Leaf, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

const HERO_IMG = "https://images.unsplash.com/photo-1774631678816-b2578c2b6cff?w=1800&h=900&fit=crop&auto=format";

const stats = [
  { value: "No.1", labelKey: "hero.stats.aiPowered" },
  { value: "95%", labelKey: "hero.stats.accuracy" },
  { value: "Make 2x", labelKey: "hero.stats.cropYield" },
  { value: "Uttrakhand", labelKey: "hero.stats.agriBooster" },
];

export function Hero() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex flex-col pt-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${HERO_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      />
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(120deg, rgba(26,28,20,0.82) 40%, rgba(45,106,47,0.55) 100%)",
        }}
      />

      <div className="relative z-10 flex-1 flex items-center w-full pb-20 md:pb-0">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-16 py-12 md:py-24 xl:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 xl:gap-20 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 bg-[rgba(122,182,72,0.18)] border border-[rgba(122,182,72,0.4)] text-[#a5d67a] text-xs font-mono tracking-wider">
              <Zap size={12} />
              {t("hero.fieldAssistant")}
            </div>

            <h1 className="font-serif text-[clamp(2.4rem,5vw,3.8rem)] font-bold leading-[1.15] text-white mb-5">
              {t("hero.titlePart1")}
              <br />
              <span className="text-[#a5d67a]">{t("hero.titlePart2")}</span>
            </h1>

            <p className="text-white/80 text-lg leading-relaxed max-w-[480px] mb-8">
              {t("hero.description")}
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => navigate("/chat")}
                className="bg-[var(--accent)] text-white font-semibold px-7 py-3 rounded-[var(--radius)] flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                {t("hero.getStartedButton")} <ChevronRight size={18} />
              </button>
              <button className="border border-white/35 text-white font-medium px-7 py-3 rounded-[var(--radius)] hover:border-white/70 transition-colors">
                {t("hero.watchDemoButton")}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden md:block"
          >
            <div
              className="rounded-2xl overflow-hidden shadow-2xl p-6 max-w-[380px] ml-auto"
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
                <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[var(--accent)]">
                  <Leaf size={16} color="#fff" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t("hero.krishiAi")}</p>
                  <p className="text-white/50 text-[10px] font-mono">{t("hero.online")}</p>
                </div>
              </div>

              <div className="mb-3 flex justify-start">
                <div className="px-3 py-2 rounded-xl max-w-[85%] bg-white/10 text-white text-xs leading-relaxed">
                  {t("hero.userQuery")}
                </div>
              </div>
              <div className="mb-3 flex justify-end">
                <div className="px-3 py-2 rounded-xl max-w-[85%] bg-[var(--accent)] text-white text-xs leading-relaxed">
                  {t("hero.aiResponse")}
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4 px-3 py-2 rounded-xl bg-white/5 border border-white/10">
                <input
                  onClick={() => navigate("/chat")}
                  readOnly
                  placeholder={t("hero.askPlaceholder")}
                  className="bg-transparent border-none outline-none text-white/60 text-xs flex-1"
                />
                <ChevronRight size={16} className="text-[var(--accent)]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div
        className="relative md:absolute bottom-0 left-0 right-0 z-10 w-full bg-[#1a1c14]/85 backdrop-blur-md"
      >
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.labelKey} className="text-center">
              <p className="font-serif text-2xl font-bold text-[#a5d67a]">{s.value}</p>
              <p className="text-white/60 text-[10px] mt-1">{t(s.labelKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}