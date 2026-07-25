import { motion } from "framer-motion";

import Container from "../ui/Container";

import BrowserWindow from "./BrowserWindow";
import Sidebar from "./Sidebar";
import Editor from "./Editor";
import Inspector from "./Inspector";

export default function DashboardPreview() {
  return (
    <section className="relative pb-32">
      <div className="absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-[170px]"
        style={{ backgroundColor: "var(--accent-soft-2)" }}
      />

      <div
        className="absolute right-0 top-52 h-[380px] w-[380px] rounded-full blur-[150px]"
        style={{ backgroundColor: "var(--accent-soft)" }}
      />

      <div
        className="absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full blur-[140px]"
        style={{ backgroundColor: "var(--accent-soft)" }}
      />

      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-10 max-w-3xl px-4 text-center lg:mb-16"
        >
          <span
            className="rounded-full border px-4 py-2 text-sm font-medium"
            style={{
              borderColor: "var(--accent-border)",
              backgroundColor: "var(--accent-soft)",
              color: "var(--accent)",
            }}
          >
            Visual Content Studio
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl">
            Built for modern content teams
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Experience a powerful visual editor with publishing,
            collaboration, SEO optimization and real-time workflow
            management—all in one premium interface.
          </p>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <BrowserWindow>
          <div
            className="
                flex
                min-h-[760px]
                flex-col
                bg-[#07111d]
                lg:flex-row
            "
            >
              <Sidebar />

              <Editor />

              <Inspector />
            </div>
          </BrowserWindow>
        </motion.div>
      </Container>
    </section>
  );
}
