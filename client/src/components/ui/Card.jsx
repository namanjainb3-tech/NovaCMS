import { motion } from "framer-motion";

export default function Card({
  children,
  className = "",
  hover = true,
  ...props
}) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -6,
              transition: {
                duration: 0.25,
              },
            }
          : {}
      }
      className={`
        radius-theme
        border
        border-white/8
        bg-white/5
        backdrop-blur-2xl
        shadow-[0_20px_60px_rgba(0,0,0,0.35)]
        transition-all
        duration-300
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
}