import { ArrowRight, Play, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import Container from "../ui/Container";
import Button from "../ui/Button";

export default function CTA({data}) {
  return (
    <section className="relative overflow-hidden py-32">

      <div className="absolute inset-0 -z-10">

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.2) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.2) 1px,transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[160px]" />

        <div className="absolute left-20 top-20 h-60 w-60 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[180px]" />

      </div>

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl md:p-20"
        >

          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[130px]" />

          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-[140px]" />

          <div className="relative mx-auto max-w-4xl text-center">

            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2"
            >
              <Sparkles className="h-4 w-4 text-violet-300" />

              <span className="text-sm font-medium text-violet-300">
                {data?.badge}
              </span>

            </motion.div>

            <h2 className="mt-8 text-4xl font-bold leading-tight text-white md:text-6xl">
              {data?.heading}
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            {data?.description}
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <Button
              variant="primary"
              className="group px-8 py-4 text-base"
            >
              {data?.buttonText}

              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>

            <Button
              variant="secondary"
              className="group px-8 py-4 text-base"
            >
              <Play className="mr-2 h-5 w-5 fill-current" />

              {data?.secondaryButton}
            </Button>

            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-3">

            {(data?.stats || []).map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2 + index * 0.15,
              }}
              className="radius-theme border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
            >
              <h3 className="text-3xl font-bold text-white">
                {item.value}
              </h3>

              <p className="mt-2 text-gray-400">
                {item.label}
              </p>
            </motion.div>
          ))}

            </div>

                </div>

                <motion.div
                animate={{
                y: [0, -12, 0],
                }}
                transition={{
                duration: 5,
                repeat: Infinity,
                }}
                className="absolute left-8 top-10 hidden rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 lg:block"
                >
                AI Powered
                </motion.div>

                <motion.div
                animate={{
                y: [0, 12, 0],
                }}
                transition={{
                duration: 6,
                repeat: Infinity,
                }}
                className="absolute right-10 top-16 hidden rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300 lg:block"
                >
                Real-Time Editing
                </motion.div>

                <motion.div
                animate={{
                y: [0, -10, 0],
                }}
                transition={{
                duration: 4.5,
                repeat: Infinity,
                }}
                className="absolute bottom-10 left-16 hidden rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300 lg:block"
                >
                Instant Publishing
                </motion.div>

            </motion.div>

        </Container>

      </section>
  );
}
