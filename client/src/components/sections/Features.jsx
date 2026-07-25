import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import * as Icons from "lucide-react";

import { motion } from "framer-motion";

import Container from "../ui/Container";
import Card from "../ui/Card";
import SectionHeading from "../ui/SectionHeading";

const gradients = [
  "from-indigo-500/20 via-violet-500/10 to-transparent",
  "from-violet-500/20 via-fuchsia-500/10 to-transparent",
  "from-cyan-500/20 via-blue-500/10 to-transparent",
  "from-emerald-500/20 via-green-500/10 to-transparent",
];

export default function Features({data}) {
  return (
    <section
      id="features"
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-[140px]" />

        <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-violet-500/10 blur-[160px]" />
      </div>

      <Container>
      <SectionHeading
        badge={data?.badge}
        title={data?.heading}
        subtitle={data?.subtitle}
      />

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
        {(data?.cards || []).map((feature, index) => {
            const Icon = Icons[feature.icon] || Icons.FileText;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
              >
                <Card className="group relative h-full overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover-border-accent hover:bg-white/[0.05]">                  {/* Gradient */}

                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      gradients[index % gradients.length]
                    } opacity-80`}
                  />

                  {/* Glow */}

                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/5 blur-3xl transition-all duration-500 group-hover:scale-125" />

                  <div className="relative flex h-full flex-col justify-between p-8">
                    {/* Top */}

                    <div>
                      <motion.div
                        whileHover={{
                          rotate: -6,
                          scale: 1.08,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                        className="mb-7 flex h-16 w-16 items-center justify-center radius-theme border border-white/10 bg-accent-gradient"
                      >
                        <Icon className="h-8 w-8 text-accent" />
                      </motion.div>

                      <h3 className="text-2xl font-bold text-white">
                        {feature.title}
                      </h3>

                      <p className="mt-4 leading-7 text-gray-400">
                        {feature.description}
                      </p>

                      {/* Mock UI */}

                      <div className="mt-8 radius-theme border border-white/10 bg-black/30 p-5">
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full bg-red-400" />
                          <div className="h-3 w-3 rounded-full bg-yellow-400" />
                          <div className="h-3 w-3 rounded-full bg-green-400" />
                        </div>

                        <div className="mt-5 space-y-3">
                          <div className="h-3 w-3/4 rounded-full bg-white/10" />
                          <div className="h-3 w-full rounded-full bg-white/10" />
                          <div className="h-3 w-5/6 rounded-full bg-accent-soft" />
                          <div className="h-3 w-2/3 rounded-full bg-white/10" />
                        </div>
                      </div>
                    </div>

                    {/* Bottom */}

                    <div className="mt-10">
                      <div className="space-y-3">
                      {(feature.bullets || []).map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-3"
                          >
                            <CheckCircle2 className="h-5 w-5 text-emerald-400" />

                            <span className="text-sm text-gray-300">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>

                      <motion.button
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                        className="mt-8 flex items-center gap-2 font-medium text-accent hover-accent"
                      >
                        Learn More

                        <ArrowRight className="h-4 w-4" />
                      </motion.button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
            </div>
      </Container>
    </section>
  );
}