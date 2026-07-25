import { Loader2, Save } from "lucide-react";

export default function SaveBar({
  saving,
  dirty,
  onSave,
}) {
  return (
    <div className="sticky bottom-4 mt-6 flex flex-col gap-4 radius-theme border border-zinc-800 bg-zinc-900/95 p-4 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:bottom-6">
      <div className="min-w-0">
        <p className="text-base font-semibold text-white sm:text-lg">          {dirty
            ? "Unsaved Changes"
            : "Everything Saved"}
        </p>

        <p className="mt-1 text-sm leading-relaxed text-zinc-400">          {dirty
            ? "Remember to save your latest edits."
            : "Your content is synced."}
        </p>
      </div>

      <button
        disabled={!dirty || saving}
        onClick={onSave}
        className="flex w-full items-center justify-center gap-2 radius-theme-sm bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"      
        >
        {saving ? (
          <Loader2
            size={18}
            className="animate-spin"
          />
        ) : (
          <Save size={18} />
        )}

        {saving ? "Saving..." : "Save Changes"}
      </button>
    </div>
  );
}