import { GripVertical } from "lucide-react";

export default function DragHandle({
  listeners,
  attributes,
}) {
  return (
    <button
      {...listeners}
      {...attributes}
      type="button"
      className="rounded-lg p-2 text-zinc-500 transition hover:bg-zinc-800 hover:text-white cursor-grab active:cursor-grabbing"
      title="Drag"
    >
      <GripVertical size={16} />
    </button>
  );
}