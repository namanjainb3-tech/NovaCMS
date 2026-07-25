import { motion } from "framer-motion";

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
}) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={isCenter ? "text-center" : "text-left"}
    >
      {badge && (
        <div
          className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium backdrop-blur-xl"
          style={{
            borderColor: "var(--accent-border)",
            backgroundColor: "var(--accent-soft)",
            color: "var(--accent)",
          }}
        >
          {badge}
        </div>
      )}

      <h2
        className="
          mt-6
          text-4xl
          font-bold
          tracking-tight
          text-white
          md:text-5xl
          lg:text-6xl
        "
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`
            mt-6
            max-w-2xl
            text-lg
            leading-8
            text-slate-400
            ${isCenter ? "mx-auto" : ""}
          `}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}