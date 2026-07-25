import { ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AccordionCard({
  title,
  subtitle,
  open,
  actions,
  onToggle,
  children,
}) {
  return (
    <div className="overflow-hidden radius-theme border border-zinc-800 bg-zinc-900">

      <div className="flex items-center justify-between px-6 py-5 transition hover:bg-zinc-800/60">

        {/* Toggle button */}
        <button
          onClick={onToggle}
          className="flex flex-1 items-center justify-between text-left"
        >
          <div>
            <h3 className="text-lg font-semibold text-white">
              {title}
            </h3>

            {subtitle && (
              <p className="mt-1 text-sm text-zinc-400">
                {subtitle}
              </p>
            )}
          </div>

          {open ? (
            <ChevronDown
              size={20}
              className="text-zinc-400"
            />
          ) : (
            <ChevronRight
              size={20}
              className="text-zinc-400"
            />
          )}
        </button>

        {/* Actions OUTSIDE the toggle button */}
        {actions && (
          <div
            className="ml-4 flex items-center gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            {actions}
          </div>
        )}

      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="overflow-hidden"
          >
            <div className="border-t border-zinc-800 p-6">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}