import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";

export default function PublishModal({
  open,
  onClose,
  onPublish,
  publishing,
}) {
  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            transition={{
              duration: 0.2,
            }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md radius-theme border border-zinc-800 bg-zinc-900 p-6 shadow-2xl"
          >
            <h2 className="text-xl font-semibold text-white">
              Publish Website
            </h2>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              You're about to publish all saved changes to
              production.
            </p>

            <p className="mt-2 text-sm text-yellow-400">
              Unsaved changes won't be published.
            </p>

            <div className="mt-8 flex justify-end gap-3">
              <button
                onClick={onClose}
                disabled={publishing}
                className="radius-theme-sm border border-zinc-700 px-4 py-2 text-zinc-300 transition hover:bg-zinc-800"
              >
                Cancel
              </button>

              <button
                onClick={onPublish}
                disabled={publishing}
                className="radius-theme-sm bg-violet-600 px-5 py-2 text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-60"
                >
                {publishing ? "Publishing..." : "Publish"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}