import { CheckCircle2, Clock3, FileEdit, Eye } from "lucide-react";

const variants = {
  published: {
    icon: CheckCircle2,
    label: "Published",
    className:
      "border-emerald-500/20 bg-emerald-500/10 text-emerald-300",
  },

  draft: {
    icon: FileEdit,
    label: "Draft",
    className:
      "border-amber-500/20 bg-amber-500/10 text-amber-300",
  },

  scheduled: {
    icon: Clock3,
    label: "Scheduled",
    className:
      "border-sky-500/20 bg-sky-500/10 text-sky-300",
  },

  review: {
    icon: Eye,
    label: "In Review",
    className:
      "border-violet-500/20 bg-violet-500/10 text-violet-300",
  },
};

export default function StatusBadge({
  status = "published",
}) {
  const current = variants[status] || variants.published;

  const Icon = current.icon;

  return (
    <div
      className={`
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        px-3
        py-1.5
        text-xs
        font-semibold
        backdrop-blur-xl
        ${current.className}
      `}
    >
      <Icon size={14} />

      <span>{current.label}</span>
    </div>
  );
}