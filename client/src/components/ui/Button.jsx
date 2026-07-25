import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-accent text-on-accent hover:bg-accent shadow-lg",

  secondary:
    "border border-white/10 bg-white/5 text-white backdrop-blur-xl hover:bg-white/10",

  ghost:
    "text-slate-300 hover:bg-white/5 hover:text-white",

  danger:
    "bg-red-600 text-white hover:bg-red-500 shadow-lg shadow-red-600/20",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  loading = false,
  disabled = false,
  type = "button",
  ...props
}) {
  const isDisabled = disabled || loading;

  return (
    <motion.button
      type={type}
      whileHover={!isDisabled ? { y: -2, scale: 1.02 } : {}}
      whileTap={!isDisabled ? { scale: 0.98 } : {}}
      transition={{ duration: 0.2 }}
      disabled={isDisabled}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        radius-theme-sm
        px-6
        py-3
        text-sm
        font-semibold
        transition-all
        duration-200
        focus:outline-none
        focus:ring-2
        ring-accent
        disabled:pointer-events-none
        disabled:opacity-60
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {loading && (
        <span
          className="
            h-4
            w-4
            animate-spin
            rounded-full
            border-2
            border-current
            border-t-transparent
          "
        />
      )}

      {children}
    </motion.button>
  );
}