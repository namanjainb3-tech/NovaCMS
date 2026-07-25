import {
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import * as Icons from "lucide-react";

import { motion } from "framer-motion";

import Container from "../ui/Container";
import Card from "../ui/Card";
import SectionHeading from "../ui/SectionHeading";

const accentMap = {
  Upload: {
    bg: "from-cyan-500/20 to-blue-500/10",
    text: "text-cyan-300",
  },
  Sparkles: {
    bg: "from-violet-500/20 to-fuchsia-500/10",
    text: "text-violet-300",
  },
  Eye: {
    bg: "from-amber-500/20 to-orange-500/10",
    text: "text-amber-300",
  },
  Rocket: {
    bg: "from-emerald-500/20 to-green-500/10",
    text: "text-emerald-300",
  },
};

const ACCENTS = [
  accentMap.Upload,
  accentMap.Sparkles,
  accentMap.Eye,
  accentMap.Rocket,
];


export default function Workflow({data}) {
  return (
    <section
      id="workflow"
      className="relative overflow-hidden py-32"
    >

      <div className="absolute inset-0 -z-10">
      <div
        className="absolute left-0 top-32 h-80 w-80 rounded-full blur-[150px]"
        style={{ backgroundColor: "var(--accent-soft)" }}
      />

      <div
        className="absolute right-0 bottom-20 h-80 w-80 rounded-full blur-[170px]"
        style={{ backgroundColor: "var(--accent-soft-2)" }}
      />
      </div>

      <Container>

      <SectionHeading
        badge={data?.badge}
        title={data?.heading}
        subtitle={data?.subtitle}
      />

        <div className="relative mt-20">

          <div className="absolute left-[10%] right-[10%] top-10 hidden lg:block">
            <div className="h-px"
              style={{
                background:
                  "linear-gradient(to right, transparent, var(--accent), transparent)",
              }} />
          </div>

          <div className="grid gap-8 lg:grid-cols-4">
          {(data?.steps || []).map((step, index) => {
            const Icon = Icons[step.icon] || Icons.Upload;

            const accent = ACCENTS[index % ACCENTS.length];
            
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="relative"
              >

                {index !== 0 && (
                  <div className="absolute -top-8 left-1/2 h-8 w-px -translate-x-1/2 bg-gradient-to-b from-violet-500/60 to-transparent lg:hidden" />
                )}

                <Card
                  className={`group relative h-full overflow-hidden border border-white/10 transition-all duration-500 ${accent.border}`}
                >

                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${accent.bg}`}
                  />

                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/5 blur-3xl transition-all duration-500 group-hover:scale-125" />

                  <div className="relative p-8">

                    <div className="flex items-center justify-between">

                      <span
                        className={`text-sm font-semibold uppercase tracking-widest ${accent.text}`}
                      >
                        0{index + 1}
                      </span>

                      <motion.div
                        animate={{
                          y: [0, -4, 0],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 3,
                        }}
                        className="radius-theme border border-white/10 bg-black/20 p-4 backdrop-blur-xl"
                      >
                        <Icon className={`h-7 w-7 ${accent.text}`} />
                      </motion.div>
                    </div>

                    <div className="mt-8">

                      <p className="text-sm uppercase tracking-widest text-gray-500">
                        {step.subtitle}
                      </p>

                      <h3 className="mt-2 text-3xl font-bold text-white">
                        {step.title}
                      </h3>

                      <p className="mt-5 leading-7 text-gray-400">
                        {step.description}
                      </p>
                    </div>

                    <div className="mt-8 radius-theme border border-white/10 bg-black/25 p-5">

                      <div className="flex items-center gap-2">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                        <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                        <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                      </div>

                      <div className="mt-5 space-y-3">

                        <div className="h-2 rounded-full bg-white/10" />

                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "85%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1 }}
                          className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
                        />

                        <div className="h-2 w-3/4 rounded-full bg-white/10" />

                        <div className="h-2 w-2/3 rounded-full bg-white/10" />

                      </div>
                    </div>

                    <div className="mt-8 flex items-center justify-between">

                      <div className="flex items-center gap-2">

                        <CheckCircle2
                          className={`h-5 w-5 ${accent.text}`}
                        />

                        <span className="text-sm text-gray-300">
                          Completed in seconds
                        </span>

                      </div>

                      <motion.div
                        whileHover={{ x: 4 }}
                      >
                        <ArrowRight
                          className={`h-5 w-5 ${accent.text}`}
                        />
                      </motion.div>

                    </div>

                  </div>

                </Card>

              </motion.div>
            );
          })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="mt-24"
          >
          <Card
            className="group relative h-full overflow-hidden border border-white/10 transition-all duration-500 hover-border-accent"
          >

              <div className="border-b border-white/10 bg-white/[0.03] px-8 py-5">

                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                  <div>

                    <p className="text-sm uppercase tracking-widest text-accent">
                      Live Publishing Pipeline
                    </p>

                    <h3 className="mt-2 text-3xl font-bold text-white">
                      Monitor every deployment in real time
                    </h3>

                  </div>

                  <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-sm font-medium text-emerald-300">
                    ● Pipeline Healthy
                  </div>

                </div>

              </div>

    <div className="grid gap-12 p-8 lg:grid-cols-[1.2fr_0.8fr]">

      <div>

        {[
          {
            title: "Upload Content",
            status: "Completed",
            color: "emerald",
          },
          {
            title: "AI Optimization",
            status: "Completed",
            color: "emerald",
          },
          {
            title: "Quality Review",
            status: "Running",
            color: "accent",
          },
          {
            title: "Publishing",
            status: "Waiting",
            color: "gray",
          },
        ].map((item, index) => (
          <div
            key={item.title}
            className="flex items-center justify-between border-b border-white/5 py-5 last:border-none"
          >
            <div className="flex items-center gap-4">

            <div
              className={`h-3 w-3 rounded-full ${
                item.color === "emerald"
                  ? "bg-emerald-400"
                  : item.color === "accent"
                  ? "animate-pulse"
                  : "bg-gray-500"
              }`}
              style={
                item.color === "accent"
                  ? { backgroundColor: "var(--accent)" }
                  : {}
              }
            />

              <span className="text-lg text-white">
                {item.title}
              </span>

            </div>

            <span
              className={`text-sm font-medium ${
                item.color === "emerald"
                  ? "text-emerald-300"
                  : item.color === "gray"
                  ? "text-gray-500"
                  : ""
              }`}
              style={
                item.color === "accent"
                  ? { color: "var(--accent)" }
                  : {}
              }
            ></span>
          </div>
        ))}

      </div>

      <div>

        <div className="radius-theme border border-white/10 bg-black/30 p-6">

          <div className="flex items-center justify-between">

            <span className="text-gray-400">
              Deployment Progress
            </span>

            <span className="font-semibold text-white">
              92%
            </span>

          </div>

          <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "92%" }}
              viewport={{ once: true }}
              transition={{
                duration: 1.6,
              }}
              className="h-full rounded-full"
              style={{
                background:
                  "linear-gradient(to right, var(--accent), var(--accent-hover))",
              }}
            />

          </div>

          <div className="mt-8 space-y-5">

            <div>

              <p className="text-sm text-gray-500">
                Current Task
              </p>

              <p className="mt-1 text-white">
                Running AI quality validation...
              </p>

            </div>

            <div>

              <p className="text-sm text-gray-500">
                Estimated Time
              </p>

              <p className="mt-1 text-white">
                ~12 seconds remaining
              </p>

            </div>

            <div>

              <p className="text-sm text-gray-500">
                Environment
              </p>

              <p className="mt-1 text-emerald-300">
                Production
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  </Card>
</motion.div>

</div>

</Container>

</section>
);
}
          
