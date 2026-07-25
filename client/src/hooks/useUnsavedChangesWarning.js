import { useEffect } from "react";

export default function useUnsavedChangesWarning(hasUnsavedChanges) {
  useEffect(() => {
    function handleBeforeUnload(e) {
      if (!hasUnsavedChanges) return;

      e.preventDefault();
      e.returnValue = "";
    }

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener(
        "beforeunload",
        handleBeforeUnload
      );
    };
  }, [hasUnsavedChanges]);
}