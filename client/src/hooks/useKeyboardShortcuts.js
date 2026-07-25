import { useEffect } from "react";

export default function useKeyboardShortcuts({
  undo,
  redo,
  save,
}) {
  useEffect(() => {
    function handleKeyDown(e) {
      const ctrl = e.ctrlKey || e.metaKey;

      if (!ctrl) return;

      const key = e.key.toLowerCase();

      // Ctrl + Z
      if (key === "z" && !e.shiftKey) {
        e.preventDefault();
        undo();
        return;
      }

      // Ctrl + Shift + Z
      if (key === "z" && e.shiftKey) {
        e.preventDefault();
        redo();
        return;
      }

      // Ctrl + Y (Windows)
      if (key === "y") {
        e.preventDefault();
        redo();
        return;
      }

      // Ctrl + S
      if (key === "s") {
        e.preventDefault();
        save();
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [undo, redo, save]);
}