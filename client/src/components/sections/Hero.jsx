import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Container from "../ui/Container";
import Button from "../ui/Button";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Hero({ data }) {
  const [showDemo, setShowDemo] = useState(false);
  return (
    <section className="relative overflow-hidden pt-40 pb-24">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[170px]" />

        <div className="absolute right-0 top-36 h-[350px] w-[350px] rounded-full bg-violet-600/15 blur-[140px]" />

        <div className="absolute left-0 top-64 h-[280px] w-[280px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <Container>
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div
            className="inline-flex items-center gap-2 rounded-full border px-5 py-2 backdrop-blur-xl"
            style={{
              borderColor: "var(--accent-border)",
              backgroundColor: "var(--accent-soft)",
            }}
          >
            <Sparkles
              className="h-4 w-4"
              style={{ color: "var(--accent)" }}
            />

            <span
              className="text-sm font-medium"
              style={{ color: "var(--accent)" }}
            >
              {data?.badge || "Modern CMS Platform"}
            </span>
          </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            custom={0.15}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 max-w-5xl text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl"          
            >
            {data?.heading ||
              "Manage Your Website Without Writing Code"}
          </motion.h1>

          {/* Description */}
          <motion.p
            custom={0.3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl"
          >
            {data?.description ||
              "Create, edit and publish content instantly using a premium visual CMS built for startups, agencies and modern product teams."}
          </motion.p>

          {/* CTA */}
          <motion.div
            custom={0.45}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-12 flex flex-col gap-4 sm:flex-row"
          >
            <Link to="/Dashboard">
            <Button className="group h-14 radius-theme px-8 text-base">
              {data?.buttonText || "Get Started"}

              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            </Link>

            <Button
              variant="secondary"
              className="h-14 radius-theme px-8 text-base"
              onClick={() => setShowDemo(true)}
            >
              <Play className="h-5 w-5 fill-current" />

              {data?.secondaryButton || "Live Demo"}
            </Button>
          </motion.div>

          {/* Hero Image */}

        {data?.image && (
          <motion.div
            custom={0.6}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-20 w-full"
          >
            <img
              src={`http://localhost:5000${data.image}`}
              alt="Hero"
              className="mx-auto w-2xl max-w-2xl radius-theme-lg border border-white/10 shadow-2xl"
            />
          </motion.div>
        )}
        </div>
      </Container>
      <AnimatePresence>
        {showDemo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowDemo(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-[95vw] max-w-5xl overflow-hidden rounded-xl sm:rounded-2xl bg-slate-900 shadow-2xl"
            >
              <button
                onClick={() => setShowDemo(false)}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/60 px-3 py-1 text-white"
              >
                ✕
              </button>

              <div className="aspect-video w-full">
              <video
                controls
                autoPlay
                playsInline
                className="h-full w-full object-contain"
              >
                <source src="/demo.mp4" type="video/mp4" />
              </video>
            </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}