import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sprout,
  CloudRain,
  Bug,
  MessageSquare,
  BarChart3,
  MapPin,
  ChevronRight,
  Menu,
  X,
  Star,
  Leaf,
  Zap,
  ShieldCheck,
  MessageCircleHeartIcon,
  BugPlay,
} from "lucide-react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1774631678816-b2578c2b6cff?w=1800&h=900&fit=crop&auto=format";
const SOIL_IMG =
  "https://images.unsplash.com/photo-1492496913980-501348b61469?w=800&h=600&fit=crop&auto=format";
const SEEDLING_IMG =
  "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?w=800&h=600&fit=crop&auto=format";
const TRACTOR_IMG =
  "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=800&h=600&fit=crop&auto=format";

const features = [
  {
    icon: MessageCircleHeartIcon,
    title: "AI  Crop Advisor :",
    description:
      "Ask anything about your crops in plain language. Our LLM-powered assistant gives you expert-level guidance — from sowing to harvest.",
    color: "#2d6a2f",
  },
  {
    icon: BugPlay,
    title: "Pest & Disease Detection",
    description:
      "Describe symptoms or upload an image. KRISHI SAARTHI identifies threats and recommends precise, actionable treatments.",
    color: "#7ab648",
  },
  {
    icon: Sprout,
    title: "Soil Health Insights",
    description:
      "Understand your soil composition, pH levels, and fertility status. Get tailored fertilizer and amendment recommendations.",
    color: "#5a8f3c",
  },
  
  {
    icon: BarChart3,
    title: "Yield Analytics",
    description:
      "Track crop performance season over season. Visualize yield trends and get AI-driven suggestions to maximise output.",
    color: "#2d6a2f",
  },
 
];

const steps = [
  {
    number: "01",
    title: "Describe Your Field",
    body: "Tell the AI about your crop type, location, and current conditions in plain language — no technical forms required.",
  },
  {
    number: "02",
    title: "Get Smart Recommendations",
    body: "Receive precise, context-aware guidance powered by state-of-the-art LLM models trained on agronomic knowledge.",
  },
  {
    number: "03",
    title: "Act & Track",
    body: "Implement suggestions in the field and log outcomes. Your data continuously improves future recommendations.",
  },
];



const stats = [
  { value: "No.1", label: "AI Powered Agri-Assistant" },
  { value: "95%", label: "accuracy" },
  { value: "Make 2x", label: "Crop Yield" },
  { value: "Uttrakhand", label: "Agri-Booster" },
];

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ fontFamily: "'Inter', sans-serif", background: "var(--background)" }}
    >
      {/* Navbar */}
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
              fontSize: "1.15rem",
              color: "var(--primary)",
              letterSpacing: "0.01em",
            }}
          >
            Krishi Saarthi
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {["Features", "How It Works"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              style={{ color: "var(--muted-foreground)", fontSize: "0.9rem", fontWeight: 500 }}
              className="hover:text-[var(--primary)] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 ml-auto md:ml-0">
          <button
            style={{
              color: "var(--primary)",
              fontSize: "0.9rem",
              fontWeight: 500,
              padding: "0.45rem 1.1rem",
              border: "1.5px solid var(--primary)",
              borderRadius: "var(--radius)",
            }}
           
            className="hidden md:block hover:bg-[var(--secondary)] transition-colors"
          >
            Sign In
          </button>
          <button
            style={{
              background: "var(--primary)",
              color: "#fff",
              fontSize: "0.9rem",
              fontWeight: 500,
              padding: "0.45rem 1.2rem",
              borderRadius: "var(--radius)",
            }}
            onClick={() => navigate("/chat")}
            className="hover:opacity-90 transition-opacity"
          >
            Get Started !!
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
          {["Features", "How It Works"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              style={{ color: "var(--foreground)", fontWeight: 500 }}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button
            style={{
              color: "var(--primary)",
              fontSize: "0.95rem",
              fontWeight: 500,
              padding: "0.65rem 1.2rem",
              border: "1.5px solid var(--primary)",
              borderRadius: "var(--radius)",
              textAlign: "center",
            }}
            onClick={() => setMenuOpen(false)}
          >
            Sign In
          </button>
          <button
            style={{
              background: "var(--primary)",
              color: "#fff",
              fontWeight: 500,
              padding: "0.65rem 1.2rem",
              borderRadius: "var(--radius)",
              textAlign: "center",
            }}
            onClick={() => navigate("/chat")}
          >
            Get Started - It's Free
          </button>
        </div>
      )}

      {/* Hero */}
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
            background:
              "linear-gradient(120deg, rgba(26,28,20,0.82) 40%, rgba(45,106,47,0.55) 100%)",
          }}
        />

        <div className="relative z-10 flex-1 flex items-center w-full pb-20 md:pb-0">
          <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-16 py-12 md:py-24 xl:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 xl:gap-20 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6"
              style={{
                background: "rgba(122,182,72,0.18)",
                border: "1px solid rgba(122,182,72,0.4)",
                color: "#a5d67a",
                fontSize: "0.8rem",
                fontFamily: "'DM Mono', monospace",
                letterSpacing: "0.04em",
              }}
            >
              <Zap size={12} />
              AI-POWERED FIELD ASSISTANT
            </div>

            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                color: "#ffffff",
                marginBottom: "1.25rem",
              }}
            >
              Your Smartest
              <br />
              <span style={{ color: "#a5d67a" }}>Farm Companion</span>
            </h1>

            <p
              style={{
                color: "rgba(255,255,255,0.78)",
                fontSize: "1.1rem",
                lineHeight: 1.7,
                maxWidth: "480px",
                marginBottom: "2rem",
              }}
            >
              KRISHI SAARTHI brings the power of large language models to every
              farmer and field supervisor. Get real-time crop advice, pest
              detection, and soil insights — in your language, on your land.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                style={{
                  background: "var(--accent)",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "1rem",
                  padding: "0.8rem 1.8rem",
                  borderRadius: "var(--radius)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
                onClick={() => navigate("/chat")}
                className="hover:opacity-90 transition-opacity"
              >
                Get Started!! <ChevronRight size={18} />
              </button>
              <button
                style={{
                  background: "transparent",
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: "1rem",
                  padding: "0.8rem 1.8rem",
                  borderRadius: "var(--radius)",
                  border: "1.5px solid rgba(255,255,255,0.35)",
                }}
                className="hover:border-white/70 transition-colors"
              >
                Watch Demo
              </button>
            </div>
          </motion.div>

          {/* Floating AI chat card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden md:block"
          >
            <div
              className="rounded-2xl overflow-hidden shadow-2xl"
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.15)",
                padding: "1.5rem",
                maxWidth: "380px",
                marginLeft: "auto",
              }}
            >
              <div className="flex items-center gap-3 mb-4 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: "var(--accent)" }}
                >
                  <Leaf size={16} color="#fff" />
                </div>
                <div>
                  <p style={{ color: "#fff", fontWeight: 600, fontSize: "0.9rem" }}>Krishi AI</p>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.75rem", fontFamily: "'DM Mono', monospace" }}>● Online</p>
                </div>
              </div>

              {[
                { from: "user", text: "My wheat leaves are turning yellow at the edges. What's wrong?" },
                {
                  from: "ai",
                  text: "This looks like Potassium deficiency, common in sandy soils. Apply MOP at 30 kg/acre. Also check for Septoria leaf blotch if spots appear — send me a photo to confirm.",
                },
              ].map((msg, i) => (
                <div
                  key={i}
                  className={`mb-3 flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className="px-3 py-2 rounded-xl max-w-[85%]"
                    style={{
                      background:
                        msg.from === "user"
                          ? "var(--accent)"
                          : "rgba(255,255,255,0.12)",
                      color: "#fff",
                      fontSize: "0.82rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              <div
                className="flex items-center gap-2 mt-4 px-3 py-2 rounded-xl"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <input
                  readOnly
                  placeholder="Ask about your crop..."
                  style={{
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "0.82rem",
                    flex: 1,
                  }}
                />
                <ChevronRight size={16} color="var(--accent)" />
              </div>
            </div>
          </motion.div>
        </div>
        </div>

        {/* Stats bar */}
        <div
          className="relative md:absolute bottom-0 left-0 right-0 z-10 w-full"
          style={{ background: "rgba(26,28,20,0.85)", backdropFilter: "blur(10px)" }}
        >
          <div className="max-w-5xl mx-auto px-6 md:px-12 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.6rem",
                    fontWeight: 700,
                    color: "#a5d67a",
                  }}
                >
                  {s.value}
                </p>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.78rem", marginTop: "0.1rem" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 md:py-32">
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
              What We Offer
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
              Everything a Field Supervisor Needs
            </h2>
            <p
              style={{
                color: "var(--muted-foreground)",
                maxWidth: "520px",
                margin: "1rem auto 0",
                lineHeight: 1.7,
              }}
            >
              From AI-powered chat to detailed field analytics — KRISHI SAARTHI
              covers every dimension of modern precision agriculture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-2xl p-6 transition-shadow hover:shadow-lg"
                style={{
                  background: "var(--card)",
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
                  {f.title}
                </h3>
                <p style={{ color: "var(--muted-foreground)", fontSize: "0.9rem", lineHeight: 1.65 }}>
                  {f.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="py-24 md:py-32"
        style={{ background: "var(--secondary)" }}
      >
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
              How It Works
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
              From Field to Insight
              <br />in Three Steps
            </h2>

            <div className="flex flex-col gap-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="flex gap-5"
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{
                      background: "var(--primary)",
                      fontFamily: "'DM Mono', monospace",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                    }}
                  >
                    {step.number}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 600,
                        fontSize: "1.05rem",
                        color: "var(--foreground)",
                        marginBottom: "0.35rem",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p style={{ color: "var(--muted-foreground)", fontSize: "0.9rem", lineHeight: 1.65 }}>
                      {step.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image collage */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <img
                src={SOIL_IMG}
                alt="Farmer holding healthy soil"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "1" }}>
                <img
                  src={SEEDLING_IMG}
                  alt="Green seedling in hand"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "1" }}>
                <img
                  src={TRACTOR_IMG}
                  alt="Tractor working in green field"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    

         
    

      {/* CTA */}
      <section
        className="py-24 md:py-32 relative overflow-hidden"
        style={{ background: "var(--primary)" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 50%, #a5d67a 0%, transparent 60%)",
          }}
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
            Ready to Transform
            <br />Your Farm's Future?
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.72)",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
            }}
          >
            Join thousands of farmers and field supervisors using AI to make
            smarter, faster decisions — season after season.
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
              Get Started — It's Free <ChevronRight size={18} />
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
              Request a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-10 px-6 md:px-12"
        style={{
          background: "#1a1c14",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center"
              style={{ background: "var(--accent)" }}
            >
              <Leaf size={14} color="#fff" />
            </div>
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                color: "#fff",
                fontSize: "1rem",
              }}
            >
              Krishi Saarthi
            </span>
          </div>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.82rem" }}>
            © 2026 Krishi Saarthi. Empowering Indian Agriculture with AI.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Contact"].map((link) => (
              <a
                key={link}
                href="#"
                style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.82rem" }}
                className="hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}