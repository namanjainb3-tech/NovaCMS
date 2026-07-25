import { useCallback, useState } from "react";

export default function useHistory() {
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const initialize = useCallback((initialState) => {
    const snapshot = structuredClone(initialState);

    setHistory([snapshot]);
    setHistoryIndex(0);
  }, []);

  const push = useCallback((newState) => {
    const snapshot = structuredClone(newState);

    setHistory((prev) => {
      const trimmed = prev.slice(0, historyIndex + 1);
      return [...trimmed, snapshot];
    });

    setHistory((prev) => {
      setHistoryIndex(prev.length - 1);
      return prev;
    });
  }, [historyIndex]);

  const undo = useCallback(() => {
    if (historyIndex <= 0) return null;

    const nextIndex = historyIndex - 1;
    setHistoryIndex(nextIndex);

    return history[nextIndex];
  }, [history, historyIndex]);

  const redo = useCallback(() => {
    if (historyIndex >= history.length - 1) return null;

    const nextIndex = historyIndex + 1;
    setHistoryIndex(nextIndex);

    return history[nextIndex];
  }, [history, historyIndex]);

  return {
    initialize,
    push,
    undo,
    redo,
    canUndo: historyIndex > 0,
    canRedo: historyIndex < history.length - 1,
  };
}