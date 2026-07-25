import { motion } from "framer-motion";
import { Pencil } from "lucide-react";

import { useCMS } from "../../../context/CMSContext";

export default function EditableSection({
  id,
  title,
  children,
}) {
  const {
    activeSection,
    setActiveSection,
    hoveredSection,
    setHoveredSection,
  } = useCMS();

  const active = activeSection === id;
  const hovered = hoveredSection === id;

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHoveredSection(id)}
      onMouseLeave={() => setHoveredSection(null)}
      onClick={() => setActiveSection(id)}
    >
      {(hovered || active) && (
        <motion.div
          layoutId="editor-highlight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`pointer-events-none absolute inset-0 z-40 radius-theme-lg border-2 transition-all ${
            active
              ? "border-violet-500 shadow-[0_0_0_3px_rgba(139,92,246,.2)]"
              : "border-violet-400/70"
          }`}
        />
      )}

      {(hovered || active) && (
        <motion.button
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-4 top-4 z-50 flex items-center gap-2 radius-theme-sm bg-violet-600 px-4 py-2 text-sm font-medium text-white shadow-xl"
        >
          <Pencil size={14} />
          Edit {title}
        </motion.button>
      )}

      {children}
    </div>
  );
}