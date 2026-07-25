import { motion } from "framer-motion";

export default function BrowserWindow({
  title = "cms.example.com/dashboard",
  children,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        overflow-hidden
        radius-theme lg:rounded-[32px]
        border
        border-white/10
        bg-[#08111f]/90
        shadow-[0_40px_120px_rgba(0,0,0,.45)]
        backdrop-blur-3xl
      "
    >
      {/* Browser Header */}
      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-white/10
          bg-white/[0.03]
          px-6
          py-4
        "
      >
        {/* macOS Controls */}
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>

        {/* Address Bar */}
        <div
          className="
            hidden
            flex-1
            justify-center
            px-8
            md:flex
          "
        >
          <div
            className="
              w-full
              max-w-md
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              px-4
              py-2
              text-center
              text-sm
              text-slate-400
            "
          >
            {title}
          </div>
        </div>

        {/* Status */}
        <div
          className="
            rounded-full
            border
            border-emerald-500/20
            bg-emerald-500/10
            px-3
            py-1
            text-xs
            font-medium
            text-emerald-300
          "
        >
          Live
        </div>
      </div>

      {/* Browser Content */}
      <div className="bg-[#020817]">
        {children}
      </div>
    </motion.div>
  );
}